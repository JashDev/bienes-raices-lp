import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import usePropiedades from '../hooks/usePropiedades'
import PropiedadPreview from './propiedadPreview'
import listadoPropiedadesCss from '../css/listadoPropiedades.module.css'
import useFiltro from '../hooks/useFiltro'

const ListadoPropiedades = () => {
  const resultado = usePropiedades()
  const [propiedades] = useState(resultado)
  const [filtradas, setFiltradas] = useState([])
  const { categoria, FiltroUI } = useFiltro()

  useEffect(() => {
    if (categoria) {
      const filtro = propiedades.filter(p => p.categorias.name === categoria)
      setFiltradas(filtro)
    } else {
      setFiltradas(propiedades)
    }
    // setPropiedades(resultado)
  }, [categoria, propiedades])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras propiedades
      </h2>

      {FiltroUI()}

      <ul className={listadoPropiedadesCss.propiedades}>
        {filtradas.map(propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades
