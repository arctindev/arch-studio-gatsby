import styled from "styled-components"
import image from "../../assets/images/contact/contactMap.jpg"
export const MapWrapper = styled.div`
  padding: ${({ width }) => (width < 700 ? "0" : "10rem 12.5vw 10rem 12.5vw")};
`
export const StyledMap = styled.div`
  position: relative;
  background: url(${image}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vw;
  max-height: ${({ width }) => (width < 700 ? "375px" : "560px")};
  transform: translateY(-4.5rem);
`
