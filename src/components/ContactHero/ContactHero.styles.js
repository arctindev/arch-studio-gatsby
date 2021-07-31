import styled from "styled-components"
import image from "../../assets/images/contact/contactHeroImage.jpg"
import bigImage from "../../assets/images/contact/contactHeroImageBig.jpg"

export const ContactHeroWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 6rem;
  background-color: ${({ theme }) => theme.colors.contactHeroBG};
  padding: none;
  margin-bottom: 0;
  @media only screen and (min-width: 700px) {
    padding: 0rem 12.5vw 0rem 12.5vw;
    margin-bottom: 13rem;
  }
`

export const ContactImage = styled.div`
  position: relative;
  background: url(${image}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 240px;
  filter: contrast(110%) saturate(190%);
  @media only screen and (min-width: 700px) {
    height: 720px;
    background: url(${bigImage}) no-repeat;
    background-size: cover;
  }
  @media only screen and (min-width: 1120px) {
    background: url(${bigImage}) no-repeat;
    background-size: cover;
    width: 70%;
  }
  &:before {
    z-index: 0;
    content: "";
    height: inherit;
    width: 100%;
    background-color: black;
    position: absolute;
    opacity: 0.4;
    top: 0;
    left: 0;
  }
`
export const TextWrapper = styled.div`
  z-index: 1;
  position: relative;
  bottom: 0;
  right: auto;
  width: auto;
  padding: 3rem 6.5vw 5rem 6.5vw;
  background-color: ${({ theme }) => theme.colors.contactHeroDecoration};
  @media only screen and (min-width: 700px) {
    position: absolute;
    bottom: -5rem;
    right: 0;
    width: calc(100% - 18.5vw);
    padding: 3rem 12.5vw 5rem 6.5vw;
  }
  @media only screen and (min-width: 1120px) {
    width: calc(70% - 18.5vw);
  }
  &:before {
    display: none;
    z-index: 2;
    content: "";
    position: absolute;
    height: 2px;
    width: 4rem;
    background-color: #c8ccd8;
    top: 6rem;
    left: 6.5vw;
    @media only screen and (min-width: 700px) {
      display: block;
    }
  }
`
export const ContactHeroTitle = styled.h1`
  position: relative;
  min-height: 115px;
  color: transparent;
  line-height: 48px;
  font-size: 40px;
  margin: 0;
  font-weight: bold;
  letter-spacing: -1px;
  padding-bottom: 1rem;
  @media only screen and (min-width: 700px) {
    color: ${({ theme }) => theme.colors.contactHeroTitle};
    font-size: 56px;
    margin: 9rem 0 2rem 0;
    line-height: 56px;
    letter-spacing: -2px;
  }
  &:after {
    z-index: 1;
    content: "";
    height: 3rem;
    filter: none;
    width: calc(100% + 6.5vw);
    background-color: ${({ theme }) => theme.colors.contactHeroDecoration};
    position: absolute;
    top: -6rem;
    left: -6.5vw;
  }
`

export const ContactHeroText = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.contactHeroText};
`

export const PageDecoration = styled.span`
  position: absolute;
  display: none;
  z-index: 3;
  font-size: 120px;
  font-weight: bold;
  color: #eeeff4;
  top: -4.5rem;
  letter-spacing: -3px;
  right: 12.5vw;
  @media only screen and (min-width: 700px) {
    display: block;
  }
  @media only screen and (min-width: 1400px) {
    font-size: 200px;
    top: -8rem;
  }
`
