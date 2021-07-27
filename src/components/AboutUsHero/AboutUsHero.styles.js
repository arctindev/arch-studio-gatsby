import styled from "styled-components"
import image from "../../assets/images/about/aboutHeroImage.jpg"

export const AboutUsHeroWrapper = styled.div`
  width: 100%;
  margin-top: 6rem;
  background-color: ${({ theme }) => theme.colors.aboutUsHeroBG};
`

export const AboutUsImage = styled.div`
  position: relative;
  background: url(${image}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 240px;
  filter: contrast(110%) saturate(190%);
  &:before {
    z-index: 0;
    content: "";
    height: inherit;
    width: inherit;
    background-color: black;
    position: absolute;
    opacity: 0.4;
    top: 0;
    left: 0;
  }
`
export const TextWrapper = styled.div`
  padding: 3rem 6.5vw 6rem 6.5vw;
`
export const AboutUsHeroTitle = styled.h1`
  position: relative;
  color: ${({ theme }) => theme.colors.aboutUsHeroTitle};
  line-height: 48px;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: -1px;
  padding-bottom: 1rem;
  &:after {
    z-index: 1;
    content: "";
    height: 3rem;
    filter: none;
    width: calc(100% + 6.5vw);
    background-color: ${({ theme }) => theme.colors.aboutUsHeroDecoration};
    position: absolute;
    top: -6rem;
    left: -6.5vw;
  }
`

export const AboutUsHeroText = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.aboutUsHeroText};
`
