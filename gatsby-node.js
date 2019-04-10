const path = require("path")

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  console.log("createPages")

  const result = await graphql(`
    {
      allDatoCmsProduct {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return result.data.allDatoCmsProduct.edges.forEach(function({
    node: product,
  }) {
    createPage({
      path: `products/${product.slug}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        slug: product.slug,
      },
    })
  })
}
