import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  // props.children - represents the content inside of that component when it's rendered
  // Ex inside 'index.js' page and also in 'about.js' and 'contact.js'
  return (
    <div className={layoutStyles.container}>
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Lobster|Roboto&display=swap');
      </style>

      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
