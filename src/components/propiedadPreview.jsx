import React from 'react'
import Iconos from './iconos'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import urlSlug from 'url-slug'

const Card = styled.div`
  border: 1px solid #e1e1e1;
  img {
    max-width: 100%;
  }
`

const Contenido = styled.div`
  padding: 2rem;
  h3 {
    font-family: 'Lato', sans-serif;
    margin: 0 0 2rem 0;
    font-size: 2.4rem;
  }

  .precio {
    font-size: 2rem;
    color: #75ab00;
  }
`

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #75ab00;
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`

const PropiedadPreview = ({ propiedad }) => {
  const {
    nombre,
    imagen,
    wc,
    estacionamiento,
    habitaciones,
    precio,
  } = propiedad
  return (
    <Card>
      <Image fluid={imagen.sharp.fluid} />
      <Contenido>
        <h3>nombre</h3>
        <p className="precio">$ {precio}</p>
        <Iconos
          estacionamiento={estacionamiento}
          wc={wc}
          habitaciones={habitaciones}
        />
      </Contenido>
      <Boton to={`/${urlSlug(nombre)}`}>Visitar propiedad</Boton>
    </Card>
  )
}

export default PropiedadPreview
