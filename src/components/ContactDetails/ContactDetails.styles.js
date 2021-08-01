import styled from "styled-components"
import pointer from "../../assets/icons/pointer.svg"

export const NormalWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.contactDetailsBG};
  &:before {
    content: "";
    position: absolute;
    height: 2px;
    width: 4rem;
    background-color: #c8ccd8;
    top: 0;
    left: 6.5vw;
    @media only screen and (min-width: 700px) {
      left: 12.5vw;
    }
  }
`

export const DetailsTitle = styled.h1`
  width: 10%;
  line-height: 48px;
  font-size: 40px;
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.contactDetailsTitle};
  margin-top: 4.5rem;
  margin-bottom: 4rem;
  text-align: left;
  @media only screen and (min-width: 700px) {
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -2px;
    width: 100%;
  }
  @media only screen and (min-width: 1120px) {
    width: 33%;
    max-width: 15rem;
    margin-top: 0rem;
  }
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
  cursor: url(${pointer}) 8 2, auto;
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
export const DesktopWrapper = styled.div`
  display: block;
  width: 100%;
  @media only screen and (min-width: 1120px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 4.5rem;
  }
`

export const RwdWrapper = styled.div`
  padding-bottom: 2rem;
  width: 100%;
  min-width: 275px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media only screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media only screen and (min-width: 1120px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
