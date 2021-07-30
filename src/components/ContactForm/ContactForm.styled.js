import styled from "styled-components"

export const StyledForm = styled.form`
  position: relative;
  padding: ${({ width }) =>
    width < 700 ? "0rem 6.5vw 6rem 6.5vw" : "0rem 12.5vw 15rem 12.5vw;"};
  background-color: ${({ theme }) => theme.colors.contactFormBG};
  display: flex;
  flex-direction: column;
`

export const FormTitle = styled.h1`
  width: ${({ width }) => (width < 700 ? "10rem" : "30rem;")};
  line-height: 48px;
  font-size: ${({ width }) => (width < 700 ? "40px" : "56px")};
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.contactFormTitle};
  margin-top: 0rem;
  margin-bottom: 2rem;
  text-align: left;
`

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.contactFormBorder};
  width: 100%;
  padding: 1rem 2rem 1.5rem 2rem;
  margin-bottom: 1rem;
  outline: none;
  line-height: 22.4px;
  letter-spacing: -0.31px;
  font-family: inherit;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.contactFormText};
  ::placeholder {
    color: ${({ theme }) => theme.colors.contactFormPlaceholder};
  }
`

export const StyledTextarea = styled.textarea`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.contactFormBorder};
  width: 100%;
  height: 7rem;
  padding: 1rem 2rem 1rem 2rem;
  outline: none;
  line-height: 22.4px;
  letter-spacing: -0.31px;
  font-size: 20px;
  font-family: inherit;
  font-weight: bold;
  resize: none;
  color: ${({ theme }) => theme.colors.contactFormText};
  ::placeholder {
    color: ${({ theme }) => theme.colors.contactFormPlaceholder};
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
    cursor: pointer;
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
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out,
    filter 0.2s ease-in-out;
`
