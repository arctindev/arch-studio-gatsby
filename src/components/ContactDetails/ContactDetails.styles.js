import styled from "styled-components"

export const NormalWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.contactDetailsBG};
`

export const DetailsTitle = styled.h1`
  width: ${({width}) => width < 700 ? '10%' : '100%'};
  line-height: 48px;
  font-size: ${({width}) => width < 700 ? '40px' : '56px'};
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.contactDetailsTitle};
  margin-top: 4.5rem;
  margin-bottom: 4rem;
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

export const RwdWrapper = styled.div`
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: ${({width}) => width < 700 ? 'column' : 'row'};
  justify-content: ${({width}) => width < 700 ? 'flex-start' : 'space-between'};
  align-items: ${({width}) => width < 700 ? 'flex-start' : 'center'};
`
