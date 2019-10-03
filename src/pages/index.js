import React from "react"
import { Card, CardTitle, CardBody } from "reactstrap"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import SocialFollow from "../components/social"
import CarouselSlide from "../components/carousel"

import indexStyles from "./index.module.scss"
import farmasiLogo from "../profileImg/logo.jpg"
import farmasiProducts from "../profileImg/products.jpg"
import catalogImg from "../profileImg/catalog.png"

const IndexPage = () => {
  return (
    <div className={indexStyles.container}>
      <div className={indexStyles.mainContent}>
        <Layout>
          <Head title="Home" />

          <h1 className={indexStyles.headTitle}>
            Pozdrav svima, ja sam Zorica, veliki ljubitelj kozmetike.
          </h1>
          <h1 className={indexStyles.headTitle}>Dobrodošli na moj blog! </h1>

          <CarouselSlide />

          <p className={indexStyles.aboutMe}>
            Ovde ću vam putem mojih, nadam se interesantnih blogova predstaviti
            kozmetiku koja je dio moje svakodnevnice, a biće riječi i o drugim
            interesantnim temama.
          </p>

          <img src={farmasiLogo} className={indexStyles.logo} alt="Logo" />

          <p className={indexStyles.contactText}>
            Farmasi je kompanija koja nudi širok asortiman proizvoda, a ja ću se
            potruditi da vam ih približim sa ciljem da i vi saznate zašto je ova
            kozmetika postala toliko popularna. <br />
            <img
              src={farmasiProducts}
              className={indexStyles.products}
              alt="Products"
            />
            <br />
            Želite da saznate više o Farmasi proizvodima i izvršite narudžbu?{" "}
            <br />
            <Link to="/contact" className={indexStyles.contactLink}>
              Kontaktirajte me!
            </Link>
          </p>

          <SocialFollow />
        </Layout>
      </div>

      {/* This is start of sidebar */}
      <div className={indexStyles.sidebar}>
        <Card className={indexStyles.catalogBox}>
          <h4 className={indexStyles.titleText}>
            {" "}
            Pogledajte novi FARMASI katalog{" "}
          </h4>

          <a
            href="https://www.farmasi.ba/index.php/septembar#minebook/4"
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
            <h4 className={indexStyles.titleMenu}>Najnoviji blogovi:</h4>
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

export default IndexPage
