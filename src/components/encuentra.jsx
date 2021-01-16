import React from 'react'
import { useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import heroCss from '../css/hero.module.css'

const ImgBg = styled(BackgroundImage)`
  height: 300px;
`

const Encuentra = () => {
  const { imagen } = useStaticQuery(graphql`
    query {
      imagen: file(relativePath: { eq: "encuentra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ImgBg tag="section" fluid={imagen.sharp.fluid} fadeIn="soft">
      <div className={heroCss.imagenbg}>
        <h3 className={heroCss.titulo}>Encuentra la casa de tus sueños</h3>
        <p>15 años de experiencia</p>
      </div>
    </ImgBg>
  )
}

export default Encuentra
