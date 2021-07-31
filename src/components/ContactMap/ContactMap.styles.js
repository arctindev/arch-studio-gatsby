import styled from "styled-components"
import image from "../../assets/images/contact/contactMap.jpg"
export const MapWrapper = styled.div`
  padding: 0;
  @media only screen and (min-width: 700px) {
    padding: 11rem 12.5vw 8.5rem 12.5vw;
  }
`
export const StyledMap = styled.div`
  position: relative;
  background: url(${image}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vw;
  max-height: 375px;
  transform: translateY(-4.5rem);
  @media only screen and (min-width: 700px) {
    max-height: 560px;
  }
`
