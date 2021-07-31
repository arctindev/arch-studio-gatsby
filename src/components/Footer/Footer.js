import React from "react"
import {
  BrandingWrapper,
  FooterContent,
  FooterList,
  FooterWrapper,
  StyledLink,
  StyledBrandingLink,
  FooterWhitespace,
} from "./Footer.styles"
import Branding from "../../assets/branding/branding-white.inline.svg"
import Button from "../Button/Button"

export default function Footer({ onPage }) {
  return (
    <FooterWrapper>
      <FooterContent>
        <StyledBrandingLink to="/">
          <BrandingWrapper>
            <Branding />
          </BrandingWrapper>
        </StyledBrandingLink>
        <FooterList>
          <StyledLink value={"portfolio"} onPage={onPage} to="/portfolio">
            Portfolio
          </StyledLink>
          <StyledLink value={"about us"} onPage={onPage} to="/about">
            About Us
          </StyledLink>
          <StyledLink value={"contact"} onPage={onPage} to="/contact">
            Contact
          </StyledLink>
        </FooterList>
        <FooterWhitespace />
        <Button
          width="250px"
          textContent="See Our Portfolio"
          linkDirection="/portfolio"
        />
      </FooterContent>
    </FooterWrapper>
  )
}
