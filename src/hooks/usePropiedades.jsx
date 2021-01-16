import { useStaticQuery } from 'gatsby'

const usePropiedades = () => {
  const resultado = useStaticQuery(graphql`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          estacionamiento
          habitaciones
          id
          descripcion
          wc
          precio
          categorias {
            name
          }
          agentes {
            nombre
            telefono
            email
          }
          imagen {
            sharp: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return resultado.allStrapiPropiedades.nodes
}

export default usePropiedades
