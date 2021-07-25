import styled from "styled-components"

export const FooterWrapper = styled.footer`
  position: relative;
  z-index: -2;
  background-color: white;
  height: 640px;
  width: inherit;
  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: ${() => {
      return 640 - 60
    }}px;
    background-color: ${({ theme }) => theme.colors.footerBG};
    bottom: 0;
    left: 0;
  }
`

export const FooterContent = styled.div`
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

export const FooterList = styled.ul`
  width: inherit;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.footerNavLink};
  font-weight: bold;
`
