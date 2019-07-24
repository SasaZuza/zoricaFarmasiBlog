import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import SocialFollow from "../components/social"

import indexStyles from "./index.module.scss"
import profileImg from "../profileImg/profileImg.jpg"
import farmasiLogo from "../profileImg/logo.png"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />

      <h1 className={indexStyles.headTitle}>
        Pozdrav svim ljubiteljima Farmasi kozmetike!
      </h1>

      <img
        src={profileImg}
        className={indexStyles.profilePic}
        alt="Profile picture"
      />

      <h2 className={indexStyles.aboutMe}>
        Ja sam Zorica Čuturić iz Bijeljine i ovo je moj <strong>Farmasi</strong>{" "}
        blog!
      </h2>

      <img src={farmasiLogo} className={indexStyles.logo} alt="Logo" />

      <p className={indexStyles.contactText}>
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
