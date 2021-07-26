import styled from "styled-components"
import { Link } from "gatsby"

export const FooterWrapper = styled.footer`
  position: relative;
  z-index: 0;
  background-color: white;
  height: 440px;
  width: inherit;
  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: ${() => {
      return 440 - 60
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const BrandingWrapper = styled.div`
  height: 120px;
  width: 120px;
  background-color: ${({ theme }) => theme.colors.footerBranding};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

export const FooterList = styled.div`
  width: inherit;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.footerNavLink};
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover{
  color: ${({ theme }) => theme.colors.footerNavLinkHover};
  }
`
