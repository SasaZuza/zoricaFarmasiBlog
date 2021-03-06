import React from "react"
import { graphql } from "gatsby"
// This will take json from contentful and render it through Rect component
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { DiscussionEmbed } from "disqus-react"

import Layout from "../components/layout"
import Head from "../components/head"
import blogStyles from "./blog.module.scss"
import socialStyles from "../components/social.module.scss"

///////////////////////////////////////////////////////////////////////////////////////////////

// This is query for contentful
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  // Created object for rendering the image to blog post
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        // Setting image alt and url with graphql from Contentful json file data
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        // Returning image with calling image alt and url with graphql from Contentful source file
        return <img className={blogStyles.blogImage} alt={alt} src={url} />
      },
    },
  }
  // Const for sharing webpage on every single post
  const baseUrl = "https://zoricafarmasiblog.netlify.com/"

  // Comment box with Disqus settings
  const disqusShortname = "https-zoricafarmasiblog-netlify-com"
  const disqusConfig = {
    identifier: props.data.contentfulBlogPost.id,
    title: props.data.contentfulBlogPost.title,
    url: baseUrl + props.data.contentfulBlogPost.slug,
  }

  return (
    <Layout>
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap');
      </style>

      <Head title={props.data.contentfulBlogPost.title} />

      <h1 className={blogStyles.blogTitle}>
        {props.data.contentfulBlogPost.title}
      </h1>

      <p className={blogStyles.published}>
        {" "}
        Datum objave: {props.data.contentfulBlogPost.publishedDate}
      </p>

      <div className={blogStyles.blogContent}>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </div>

      {/* Share post on facebook */}
      <div className={socialStyles.socialContainer}>
        <h2 className={socialStyles.titleShare}>Dijeli dalje blog:</h2>
        <a
          href={"https://www.facebook.com/sharer/sharer.php?u=" + baseUrl}
          className="facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </div>
      {/* Adding Disqus tag to add it to this page with parameters */}
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </Layout>
  )
}

export default Blog
