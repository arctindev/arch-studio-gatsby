import React from "react"
import Button from "../Button/Button"
import {
  InnerWrapper,
  LandingAboutUsWrapper,
  MaskedImage,
  StyledTitle,
} from "./LandingAboutUs.styles"

export default function LandingAboutUs() {
  return (
    <LandingAboutUsWrapper>
      <MaskedImage />
      <InnerWrapper>
        <StyledTitle>Small team, big ideas</StyledTitle>
        <Button width="190px" textContent="About Us" linkDirection="/about" />
      </InnerWrapper>
    </LandingAboutUsWrapper>
  )
}
