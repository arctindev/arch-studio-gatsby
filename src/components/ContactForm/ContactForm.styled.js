import styled from "styled-components"
import pointer from "../../assets/icons/pointer.svg"

export const StyledForm = styled.form`
  position: relative;
  padding: 0rem 6.5vw 6rem 6.5vw;
  background-color: ${({ theme }) => theme.colors.contactFormBG};
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 700px) {
    padding: 0rem 12.5vw 12rem 12.5vw;
  }
  @media only screen and (min-width: 1180px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const RWDFormWrapper = styled.form`
  width: inherit;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1180px) {
    width: 60%;
  }
`

export const FormTitle = styled.h1`
  width: 10rem;
  line-height: 48px;
  font-size: 40px;
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.contactFormTitle};
  margin-top: 0rem;
  margin-bottom: 2rem;
  text-align: left;
  @media only screen and (min-width: 700px) {
    width: 30rem;
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -2px;
  }
  @media only screen and (min-width: 1180px) {
    width: 33%;
    max-width: 15rem;
  }
`

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme, warning }) =>warning? theme.colors.contactFormWarning : theme.colors.contactFormBorder};
  width: 100%;
  padding: 1.5rem 2rem 1.5rem 2rem;
  margin-bottom: 1rem;
  outline: none;
  line-height: 22.4px;
  letter-spacing: -0.31px;
  font-family: inherit;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme, warning }) =>warning? theme.colors.contactFormWarning : theme.colors.contactFormText};
  ::placeholder {
    color: ${({ theme, warning }) =>warning? theme.colors.contactFormWarning : theme.colors.contactFormPlaceholder};
  }
`

export const StyledTextarea = styled.textarea`
  border: none;
  border-bottom: 1px solid ${({ theme, warning }) =>warning? theme.colors.contactFormWarning : theme.colors.contactFormBorder};
  width: 100%;
  height: 7.5rem;
  padding: 1rem 2rem 1rem 2rem;
  outline: none;
  line-height: 22.4px;
  letter-spacing: -0.31px;
  font-size: 20px;
  font-family: inherit;
  font-weight: bold;
  resize: none;
  color: ${({ theme, warning }) => warning? theme.colors.contactFormWarning : theme.colors.contactFormText};
  ::placeholder {
    color: ${({ theme, warning }) =>warning? theme.colors.contactFormWarning : theme.colors.contactFormPlaceholder};
    font-size: inherit;
    font-family: inherit;
    letter-spacing: inherit;
  }
`

export const SubmitWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.buttonBG};
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHoverBG};
    opacity: 0.9;
    filter: brightness(0.9);
  }
  & > svg {
    position: absolute;
    top: 30px;
    left: 28px;
    z-index: 0;
    cursor: url(${pointer}) 8 2, auto;
    filter: brightness(1.2);
  }
`

export const StyledSubmit = styled.input`
  z-index: 0;
  position: absolute;
  right: 0;
  border: none;
  height: 80px;
  width: 80px;
  color: ${({ theme }) => theme.colors.buttonFont};
  background-color: transparent;
  cursor: url(${pointer}) 8 2, auto;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out,
    filter 0.2s ease-in-out;
`
