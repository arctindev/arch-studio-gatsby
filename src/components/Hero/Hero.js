import React from "react"
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroTitle,
  StyledHeroText,
  StyledButton,
  StyledLink,
} from "./Hero.styles"
import ButtonArrow from "../../assets/icons/button-arrow.inline.svg"

export default function Hero() {
  return (
    <StyledHero>
      <StyledHeroWrapper>
        <StyledHeroTitle>Project Paramour</StyledHeroTitle>
        <StyledHeroText>
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </StyledHeroText>
        <StyledLink to="/portfolio">
          <StyledButton width="250px">
            <span>See Our Portfolio</span>
            <ButtonArrow />
          </StyledButton>
        </StyledLink>
      </StyledHeroWrapper>
    </StyledHero>
  )
}
