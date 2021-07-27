import React from "react"
import {
  AboutUsImage,
  AboutUsHeroWrapper,
  AboutUsHeroTitle,
  TextWrapper,
  AboutUsHeroText,
} from "./AboutUsHero.styles"

export default function AboutUsHero() {
  return (
    <AboutUsHeroWrapper>
      <AboutUsImage />
      <TextWrapper>
        <AboutUsHeroTitle>Your team of professionals</AboutUsHeroTitle>
        <AboutUsHeroText>
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </AboutUsHeroText>
      </TextWrapper>
    </AboutUsHeroWrapper>
  )
}
