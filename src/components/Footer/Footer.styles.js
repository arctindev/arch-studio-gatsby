import styled from "styled-components"
import { Link } from "gatsby"

export const FooterWrapper = styled.footer`
  position: relative;
  z-index: 0;
  background-color: ${({ theme }) => theme.colors.footerMainBG};
  height: 440px;
  width: inherit;
  @media only screen and (min-width: 700px) {
    height: 120px;
  }
  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 380px;
    background-color: ${({ theme }) => theme.colors.footerBG};
    bottom: 0;
    left: 0;
    @media only screen and (min-width: 700px) {
      height: 120px;
      width: calc(100% - 156px);
    }
  }
`

export const FooterContent = styled.div`
  z-index: 0;
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const StyledBrandingLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 2.5rem;
  @media only screen and (min-width: 700px) {
    margin-bottom: 0;
  }
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
  display: none;
  background-color: transparent;
  flex: 1;
  @media only screen and (min-width: 700px) {
    display: block;
  }
`
export const FooterList = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex: 0;
  flex-direction: column;
  justify-content: space-evenly;
  justify-self: flex-start;
  max-width: 500px;
  align-items: center;
  @media only screen and (min-width: 700px) {
    flex: 20;
    flex-direction: row;
  } ;
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.footerNavLink};
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 2.5rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.footerNavLinkHover};
  }
  @media only screen and (min-width: 700px) {
    margin-bottom: 0;
  }
`
