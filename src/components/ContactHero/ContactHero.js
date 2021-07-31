import React from "react"
import {
  ContactImage,
  ContactHeroWrapper,
  ContactHeroTitle,
  TextWrapper,
  ContactHeroText,
  PageDecoration,
} from "./ContactHero.styles"

export default function ContactHero() {
  return (
    <ContactHeroWrapper>
      <ContactImage />
      <TextWrapper>
        <PageDecoration>Contact</PageDecoration>
        <ContactHeroTitle>Tell us about your project</ContactHeroTitle>
        <ContactHeroText>
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </ContactHeroText>
      </TextWrapper>
    </ContactHeroWrapper>
  )
}
