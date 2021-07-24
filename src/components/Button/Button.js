import React from "react"
import { StyledButton } from "./Button.styles"
import ButtonArrow from "../../assets/icons/button-arrow.inline.svg"

export default function Button({ textContent, width }) {
  return (
    <StyledButton width={width}>
      <span>{textContent}</span>
      <ButtonArrow />
    </StyledButton>
  )
}
