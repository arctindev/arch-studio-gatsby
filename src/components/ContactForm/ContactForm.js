import React from "react"
import {
  StyledForm,
  FormTitle,
  StyledInput,
  StyledTextarea,
  StyledSubmit,
  SubmitWrapper,
} from "./ContactForm.styled"
import ButtonArrow from "../../assets/icons/button-arrow.inline.svg"

export default function ContactForm() {
  return (
    <StyledForm>
      <FormTitle>Connect with us</FormTitle>
      <StyledInput type="text" placeholder="Name" />
      <StyledInput type="email" placeholder="Email" />
      <StyledTextarea placeholder="Message" />
      <SubmitWrapper>
        <StyledSubmit type="submit" value="" />
        <ButtonArrow />
      </SubmitWrapper>
    </StyledForm>
  )
}
