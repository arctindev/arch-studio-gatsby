import styled from "styled-components"
import { Link } from "gatsby"

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
  z-index: 1001;
  position: fixed;
  top: 6rem;
  right: 0;
  width: ${({ active }) => (active ? "calc(100% - 6.5vw)" : "0px")};
  height: ${({ active }) => (active ? "240px" : "0px")};
  background-color: ${({ theme }) => theme.colors.dropdownBG};
  opacity: 0.95;
  padding: ${({ active }) => (active ? "3rem" : "0px")};

  transition: 0.4s width ease-in-out, 0.4s height ease-in-out,
    0.4s padding ease-in-out;
`

export const NavigationList = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
  display: flex;
  flex-direction: column;
  animation: activeMenu 0.4s ease-in-out;
`

export const ListItem = styled.li`
  margin-bottom: 2rem;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
`
export const StyledBrandingLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`

export const StyledLink = styled(Link)`
  @keyframes activeMenu {
    0% {
      color: transparent;
    }
    75% {
      color: transparent;
    }
    100% {
    }
  }
  animation: activeMenu 0.4s ease-in-out;
  color: ${({ theme }) => theme.colors.dropdownLinkColor};
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`
