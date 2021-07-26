import React from "react"
import {
  BrandingWrapper,
  FooterContent,
  FooterList,
  FooterWrapper,
  StyledLink,
} from "./Footer.styles"
import Branding from "../../assets/branding/branding-white.inline.svg"
import Button from "../Button/Button"

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <StyledLink to="/">
          <BrandingWrapper>
            <Branding />
          </BrandingWrapper>
        </StyledLink>
        <FooterList>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </FooterList>
        <Button
          width="250px"
          textContent="See Our Portfolio"
          linkDirection="/portfolio"
        />
      </FooterContent>
    </FooterWrapper>
  )
}
