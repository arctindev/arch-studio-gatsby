import styled from "styled-components"
import image from "../../assets/images/contact/contactHeroImage.jpg"
import bigImage from "../../assets/images/contact/contactHeroImageBig.jpg"

export const ContactHeroWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 6rem;
  background-color: ${({ theme }) => theme.colors.contactHeroBG};
  padding: ${({ width }) => (width < 700 ? "none" : "0rem 12.5vw 0rem 12.5vw")};
  margin-bottom: ${({ width }) => (width < 700 ? "0" : "15rem")};
`

export const ContactImage = styled.div`
  position: relative;
  background: ${({ width }) =>
      width < 700 ? `url(${image})` : `url(${bigImage})`}
    no-repeat;
  background-size: cover;
  width: 100%;
  height: ${({ width }) => (width < 700 ? "240px" : "720px")};
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
  z-index: 1;
  position: ${({ width }) => (width < 700 ? "relative" : "absolute")};
  bottom: ${({ width }) => (width < 700 ? "0" : "-5rem")};
  right: ${({ width }) => (width < 700 ? "auto" : "0")};
  width: ${({ width }) => (width < 700 ? "auto" : "calc(100% - 18.5vw)")};
  padding: ${({ width }) =>
    width < 700 ? "3rem 6.5vw 5rem 6.5vw" : "3rem 12.5vw 5rem 6.5vw"};
  background-color: ${({ theme }) => theme.colors.contactHeroDecoration};
  &:before {
    display: ${({ width }) => (width < 700 ? "none" : "block")};
    z-index: 2;
    content: "";
    position: absolute;
    height: 2px;
    width: 4rem;
    background-color: #c8ccd8;
    top: 6rem;
    left: 6.5vw;
  }
`
export const ContactHeroTitle = styled.h1`
  position: relative;
  min-height: 115px;
  color: ${({ width, theme }) =>
    width < 700 ? "transparent" : theme.colors.contactHeroTitle};
  line-height: 48px;
  font-size: ${({ width }) => (width < 700 ? "40px" : "56px")};
  width: ${({ width }) => (width < 700 ? "auto" : "auto")};
  margin: ${({ width }) => (width < 700 ? 0 : "9rem 0 2rem 0")};
  font-weight: bold;
  letter-spacing: -1px;
  padding-bottom: 1rem;
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
  display: ${({ width }) => (width < 700 ? "none" : "block")};
  z-index: 3;
  font-size: 120px;
  font-weight: bold;
  color: #eeeff4;
  top: -4.5rem;
  right: 12.5vw;
`
