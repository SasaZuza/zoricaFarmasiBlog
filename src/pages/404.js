import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import ErrorStyles from "./404.module.scss"
import errorImg from "../profileImg/404Error.jpg"

// This is functional component that returns 404 error page with some custom text
const NotFound = () => {
  return (
    <Layout>
      <Head title="404 Error!!!" />

      <h1 className={ErrorStyles.errorTitle}>Page not found</h1>

      <img
        className={ErrorStyles.errorPic}
        src={errorImg}
        alt="Error picture"
      />

      <p className={ErrorStyles.errorParagraph}>
        <Link className={ErrorStyles.errorLink} to="/">
          Go back to Homepage
        </Link>
      </p>
    </Layout>
  )
}

export default NotFound
