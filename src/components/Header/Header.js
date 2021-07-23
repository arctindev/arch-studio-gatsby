import React from "react"
import { StyledHeader } from "./Header.styles"
import Branding from "../../assets/branding/branding.inline.svg"
import Hamburger from "../../assets/icons/hamburger.inline.svg"

export default function Header() {
  return (
    <StyledHeader>
      <Branding />
      <Hamburger />
    </StyledHeader>
  )
}
