import React from 'react'
import Layout from '../components/layout'
import useInicio from '../hooks/useinicio'
import { css } from '@emotion/core'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import heroCss from '../css/hero.module.css'
import Encuentra from '../components/encuentra'
import ListadoPropiedades from '../components/listadoPropiedades'

const ImgBg = styled(BackgroundImage)`
  height: 600px;
`

const Index = () => {
  const { nombre, contenido, imagen } = useInicio()

  return (
    <Layout>
      <ImgBg tag="section" fluid={imagen.sharp.fluid} fadeIn="soft">
        <div className={heroCss.imagenbg}>
          <h1 className={heroCss.titulo}>
            Venta de casas y departamentos exclusivos
          </h1>
        </div>
      </ImgBg>
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{nombre}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >
            {contenido}
          </p>
        </div>
      </main>
      <Encuentra />
      <ListadoPropiedades />
    </Layout>
  )
}

export default Index
