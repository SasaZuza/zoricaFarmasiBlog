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
        Ovo je mjesto na kome ćete putem mojih nadam se interesantnih blogova
        :-) saznati mnoge korsine informacije o Farmasi proizvodima i biti u
        mogućnosti da me konkatirate kako bi ostavrili popuste u slučaju da se
        odlučite za kupovinu nekih od njih.
      </p>

      <img src={arrows} className={aboutStyles.gifPic} alt="About Me Picture" />

      <p>
        <Link className={aboutStyles.contactMe} to="/contact">
          U slučaju da želite da me kontaktirate ili da izvršite narudžbu
          KLIKNITE OVDE!
        </Link>
      </p>
    </Layout>
  )
}

export default AboutPage
