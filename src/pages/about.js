import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import aboutStyles from "./about.module.scss"
import aboutPic from "../profileImg/aboutMe.jpg"
import arrows from "../profileImg/arrows.gif"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About Me" />

      <h1 className={aboutStyles.title}>Nekoliko stvari o meni</h1>

      <img
        src={aboutPic}
        className={aboutStyles.aboutPic}
        alt="About Me Picture"
      />

      <p className={aboutStyles.aboutMe}>
        Živim u Bijeljini, diplomirala sam ekonomiju i uvijek sam voljela da
        nešto "petljam" oko kozmetike i šminkanja. Između ostalog, bavim se
        prodajom Farmasi kozmetike. <br />
        <br />
        Znanje je najbolja investicija i smatram da treba biti svestran i
        pronaći neki hobi koji će nas učiniti srećnim, okupirati naše misli i
        smanjiti nivo stresa, jer toga sigurno ima na pretek. <br /> <br />
        Toliko o meni.
      </p>

      <img src={arrows} className={aboutStyles.gifPic} alt="About Me Picture" />

      <p>
        <Link className={aboutStyles.contactMe} to="/contact">
          U slučaju da me želite kontaktirati KLIKNITE OVDE!
        </Link>
      </p>
    </Layout>
  )
}

export default AboutPage
