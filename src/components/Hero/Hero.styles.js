import styled from "styled-components"
import image from "../../assets/images/landing/hero-image.jpg"
import { Link } from "gatsby"

export const RWDWrapper = styled.div`
  width: 100%;
  @media only screen and (min-width: 700px) {
    padding: 0 12.5vw 0 12.5vw;
  }
`
export const StyledHero = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  padding: 0vh 6.5vw 0 6.5vw;
  color: ${({ theme }) => theme.colors.heroFont};
  background: url(${image}) no-repeat;
  background-size: cover;
  background-position: 50% 70%;
  filter: contrast(115%) saturate(150%) brightness(110%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  &:after {
    z-index: 1;
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background-image: linear-gradient(to bottom right, black, transparent);
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
`

export const StyledHeroWrapper = styled.div`
  z-index: 2;
  height: 340px;
  width: inherit;
`

export const StyledHeroTitle = styled.h2`
  z-index: 2;
  font-size: 48px;
  font-weight: 900;
  line-height: 48px;
  letter-spacing: -1.2px;
  margin-bottom: 1rem;
`

export const StyledHeroText = styled.p`
  z-index: 2;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 4rem;
`

export const StyledButton = styled.button`
  z-index: 2;
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
  color: ${({ theme }) => theme.colors.footerNavLink};
  text-decoration: none;
`
