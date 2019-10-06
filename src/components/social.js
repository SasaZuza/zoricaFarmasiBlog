import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

import socialStyles from "./social.module.scss"

export default function SocialFollow() {
  return (
    <div className={socialStyles.socialContainer}>
      <a
        href="https://www.facebook.com/zorica.farmasi.3"
        target="_blank"
        rel="noopener noreferrer"
        className={socialStyles.facebookSocial}
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      <a
        href="https://www.instagram.com/dnevnik_sminkoholicarke/"
        target="_blank"
        rel="noopener noreferrer"
        className={socialStyles.instagramSocial}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  )
}
