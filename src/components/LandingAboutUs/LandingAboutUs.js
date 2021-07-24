import React from "react"
import ButtonArrow from "../../assets/icons/button-arrow.inline.svg"
import { InnerWrapper, LandingAboutUsWrapper, MaskedImage, StyledButton, StyledTitle } from "./LandingAboutUs.styles"

export default function LandingAboutUs() {
  return (
    <LandingAboutUsWrapper>
      <MaskedImage />
      <InnerWrapper>
        <StyledTitle>Small team, big ideas</StyledTitle>
        <StyledButton>
          <span>About Us</span>
          <ButtonArrow />
        </StyledButton>
      </InnerWrapper>
    </LandingAboutUsWrapper>
  )
}
