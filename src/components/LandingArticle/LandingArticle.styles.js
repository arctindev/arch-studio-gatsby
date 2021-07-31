import styled from "styled-components"

export const NormalWrapper = styled.div`
  margin-top: 10rem;
  position: relative;
  transition: padding 0.3s ease-in-out, opacity 0.1s ease-in-out;
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
`

export const ArticleTitle = styled.h1`
  line-height: 48px;
  font-size: 40px;
  width: 20rem;
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.landingArticleTitle};
  margin-top: 4.5rem;
  margin-bottom: 2rem;
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
`
