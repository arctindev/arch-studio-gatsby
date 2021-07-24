import styled from "styled-components"
import image from "../../assets/images/landing-about-us-image.jpg"

export const LandingAboutUsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  color: ${({theme})=>theme.colors.landingAboutUsText};
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`

export const MaskedImage = styled.div`
  z-index: -2;
  position: absolute;
  width: 100%;
  height: inherit;
  background: url(${image}) no-repeat;
  background-size: cover;
  &:after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: black;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
`

export const InnerWrapper = styled.div`
  width: inherit;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0vh 6.5vw 0 6.5vw;
`

export const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;
  letter-spacing: -1.2px;
  margin-bottom: 2rem;
`
