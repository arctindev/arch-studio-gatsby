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
  const handleSubmitClick = event => {
    event.preventDefault()
    console.log(event.target.closest("div"))
  }
  return (
    <StyledForm>
      <FormTitle>Connect with us</FormTitle>
      <StyledInput type="text" placeholder="Name" />
      <StyledInput type="email" placeholder="Email" />
      <StyledTextarea placeholder="Message" />
      <SubmitWrapper>
        <StyledSubmit onClick={handleSubmitClick} type="submit" value="" />
        <ButtonArrow onClick={handleSubmitClick} />
      </SubmitWrapper>
    </StyledForm>
  )
}
