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

async function createProducts(graphql, createPage) {
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

  result.data.allDatoCmsProduct.edges.forEach(function({
    node: product,
  }) {
    console.log(product)
    createPage({
      path: `produkty/${product.slug}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        slug: product.slug,
      },
    })
  })
}

async function createInfos(graphql, createPage) {
    const result = await graphql(`
    {
      allDatoCmsInfo {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allDatoCmsInfo.edges.forEach(function({
    node: info,
  }) {
    console.log(info)
    createPage({
      path: `informacje/${info.slug}`,
      component: path.resolve(`./src/templates/info.js`),
      context: {
        slug: info.slug,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  console.log("createPages")

  await createProducts(graphql, createPage)
  await createInfos(graphql, createPage)
}
