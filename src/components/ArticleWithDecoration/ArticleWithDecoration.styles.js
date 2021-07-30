import styled from "styled-components"

export const StyledWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding: ${({ width }) =>
    width < 700 ? "0rem 6.5vw 0rem 6.5vw" : "0rem 12.5vw 0rem 12.5vw;"};
  margin-bottom: 7rem;
  &:before {
    content: "";
    position: absolute;
    height: 2px;
    width: 4rem;
    background-color: #c8ccd8;
    top: 0;
    left: ${({ width }) => (width < 700 ? "6.5vw" : "12.5vw")};
  }
`
