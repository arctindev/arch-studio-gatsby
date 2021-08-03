import styled from "styled-components"

export const FeaturedWrapper = styled.div`
  position: relative;
  min-height: 960px;
  width: 100%;
  padding: 5rem 6.5vw 5rem 6.5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.landingFeaturedBG};
  @media only screen and (min-width: 700px) {
    padding: 5rem 12.5vw 10rem 12.5vw;
  }
`

export const ItemRWDWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1180px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.landingFeaturedTitle};
  letter-spacing: -1.43px;
  line-height: 48px;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 2rem;
  @media only screen and (min-width: 700px) {
    font-size: 56px;
    letter-spacing: -2px;
    line-height: 56px;
    margin-bottom: 5rem;
  }
`

export const RWDButton = styled.div`
  width: 100%;
  position: relative;
  @media only screen and (min-width: 700px) {
    width: 170px;
    position: absolute;
    top: 4rem;
    right: 12.5vw;
  }
`
