import React from "react"
import Layout from "../components/layout"
// import BlogPage from "../pages/blog"
import { graphql, Link } from "gatsby"
import blogStyles from "../pages/blog.module.scss"

const PostList = props => {
  const posts = props.data.allContentfulBlogPost.edges
  const { currentPage } = props.pageContext

  return (
    <Layout pageTitle={`Page: ${currentPage}`}>
      <ol className={blogStyles.posts}>
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
