import React from 'react'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import Layout from './layout'
import { graphql } from 'gatsby'
import ListadoPropiedades from './listadoPropiedades'

const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

export const query = graphql`
  query($id: String!) {
    allStrapiPaginas(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        contenido
        id
        imagen {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Paginas = ({
  data: {
    allStrapiPaginas: { nodes },
  },
}) => {
  const { nombre, contenido, imagen } = nodes[0]
  console.log(nombre)

  return (
    <Layout>
      <main>
        <h1>{nombre}</h1>
        <Contenido>
          <Image fluid={imagen.sharp.fluid} />
          <p>{contenido}</p>
        </Contenido>
      </main>

      {nombre === 'Propiedades' && <ListadoPropiedades />}
    </Layout>
  )
}

export default Paginas
