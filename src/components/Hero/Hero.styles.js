import styled from "styled-components"
import image from "../../assets/images/landing/hero-image.jpg"
import { Link } from "gatsby"

export const StyledHero = styled.div`
  width: 100%;
  height: 560px;
  padding: 0 6.5vw 0 6.5vw;
  color: ${({ theme }) => theme.colors.heroFont};
  background: url(${image}) no-repeat;
  background-size: cover;
  filter: contrast(110%) saturate(120%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
`

export const StyledHeroWrapper = styled.div`
  height: 340px;
  width: inherit;
`

export const StyledHeroTitle = styled.h2`
  font-size: 48px;
  font-weight: 900;
  line-height: 48px;
  letter-spacing: -1.2px;
  margin-bottom: 1rem;
`

export const StyledHeroText = styled.p`
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 4rem;
`

export const StyledButton = styled.button`
  border: none;
  height: 70px;
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.colors.buttonFont};
  background-color: ${({ theme }) => theme.colors.buttonBG};
  filter: brightness(1.25);
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  & > span {
    font-size: 15px;
    line-height: 25px;
    font-weight: bold;
    margin-right: 1.5rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHoverBG};
    filter: brightness(0.9);
    opacity: 1;
  }
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.footerNavLink};
  text-decoration: none;
`
