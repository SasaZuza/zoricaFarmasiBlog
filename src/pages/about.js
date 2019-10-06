import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Sidebar from "../components/sidebar"
import Testemonials from "../components/testemonials"

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
            aktivno se bavim i prodajom Farmasi kozmetike. <br />
            <br />
            Znanje je najbolja investicija, zato smatram da treba biti svestran
            i pronaći neki hobi koji će nas učiniti srećnim, okupirati naše
            misli i smanjiti nivo stresa, jer toga danas sigurno ima na pretek.{" "}
            <br />
          </p>

          <p className={aboutStyles.aboutMe}>
            Evo i nekoliko komentara drugih o mom blogu:
          </p>

          <Testemonials />

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

      <Sidebar />
    </div>
  )
}

export default AboutPage
