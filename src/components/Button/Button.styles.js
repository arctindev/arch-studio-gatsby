import styled from "styled-components"
import { Link } from "gatsby"

export const StyledButton = styled.button`
  border: none;
  height: 70px;
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.colors.buttonFont};
  background-color: ${({ theme }) => theme.colors.buttonBG};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out,
    filter 0.2s ease-in-out;
  & > span {
    font-size: 15px;
    line-height: 25px;
    font-weight: bold;
    margin-right: 1.5rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHoverBG};
    filter: brightness(0.9);
    opacity: 0.9;
  }
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.buttonLink};
  width: ${({ width }) => width};
  text-decoration: none;
`
