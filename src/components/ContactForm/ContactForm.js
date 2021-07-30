import React, { useContext } from "react"
import {
  StyledForm,
  FormTitle,
  StyledInput,
  StyledTextarea,
  StyledSubmit,
  SubmitWrapper,
} from "./ContactForm.styled"
import ButtonArrow from "../../assets/icons/button-arrow.inline.svg"
import { ViewportContext } from "../../Providers/viewportManagment"

export default function ContactForm() {
  const { width } = useContext(ViewportContext)

  const handleSubmitClick = event => {
    event.preventDefault()
    console.log(event.target.closest("div"))
  }
  return (
    <StyledForm width={width}>
      <FormTitle width={width}>Connect with us</FormTitle>
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
