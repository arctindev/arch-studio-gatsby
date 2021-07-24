import React from "react"
import {
  BrandingWrapper,
  FooterContent,
  FooterList,
  FooterWrapper,
  ListItem,
} from "./Footer.styles"
import Branding from "../../assets/branding/branding-white.inline.svg"
import Button from "../Button/Button"

export default function Footer() {
  return (
    <FooterWrapper>
      <div />
      <FooterContent>
        <BrandingWrapper>
          <Branding />
        </BrandingWrapper>
        <FooterList>
          <ListItem>Portfolio</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Contact</ListItem>
        </FooterList>
        <Button width="250px" textContent="See Our Portfolio" />
      </FooterContent>
    </FooterWrapper>
  )
}
