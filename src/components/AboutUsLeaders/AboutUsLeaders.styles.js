import styled from "styled-components"

export const StyledWrapper = styled.div`
  transform: translateY(-4rem);
  width: 100%;
  padding: 0 6.5vw 0 6.5vw;
  background-color: ${({ theme }) => theme.colors.aboutUsLeadersBG};
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 700px) {
    padding: 7rem 12.5vw 7rem 12.5vw;
  }
  @media only screen and (min-width: 1180px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 14rem;
  }
`

export const LeadersTitle = styled.h1`
  width: 10%;
  line-height: 48px;
  font-size: 40px;
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.aboutUsArticleTitle};
  padding-bottom: 4rem;
  text-align: left;
  @media only screen and (min-width: 700px) {
    font-size: 56px;
    letter-spacing: -2px;
    line-height: 56px;
  }
`

export const LeadersWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 1180px) {
    width: 60%;
  }
`
