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
  const { tablet } = useContext(ViewportContext)
  return (
    <FooterWrapper tablet={tablet}>
      <FooterContent tablet={tablet}>
        <StyledBrandingLink tablet={tablet} to="/">
          <BrandingWrapper tablet={tablet}>
            <Branding />
          </BrandingWrapper>
        </StyledBrandingLink>
        <FooterList tablet={tablet}>
          <StyledLink tablet={tablet} to="/portfolio">
            Portfolio
          </StyledLink>
          <StyledLink tablet={tablet} to="/about">
            About Us
          </StyledLink>
          <StyledLink tablet={tablet} to="/contact">
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
