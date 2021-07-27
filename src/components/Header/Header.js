import React, { useState } from "react"
import {
  HamburgerButton,
  HamburgerNavigation,
  ListItem,
  NavigationList,
  StyledHeader,
  StyledLink,
  StyledBrandingLink,
} from "./Header.styles"
import Branding from "../../assets/branding/branding.inline.svg"
import Hamburger from "../../assets/icons/hamburger.inline.svg"
import HamburgerActive from "../../assets/icons/hamburger-active.inline.svg"

export default function Header() {
  const [active, setActive] = useState(false)

  const handleButtonClick = active => {
    setActive(() => !active)
  }
  return (
    <StyledHeader>
      <StyledBrandingLink to="/">
        <Branding />
      </StyledBrandingLink>
      <HamburgerButton onClick={() => handleButtonClick(active)}>
        {active ? <HamburgerActive /> : <Hamburger />}
      </HamburgerButton>

      <HamburgerNavigation active={active}>
        {active ? (
          <NavigationList active={active}>
            <ListItem>
              <StyledLink to="/portfolio">Portfolio</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/about">About Us</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/contact">Contact</StyledLink>
            </ListItem>
          </NavigationList>
        ) : null}
      </HamburgerNavigation>
    </StyledHeader>
  )
}
