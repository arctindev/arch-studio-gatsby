import React, { useContext } from "react"
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
import { ViewportContext } from "../../Providers/viewportManagment"

export default function Footer() {
  const { width } = useContext(ViewportContext)
  return (
    <FooterWrapper width={width}>
      <FooterContent width={width}>
        <StyledBrandingLink width={width} to="/">
          <BrandingWrapper width={width}>
            <Branding />
          </BrandingWrapper>
        </StyledBrandingLink>
        <FooterList width={width}>
          <StyledLink width={width} to="/portfolio">
            Portfolio
          </StyledLink>
          <StyledLink width={width} to="/about">
            About Us
          </StyledLink>
          <StyledLink width={width} to="/contact">
            Contact
          </StyledLink>
        </FooterList>
        {width < 700 ? null : <FooterWhitespace />}
        <Button
          width="250px"
          textContent="See Our Portfolio"
          linkDirection="/portfolio"
        />
      </FooterContent>
    </FooterWrapper>
  )
}
