import styled from "styled-components"

export const StyledSpan = styled.span`
  display: none;
  z-index: 1100;
  position: fixed;
  top: 11rem;
  width: 20rem;
  height: 10rem;
  left: calc(-14.55rem + 6.25vw);
  letter-spacing: 15px;
  transform: rotateZ(90deg);
  text-transform: uppercase;
  font-size: 15px;
  color: #c8ccd8;
  @media only screen and (max-height: 450px) {
    top: 6.5rem;
    letter-spacing: 12px;
  }
  @media only screen and (min-width: 700px) {
    display: block;
  }
  &:before {
    position: absolute;
    content: "";
    width: 120px;
    height: 1px;
    top: 6.5px;
    left: -9.5rem;
    background-color: #c8ccd8;
    @media only screen and (max-height: 450px) {
      left: -8.5rem;
    }
  }
`
