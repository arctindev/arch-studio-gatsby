import styled from "styled-components"

export const PortfolioWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 4rem;
  padding: 0vh 6.5vw 0 6.5vw;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.portfolioGaleryBG};
  @media only screen and (min-width: 700px) {
    padding: 0vh 12.5vw 7rem 12.5vw;
    margin-top: 6rem;
  }
  @media only screen and (min-width: 1180px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
