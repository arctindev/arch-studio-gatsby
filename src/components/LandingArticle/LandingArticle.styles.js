import styled from "styled-components"
import image from "../../assets/images/landing/landing-article.jpg"

export const NormalWrapper = styled.div`
  margin-top: 10rem;
  position: relative;
  width: 100%;
  &:before {
    content: "";
    position: absolute;
    height: 2px;
    width: 4rem;
    background-color: #c8ccd8;
    top: 0;
    left: 6.5vw;
    @media only screen and (min-width: 700px) {
      display: none;
      left: 12.5vw;
    }
  }
  @media only screen and (min-width: 700px) {
    margin-top: 11rem;
  }
  @media only screen and (min-width: 1180px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    padding-right: 12.5vw;
    margin-top: 12rem;
  }
`
export const RWDArticle = styled.div`
  z-index: 4;
  width: 100%;
  @media only screen and (min-width: 1180px) {
    width: 60.5%;
  }
`

export const ArticleImage = styled.div`
  position: relative;
  display: block;
  width: 25%;
  height: auto;
  max-height: 570px;
  background: url(${image}) no-repeat;
  background-size: cover;
  background-position-x: 50%;
  filter: contrast(115%) saturate(130%) grayscale(20%);
  @media only screen and (min-width: 1180px) {
    display: block;
  }
  &:after {
    z-index: 2;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom left, black, transparent);
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.3;
  }
`

export const ArticleTitle = styled.h1`
  z-index: 5;
  line-height: 48px;
  font-size: 40px;
  width: 18rem;
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.landingArticleTitle};
  margin-top: 4.5rem;
  margin-bottom: 2rem;
  overflow: hidden;
  @media only screen and (min-width: 700px) {
    width: 25rem;
    font-size: 56px;
    letter-spacing: -2px;
    line-height: 56px;
    margin-bottom: 3rem;
  }
`

export const ArticleText = styled.p`
  line-height: 25px;
  color: ${({ theme }) => theme.colors.landingArticleText};
  margin-bottom: 2rem;
`

export const PageDecoration = styled.span`
  position: absolute;
  display: none;
  z-index: 3;
  font-size: 120px;
  font-weight: bold;
  letter-spacing: -3px;
  color: #eeeff4;
  top: -4.5rem;
  left: 12.5vw;
  @media only screen and (min-width: 700px) {
    font-size: 105px;
    display: block;
  }
  @media only screen and (min-width: 768px) {
    font-size: 120px;
    display: block;
  }
  @media only screen and (min-width: 1180px) {
    font-size: 160px;
    letter-spacing: -5px;
    top: -7.5rem;
  }
  @media only screen and (min-width: 1400px) {
    font-size: 200px;
    letter-spacing: -5px;
  }
`
