import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Sidebar from "../components/sidebar"
// import Testemonials from "../components/testemonials"

import aboutStyles from "./about.module.scss"
import indexStyles from "./index.module.scss"
import aboutPic from "../profileImg/aboutMe.jpg"
import arrows from "../profileImg/arrows.gif"

const AboutPage = () => {
  return (
    <div className={indexStyles.container}>
      <div className={indexStyles.mainContent}>
        <Layout>
          <Head title="About Me" />

          <h1 className={aboutStyles.title}>Nekoliko stvari o meni</h1>

          <img src={aboutPic} className={aboutStyles.aboutPic} alt="About Me" />

          <p className={aboutStyles.aboutMe}>
            Živim u Bijeljini, diplomirala sam ekonomiju, ali uvijek sam voljela
            da nešto "petljam" oko kozmetike i šminkanja. Između ostalog,
            aktivno se bavim i prodajom Avon kozmetike. <br />
            <br />
            Kad god me neko vidi uživo, kaže mi da izgledam dosta mlađe.
            Izgledati malo mlađe mi je okej ali ja sam napunila 27 godina, a svi
            misle da sam tek srednju školu završila. Tako da, ponosni sam
            vlasnik baby face-a. <br />
            <br />
            Ovaj blog se zasniva na mom iskustvu ali svakako bih voljela da
            čujem i tvoje mišljenje, tako da očekujem da ćeš i ti učestvovati i
            podijeliti svoje mišljenje i utiske. Drago mi je što si tu i što smo
            se upoznale.
            <br />
          </p>

          {/* <p className={aboutStyles.aboutMe}>
            Evo i nekoliko komentara drugih o mom blogu:
          </p>

          <Testemonials /> */}

          <img src={arrows} className={aboutStyles.gifPic} alt="About Me GIF" />

          <p className={aboutStyles.contactMeText}>
            {" "}
            U slučaju da me želite kontaktirati <br />
            <Link className={aboutStyles.contactMeLink} to="/contact">
              KLIKNITE OVDE!
            </Link>
          </p>
        </Layout>
      </div>
      {/* Adding sidebar component */}
      <Sidebar />
    </div>
  )
}

export default AboutPage
