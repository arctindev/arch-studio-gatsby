import styled from "styled-components"

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: 6rem;
  width: 100%;
  padding: 0 6.5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.headerBG};
`

export const HamburgerButton = styled.button`
  border: none;
  cursor: pointer;
`

export const HamburgerNavigation = styled.nav`
  @keyframes active {
    0% {
      padding: 0;
      width: 0;
      height: 0;
      color: transparent;
    }
    75% {
      padding: 3rem;
      color: transparent;
    }
    100% {
      width: calc(100% - 6.5vw);
      height: 240px;
    }
  }
  z-index: 1001;
  position: fixed;
  top: 6rem;
  right: 0;
  width: calc(100% - 6.5vw);
  height: 240px;
  background-color: ${({ theme }) => theme.colors.dropdownBG};
  opacity: 0.95;
  padding: 3rem;
  animation: active 0.4s ease-in-out;
  color: ${({ theme }) => theme.colors.dropdownFont};
`

export const NavigationList = styled.ul``

export const ListItem = styled.li`
  margin-bottom: 2rem;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
`
