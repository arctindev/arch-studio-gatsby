import React, { useState } from "react"
import {
  StyledForm,
  FormTitle,
  StyledInput,
  StyledTextarea,
  StyledSubmit,
  SubmitWrapper,
  RWDFormWrapper,
} from "./ContactForm.styled"
import ButtonArrow from "../../assets/icons/button-arrow.inline.svg"

const initialFormState = {
  Name: "",
  Email: "",
  Message: "",
}
const initialWarningState = {
  Name: false,
  Email: false,
  Message: false,
}

export default function ContactForm() {
  const [inputValues, setInputValues] = useState(initialFormState)
  const [inputWarnings, setInputWarnings] = useState(initialWarningState)

  const handleInputChange = event => {
    event.target.placeholder = event.target.name;
    setInputWarnings({
      ...inputWarnings,
      [event.target.name]: false,
    })
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    })
  }
  const resetFormValues = event => {
    event.target.parentNode.parentNode[0].value = ""
    event.target.parentNode.parentNode[1].value = ""
    event.target.parentNode.parentNode[2].value = ""
  }

  const handleSubmitClick = event => {
    event.preventDefault()

    let name = false
    let email = false
    let message = false
    /* name validation */
    if (inputValues.Name !== "") {
      name = true
    } else {
      event.target.parentNode.parentNode[0].placeholder = "Name Cannot be Empty"
      name = false
    }
    /* email validation */
    if (
      inputValues.Email.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)
    ) {
      email = true
    } else {
      event.target.parentNode.parentNode[1].placeholder = "Please enter valid email"
      email = false
    }
    /* message validation */
    if (inputValues.Message !== "") {
      message = true
    } else {
      event.target.parentNode.parentNode[2].placeholder = "Message cannot be empty"
      message = false
    }
    setInputWarnings({Name: !name , Email : !email, Message : !message})
    resetFormValues(event);
    setInputValues(initialFormState);  
  }
  return (
    <StyledForm>
      <FormTitle>Connect with us</FormTitle>
      <RWDFormWrapper>
        <StyledInput
          warning={inputWarnings.Name}
          onChange={handleInputChange}
          name="Name"
          type="text"
          placeholder="Name"
        />
        <StyledInput
          warning={inputWarnings.Email}
          onChange={handleInputChange}
          name="Email"
          type="email"
          placeholder="Email"
        />
        <StyledTextarea
          warning={inputWarnings.Message}
          onChange={handleInputChange}
          name="Message"
          placeholder="Message"
        />
        <SubmitWrapper>
          <StyledSubmit onClick={handleSubmitClick} type="submit" value="" />
          <ButtonArrow onClick={handleSubmitClick} />
        </SubmitWrapper>
      </RWDFormWrapper>
    </StyledForm>
  )
}
