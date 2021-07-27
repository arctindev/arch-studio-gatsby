import styled from "styled-components"

export const StyledWhitespace = styled.main`
  top: 10rem;
  content: "";
  width: 100%;
  height: 2000px;
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.landingWhitespace},
    ${({ theme }) => theme.colors.landingWhitespace},
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    ${({ theme }) => theme.colors.landingWhitespace},
    ${({ theme }) => theme.colors.landingWhitespace}
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  padding: 0 6.5vw 0 6.5vw;
`
