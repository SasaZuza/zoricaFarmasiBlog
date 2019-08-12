import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// Importing .scss file with basic styles
// import "./header.module.scss"

// Importing CSS modules - We can give it name like we want to
import headerStyles from "./header.module.scss"
import siteLogo from "../profileImg/ulogo.jpg"

const Header = () => {
  // This const allows us to query data with graphql
  // In this case we access title from 'gatsby-config.js' file
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerContainer}>
        <img
          src={siteLogo}
          className={headerStyles.logoSitePic}
          alt="Profile picture"
        />

        <div className={headerStyles.headerTitle}>
          <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </div>
      </div>

      <nav className={headerStyles.menu}>
        <ul className={headerStyles.navList}>
          <li>
            {/* This is how we apply CSS module - By it's name and style option from file we want to add */}
            {/* 'activeClassName' - defines class and styling for page that we are currently on */}
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Početna
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Moj Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              O meni
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
