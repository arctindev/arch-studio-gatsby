import React from "react"
import { StyledButton, StyledLink } from "./Button.styles"
import ButtonArrow from "../../assets/icons/button-arrow.inline.svg"

export default function Button({ textContent, width, linkDirection }) {
    
  return (
    <StyledLink  to={linkDirection} width={width}>
      <StyledButton width={width}>
        <span>{textContent}</span>
        <ButtonArrow />
      </StyledButton>
    </StyledLink>
  )
}
