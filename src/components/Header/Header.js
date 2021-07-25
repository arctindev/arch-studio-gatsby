import React, { useState } from "react"
import {
  HamburgerButton,
  HamburgerNavigation,
  ListItem,
  NavigationList,
  StyledHeader,
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
      <Branding />
      <HamburgerButton onClick={() => handleButtonClick(active)}>
        {active ? <HamburgerActive /> : <Hamburger />}
      </HamburgerButton>
      
        <HamburgerNavigation active={active}>
        {active ? (  <NavigationList active={active}>
            <ListItem>Portfolio</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Contact</ListItem>
            </NavigationList>
            ) : null}
        </HamburgerNavigation>
      
    </StyledHeader>
  )
}
