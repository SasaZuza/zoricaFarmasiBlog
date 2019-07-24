import React from "react"
import { graphql } from "gatsby"
// This will take json from contentful and render it through Rect component
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"
import blogStyles from "./blog.module.scss"

// We in this case use export query so we can use it in out app
// We use this query for markdown files
/*
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
*/

// const Blog = props => {
//   return (
//     <Layout>
//       {/* This is how we render to screen title and date of the blog */}
//       <h1>{props.data.markdownRemark.frontmatter.title}</h1>
//       <p>{props.data.markdownRemark.frontmatter.date}</p>
//       {/* This is how we render html inside <div> */}
//       <div
//         dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
//       ></div>
//     </Layout>
//   )
// }

///////////////////////////////////////////////////////////////////////////////////////////////

// This is query for contentful
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  // Created object for rendering the image to blog post
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        // Setting image alt and url with graphql from Contentful json file data
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        // Returning image with calling image alt and url with graphql from Contentful source file
        return <img className={blogStyles.blogImage} alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />

      <h1 className={blogStyles.blogTitle}>
        {props.data.contentfulBlogPost.title}
      </h1>

      <p className={blogStyles.published}>
        {" "}
        Datum objave: {props.data.contentfulBlogPost.publishedDate}
      </p>

      <div className={blogStyles.blogContent}>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </div>
    </Layout>
  )
}

export default Blog
