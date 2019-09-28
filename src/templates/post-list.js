import React from "react"
import Layout from "../components/layout"

import { graphql, Link } from "gatsby"
import blogStyles from "../pages/blog.module.scss"

// Creating component that will show post on new page after setting pagination
const PostList = props => {
  // Accessing data from query defined bellow
  const posts = props.data.allContentfulBlogPost.edges

  return (
    <Layout>
      <ol className={blogStyles.posts}>
        {/* Looping through post and setting pagination  */}
        {posts.map(({ node }) => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${node.slug}`}>
              <h2 className={blogStyles.postTitle}> {node.title} </h2>
              <p> {node.publishedDate} </p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

// Query to access posts from contentful
export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

export default PostList
