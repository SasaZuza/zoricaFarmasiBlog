import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  // This const allows us to query data with graphql
  // In this case we access author from 'gatsby-config.js' file
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        Page Created By{" "}
        <a
          className={footerStyles.creator}
          href="https://sasa-portfolio-page.netlify.com/"
          target="_blank"
        >
          {data.site.siteMetadata.author}
        </a>
        , © 2019
      </p>
    </footer>
  )
}

export default Footer
