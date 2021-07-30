import styled from "styled-components"

export const StyledWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding: 0rem 6.5vw 0rem 6.5vw;
  margin-bottom: 5rem;
  @media only screen and (min-width: 700px) {
    padding: 0rem 12.5vw 0rem 12.5vw;
  }
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
