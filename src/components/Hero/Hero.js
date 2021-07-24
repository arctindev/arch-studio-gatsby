import React from "react"
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroTitle,
  StyledHeroText,
} from "./Hero.styles"
import Button from "../Button/Button"

export default function Hero() {
  return (
    <StyledHero>
      <StyledHeroWrapper>
        <StyledHeroTitle>Project Paramour</StyledHeroTitle>
        <StyledHeroText>
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </StyledHeroText>
        <Button width="250px" textContent="See Our Portfolio" />
      </StyledHeroWrapper>
    </StyledHero>
  )
}
