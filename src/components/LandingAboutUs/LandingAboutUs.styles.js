import styled from "styled-components"
import image from "../../assets/images/landing/landing-about-us-image.jpg"

export const RWDWrapper = styled.div`
  width: 100%;
  @media only screen and (min-width: 700px) {
    padding: 4rem 12.5vw 7rem 12.5vw;
  }
`

export const LandingAboutUsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  color: ${({ theme }) => theme.colors.landingAboutUsText};
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MaskedImage = styled.div`
  z-index: 0;
  position: absolute;
  width: 100%;
  height: inherit;
  background: url(${image}) no-repeat;
  background-size: cover;
  background-position: 60% 70%;
  filter: contrast(120%) saturate(160%) grayscale(15%);
  &:after {
    z-index: 1;
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: black;
    top: 0;
    left: 0;
    opacity: 0.4;
  }
`

export const InnerWrapper = styled.div`
  z-index: 2;
  width: inherit;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0vh 12.5vw 0 6.5vw;
  @media only screen and (min-width: 700px) {
    height: 500px;
  }
  @media only screen and (min-width: 1180px) {
    padding: 0 19vw 0 12.5vw;
  }
`

export const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;
  letter-spacing: -1.2px;
  margin-bottom: 2rem;
  width: 18rem;
  overflow: hidden;
  @media only screen and (min-width: 700px) {
    width: 25rem;
    font-size: 56px;
    letter-spacing: -2px;
    line-height: 56px;
    height: auto;
    padding: 2rem 0;
    margin-bottom: 0;
  }
`
