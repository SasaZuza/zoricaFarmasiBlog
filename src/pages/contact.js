import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import SocialFollow from "../components/social"

import contactStyles from "./contact.module.scss"
import orderPic from "../profileImg/order.jpg"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact Me" />

      <h2 className={contactStyles.title}>
        Kontaktirajte me i izvršite narudžbu
      </h2>

      <img
        src={orderPic}
        className={contactStyles.orderPic}
        alt="Order Farmasi Picture"
      />

      <p className={contactStyles.order}>
        Najbolji način da me kontaktirate kao i da postavite bilo koje pitanje u
        vezi Farmasi proizvoda, te izvršite naridžbu je putem Facebooka ili
        Instagrama i to na sljedeći način:
      </p>

      <SocialFollow />
    </Layout>
  )
}

export default ContactPage
