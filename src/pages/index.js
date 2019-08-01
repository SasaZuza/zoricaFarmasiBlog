import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import SocialFollow from "../components/social"

import indexStyles from "./index.module.scss"
import profileImg from "../profileImg/profileImg.jpg"
import farmasiLogo from "../profileImg/logo.jpg"
import farmasiProducts from "../profileImg/products.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />

      <h1 className={indexStyles.headTitle}>
        Hej, zdravo, ja sam Zorica i ovo je moj blog. Dobrodošli!
      </h1>

      <img
        src={profileImg}
        className={indexStyles.profilePic}
        alt="Profile picture"
      />

      <h2 className={indexStyles.aboutMe}>
        Ovo je mjesto na kome ćete putem mojih, nadam se, interesantnih blogova
        saznati više o raznim temama i predstaviću vam kozmetiku koja je dio
        moje svakodnevnice
      </h2>

      <img src={farmasiLogo} className={indexStyles.logo} alt="Logo" />

      <p className={indexStyles.contactText}>
        Farmasi je kompanije koja nudi širok asortiman proizvoda a ja ću se
        potruditi da vam ih približim sa ciljem da i vi saznate zašto je ova
        kozmetika postala tako popularna. <br />
        <img
          src={farmasiProducts}
          className={indexStyles.products}
          alt="Products"
        />
        <br />
        Želite da saznate više o Farmasi proizvodima i izvršite narudžbu? <br />
        <Link to="/contact" className={indexStyles.contactLink}>
          Kontaktirajte me!
        </Link>
      </p>

      <SocialFollow />
    </Layout>
  )
}

export default IndexPage
