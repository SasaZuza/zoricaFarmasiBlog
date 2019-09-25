import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  // This const allows us to query data with graphql
  // In this case we access title and date from markdown files in 'components/posts' directory
  /*
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  */

  // This const allows us to query data with graphql
  // In this case we access data from contentful app and display content
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="My Blogs" />
      <h1 className={blogStyles.title}>Moji blog postovi:</h1>
      {/* This is how we access those markdown files and display title and date of the posts */}
      {/* <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2> {edge.node.frontmatter.title} </h2>
                <p> {edge.node.frontmatter.date} </p>
              </Link>
            </li>
          )
        })}
      </ol> */}

      {/* This is how we access contentful data and display it */}
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2 className={blogStyles.postTitle}> {edge.node.title} </h2>
                <p> {edge.node.publishedDate} </p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
