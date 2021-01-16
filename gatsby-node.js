/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const urlSlug = require('url-slug')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiPaginas {
        nodes {
          nombre
          id
        }
      }
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `)
  // console.log(resultado.data.allStrapiPropiedades)
  if (resultado.errors) {
    reporter.panic('No hubo resultados', resultado.errors)
  }

  const paginas = resultado.data.allStrapiPaginas.nodes
  const propiedades = resultado.data.allStrapiPropiedades.nodes

  paginas.forEach(pagina => {
    actions.createPage({
      path: urlSlug(pagina.nombre),
      component: require.resolve('./src/components/paginas.jsx'),
      context: {
        id: pagina.id,
      },
    })
  })

  propiedades.forEach(propiedad => {
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve('./src/components/propiedades.jsx'),
      context: {
        id: propiedad.id,
      },
    })
  })
}
