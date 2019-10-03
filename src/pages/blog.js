import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"
import PaginationLinks from "../components/paginationLinks"

const BlogPage = () => {
  // This const allows us to query data with graphql
  // In this case we access data from contentful app and display content
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
        limit: 5
      ) {
        totalCount
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

  // Declaring variables for posts per page and number of pages that is dynamic
  const postsPerPage = 5
  let numberOfPages

  return (
    <Layout>
      <Head title="My Blogs" />
      <h1 className={blogStyles.title}>Moji blog postovi:</h1>

      {/* This is how we access contentful data and display it */}
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          {
            /* Calculating number of pages */
          }
          numberOfPages = Math.ceil(
            data.allContentfulBlogPost.totalCount / postsPerPage
          )
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2 className={blogStyles.postTitle}> {edge.node.title} </h2>
                <p> {edge.node.publishedDate} </p>
              </Link>
            </li>
          )
        })}
        <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
      </ol>
    </Layout>
  )
}

export default BlogPage
