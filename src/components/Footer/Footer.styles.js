import styled from "styled-components"
import { Link } from "gatsby"

export const FooterWrapper = styled.footer`
  position: relative;
  z-index: 0;
  background-color: ${({ theme }) => theme.colors.footerMainBG};
  height: ${({ width }) => (width < 700 ? "440px" : "120px")};
  width: inherit;
  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    width: ${({ width }) => (width < 700 ? "100%" : "calc(100% - 156px)")};
    height: ${({ width }) => {
      return width < 700 ? 380 : 120
    }}px;
    background-color: ${({ theme }) => theme.colors.footerBG};
    bottom: 0;
    left: 0;
  }
`

export const FooterContent = styled.div`
  z-index: 0;
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: ${({ width }) => (width < 700 ? "column" : "row")};
  justify-content: ${({ width }) =>
    width < 700 ? "flex-start" : "space-between"};
  align-items: center;
`

export const StyledBrandingLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  margin-bottom: ${({ width }) => (width < 700 ? "2.5rem" : "0")};
`

export const BrandingWrapper = styled.div`
  height: 120px;
  width: 120px;
  background-color: ${({ theme }) => theme.colors.footerBranding};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FooterWhitespace = styled.div`
  display: ${({ width }) => (width < 700 ? "none" : "block")};
  background-color: transparent;
  flex: 1;
`
export const FooterList = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex: ${({ width }) => (width < 700 ? "0" : "20")};
  flex-direction: ${({ width }) => (width < 700 ? "column" : "row")};
  justify-content: space-evenly;
  justify-self: flex-start;
  max-width: 500px;
  align-items: center;
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.footerNavLink};
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: ${({ width }) => (width < 700 ? "2.5rem" : "0")};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.footerNavLinkHover};
  }
`
