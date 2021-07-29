import styled from "styled-components"
import { Link } from "gatsby"

export const NormalWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.contactDetailsBG};
`

export const DetailsTitle = styled.h1`
  width: 10%;
  line-height: 48px;
  font-size: 40px;
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.contactDetailsTitle};
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  text-align: left;
`

export const DetailsSubtitle = styled.h2`
  line-height: 35px;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: -0.65px;
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.contactDetailsText};
`

export const DetailsWrapper = styled.div`
  line-height: 35px;
  font-size: 15px;
  padding-bottom: 1rem;
`

export const DetailsText = styled.p`
  font-size: 15px;
  white-space: pre-wrap;
  letter-spacing: -0.65px;
  color: ${({ theme }) => theme.colors.contactDetailsText};
`

export const StyledButton = styled.button`
  border: none;
  height: 70px;
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.colors.contactButtonFont};
  background-color: ${({ theme }) => theme.colors.contactButtonBG};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out,
    filter 0.2s ease-in-out;
  & > span {
    font-size: 16px;
    line-height: 25px;
    font-weight: 700;
    letter-spacing: 0px;
    margin-right: 1.5rem;
  }
  &:hover {
    text-decoration: underline;
  }
`
export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.contactButtonLink};
  width: ${({ width }) => width};
  text-decoration: none;
`
