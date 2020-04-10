import React from "react"
import { Card, CardTitle, CardBody } from "reactstrap"
import { Link, graphql, StaticQuery } from "gatsby"

import indexStyles from "../pages/index.module.scss"
import catalogImg from "../profileImg/catalog.png"

const Sidebar = () => {
  return (
    /* This is start of sidebar */
    <div className={indexStyles.sidebar}>
      <Card className={indexStyles.catalogBox}>
        <CardTitle className={indexStyles.titleText}>
          {" "}
          Pogledajte AVON katalog{" "}
        </CardTitle>

        <a
          href="https://ba.avon-brochure.com/campaign/?fbclid=IwAR0pIA3ZgV-6UPJfnlZamX-1e9jABYEnSewN_ZeHEEZRFIR55vnw9bfsp64#page/1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={catalogImg}
            className={indexStyles.catalogPic}
            alt="Catalog"
          />
        </a>
      </Card>

      {/* This is sidebar for recent posts */}
      <Card className={indexStyles.recentPosts}>
        <CardBody>
          <CardTitle className={indexStyles.titleMenu}>
            Najnoviji blogovi:
          </CardTitle>
          <StaticQuery
            query={sidebarQuery}
            render={data => (
              <div>
                {data.allContentfulBlogPost.edges.map(edge => {
                  return (
                    <CardTitle className={indexStyles.postCard}>
                      <Link
                        to={`/blog/${edge.node.slug}`}
                        className={indexStyles.postLinks}
                      >
                        <p className={indexStyles.postTitle}>
                          {" "}
                          {edge.node.title}{" "}
                        </p>
                      </Link>
                    </CardTitle>
                  )
                })}
              </div>
            )}
          />
        </CardBody>
      </Card>
    </div>
  )
}

// This is how we query recent posts for sidebar menu
const sidebarQuery = graphql`
  query {
    allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
      limit: 5
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

export default Sidebar
