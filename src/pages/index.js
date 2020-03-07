import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import SocialFollow from "../components/social"
import CarouselSlide from "../components/carousel"
import Sidebar from "../components/sidebar"

import indexStyles from "./index.module.scss"
import farmasiLogo from "../profileImg/logo.jpg"
import farmasiProducts from "../profileImg/products.jpg"

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
            Avon je kompanija koja nudi širok asortiman proizvoda, a ja ću se
            potruditi da vam ih približim sa ciljem da i vi saznate zašto je ova
            kozmetika postala toliko popularna. <br />
            <img
              src={farmasiProducts}
              className={indexStyles.products}
              alt="Products"
            />
            <br />
            Želite da saznate više o Avon proizvodima i izvršite narudžbu?{" "}
            <br />
            <Link to="/contact" className={indexStyles.contactLink}>
              Kontaktirajte me!
            </Link>
          </p>

          <SocialFollow />
        </Layout>
      </div>

      {/* Used Sidebar component  */}
      <Sidebar />
    </div>
  )
}

export default IndexPage
