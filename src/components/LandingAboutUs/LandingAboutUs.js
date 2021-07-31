import React from "react"
import Button from "../Button/Button"
import {
  InnerWrapper,
  LandingAboutUsWrapper,
  MaskedImage,
  StyledTitle,
  RWDWrapper,
} from "./LandingAboutUs.styles"

export default function LandingAboutUs() {
  return (
    <RWDWrapper>
      <LandingAboutUsWrapper>
        <MaskedImage />
        <InnerWrapper>
          <StyledTitle>Small team, big ideas</StyledTitle>
          <Button width="190px" textContent="About Us" linkDirection="/about" />
        </InnerWrapper>
      </LandingAboutUsWrapper>
    </RWDWrapper>
  )
}
