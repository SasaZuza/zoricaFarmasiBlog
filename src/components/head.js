import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// This is functional component that will return pages titles for browser display
// 'title' is prop that we create in <Head /> tag in every component we create
const Head = ({ title }) => {
  // This is how we grab page title with graphql
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Here we return that page title that we grabbed with graphql and also custom title as props in every page
  return <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
}

export default Head
