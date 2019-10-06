import React from "react"
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
} from "reactstrap"

import testemonialsStyles from "./testemonials.module.scss"
import testem1 from "../profileImg/testem-Jovana.jpg"
import testem2 from "../profileImg/testem-Milica.jpg"
import testem3 from "../profileImg/testem-Dragana.jpg"

const Testemonials = props => {
  return (
    <CardDeck className={testemonialsStyles.container}>
      <Card className={testemonialsStyles.card}>
        <CardImg
          className={testemonialsStyles.cardPic}
          top
          width="100%"
          src={testem1}
          alt="Testemonial 1"
        />
        <CardBody className={testemonialsStyles.cardBody}>
          <CardTitle className={testemonialsStyles.cardTitle}>Jovana</CardTitle>
          <CardText className={testemonialsStyles.cardText}>
            "Blog je odličan, mnogo sam naučila o Farmasi kozmetici, a pošto mi
            se jako dopala i sama sam odlučila ovim da se bavim!"
          </CardText>
        </CardBody>
      </Card>
      <Card className={testemonialsStyles.card}>
        <CardImg
          className={testemonialsStyles.cardPic}
          top
          width="100%"
          src={testem2}
          alt="Testemonial 2"
        />
        <CardBody className={testemonialsStyles.cardBody}>
          <CardTitle className={testemonialsStyles.cardTitle}>Milica</CardTitle>
          <CardText className={testemonialsStyles.cardText}>
            "Zahvaljujući Zoricinom blogu našla sam način kako da se konačno
            izborim sa aknama. SOS serum je super."
          </CardText>
        </CardBody>
      </Card>
      <Card className={testemonialsStyles.card}>
        <CardImg
          className={testemonialsStyles.cardPic}
          top
          width="100%"
          src={testem3}
          alt="Testemonial 3"
        />
        <CardBody className={testemonialsStyles.cardBody}>
          <CardTitle className={testemonialsStyles.cardTitle}>
            Dragana
          </CardTitle>
          <CardText className={testemonialsStyles.cardText}>
            "Toliko dobre šminke i savjeta na jednom mjestu. Blog je super!"
          </CardText>
        </CardBody>
      </Card>
    </CardDeck>
  )
}

export default Testemonials
