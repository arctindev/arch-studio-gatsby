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
  transform: ${({ scrollDirection, scrollY }) =>
    scrollDirection
      ? "translateY(0)"
      : scrollY < 90
      ? "translateY(0)"
      : "translateY(-6rem)"};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.headerBG};
  transition: transform 0.3s ease-in-out;
  @media only screen and (min-width: 700px) {
    padding: 0 12.5vw;
    justify-content: flex-start;
  }
`
export const Navigation = styled.nav`
  display: none;
  @media only screen and (min-width: 700px) {
    display: block;
    margin-left: 5vw;
  }
  color: ${({ theme }) => theme.colors.headerNavLink};
`

export const HamburgerButton = styled.button`
  border: none;
  cursor: pointer;
  @media only screen and (min-width: 700px) {
    display: none;
  }
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
  color: ${({ theme }) => theme.colors.dropdownLinkColor};
  transition: 0.4s width ease-in-out, 0.4s height ease-in-out,
    0.4s padding ease-in-out;
  @media only screen and (min-width: 700px) {
    display: none;
  }
`

export const NavigationList = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
  display: flex;
  flex-direction: column;
  animation: activeMenu 0.4s ease-in-out;
  @media only screen and (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    animation: none;
  }
`

export const ListItem = styled.li`
  margin-bottom: 2rem;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  @media only screen and (min-width: 700px) {
    margin-bottom: 0;
    margin-left: 3.5rem;
  }
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
  position: relative;
  animation: activeMenu 0.4s ease-in-out;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme, onPage, value }) =>
    value === onPage ? theme.colors.headerNavLinkHover : "inherit"};
  @media only screen and (min-width: 700px) {
    animation: none;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.headerNavLinkHover};
  }
  &:before {
    display: none;
    z-index: inherit;
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.headerNavLinkHover};
    width: 50%;
    height: 1px;
    bottom: -1rem;
    left: 25%;
    @media only screen and (min-width: 700px) {
      display: ${({ onPage, value }) => (value === onPage ? "block" : "none")};
    }
  }
`
