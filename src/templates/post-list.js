import React from "react"
import Layout from "../components/layout"
import BlogPage from "../pages/blog"
import { graphql } from "gatsby"

const PostList = props => {
  const posts = props.data.allContentfulBlogPost.edges
  const { currentPage } = props.pageContext

  return (
    <Layout pageTitle={`Page: ${currentPage}`}>
      {posts.map(({ edge }) => (
        <BlogPage title={edge.node.title} date={edge.node.publishedDate} />
      ))}
    </Layout>
  )
}

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
