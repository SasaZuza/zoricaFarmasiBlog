// Import path as Node option
const path = require("path")

// This allows us to grab new posts from .md file after we create them
// We don't use this if we are using contentful now
/*
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // Defining slug to access .md file by it's name without extension
    const slug = path.basename(node.fileAbsolutePath, ".md")

    // This is how we crete new node field for posts slug - we add those arguments
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
*/

// This allows us to create new pages on out blog with function 'createPages'
// This is option for using markdown files
/*
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Getting path for template for creating new blog post
  const blogTemplate = path.resolve("./src/templates/blog.js")
  // With 'graphql' argument we access slugs for blog posts
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  
  // We want to run all those posts and create page for them with 'createPage' function
  res.data.allMarkdownRemark.edges.forEach(edge => {
    // Here we add those arguments
    createPage({
      // As a component option we add that path to our template
      component: blogTemplate,
      // We add here dynamic path for page based of name of the slug
      path: `/blog/${edge.node.fields.slug}`,
      // This is objects that connect to slug and gets posts content like title, text ...
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
*/

////////////////////////////////////////////////////////////////////////////////////////////////////

// This allows us to create new pages on out blog with function 'createPages'
// This is option for using contentful
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Getting path for template for creating new blog post
  const blogTemplate = path.resolve("./src/templates/blog.js")

  // Page templates
  const templates = {
    postList: path.resolve("src/templates/post-list.js"),
  }

  // With 'graphql' argument we access slugs for blog posts
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // We want to run all those posts and create page for them with 'createPage' function
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    // Here we add those arguments
    createPage({
      // As a component option we add that path to our template
      component: blogTemplate,
      // We add here dynamic path for page based of name of the slug
      path: `/blog/${edge.node.slug}`,
      // This is objects that connect to slug and gets posts content like title, text ...
      context: {
        slug: edge.node.slug,
      },
    })
  })

  ///////////////////////////////////////////////////////////////////////////////////////

  // Extracting all posts from res
  const posts = res.data.allContentfulBlogPost.edges

  // Create posts pagination pages
  const postsPerPage = 2
  const numberOfPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numberOfPages }).forEach((_, blog) => {
    const isFirstPage = blog === 0
    const currentPage = blog + 1

    // Skip first page because of index.js
    if (isFirstPage) return

    createPage({
      path: `blog/${currentPage}`,
      component: templates.postList,
      context: {
        limit: postsPerPage,
        skip: blog * postsPerPage,
        currentPage,
      },
    })
  })
}
