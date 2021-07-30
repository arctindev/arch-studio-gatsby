import React, { useContext } from "react"
import {
  ContactImage,
  ContactHeroWrapper,
  ContactHeroTitle,
  TextWrapper,
  ContactHeroText,
  PageDecoration,
} from "./ContactHero.styles"
import { ViewportContext } from "../../Providers/viewportManagment"

export default function ContactHero() {
    
    const {width} = useContext(ViewportContext)
    
  return (
    <ContactHeroWrapper width={width}>
      <ContactImage width={width} />
      <TextWrapper width={width}>
        <PageDecoration width={width}>Contact</PageDecoration>
        <ContactHeroTitle width={width}>
          Tell us about your project
        </ContactHeroTitle>
        <ContactHeroText>
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </ContactHeroText>
      </TextWrapper>
    </ContactHeroWrapper>
  )
}
