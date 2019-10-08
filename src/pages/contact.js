import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import SocialFollow from "../components/social"
import Sidebar from "../components/sidebar"

import contactStyles from "./contact.module.scss"
import indexStyles from "./index.module.scss"
import orderPic from "../profileImg/order.jpg"

const ContactPage = () => {
  return (
    <div className={indexStyles.container}>
      <div className={indexStyles.mainContent}>
        <Layout>
          <Head title="Contact Me" />

          <h1 className={contactStyles.title}>Kako da me kontaktirate</h1>

          <img
            src={orderPic}
            className={contactStyles.orderPic}
            alt="Order Farmasi"
          />

          <p className={contactStyles.order}>
            Najbolji način da me kontaktirate kao i da postavite bilo koje
            pitanje u vezi Farmasi proizvoda, te izvršite narudžbu je putem
            Facebooka ili Instagrama i to klikom na jedno od dugmadi ispod:
          </p>

          <SocialFollow />
        </Layout>
      </div>

      <Sidebar />
    </div>
  )
}

export default ContactPage
