import styled from "styled-components"

export const FeaturedWrapper = styled.ol`
  position: relative;
  min-height: 960px;
  width: 100%;
  padding: 5rem 6.5vw 5rem 6.5vw;
  counter-reset: listCounter;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.landingFeaturedBG};
  @media only screen and (min-width: 700px) {
    padding: 5rem 12.5vw 10rem 12.5vw;
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

export const ItemWrapper = styled.li`
  counter-increment: listCounter;
  position: relative;
  width: inherit;
  &::after {
    display: none;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 2vw;
    content: counter(listCounter);
    font-size: 200px;
    color: white;
    opacity: 0.5;
    font-family: "Spartan";
    font-weight: bold;
    @media only screen and (min-width: 700px) {
      display: block;
    }
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
