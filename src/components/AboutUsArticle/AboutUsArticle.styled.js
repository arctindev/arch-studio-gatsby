import styled from "styled-components"
import image from "../../assets/images/about/articleImage.jpg"

export const NormalWrapper = styled.div`
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
      left: 12.5vw;
    }
  }
  @media only screen and (min-width: 1120px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-right: 12.5vw;
  }
`
export const ArticleImage = styled.div`
  position: relative;
  display: none;
  width: 40%;
  height: auto;
  background: url(${image}) no-repeat;
  background-size: 800px;
  filter: contrast(125%) saturate(170%) grayscale(0%);
  @media only screen and (min-width: 1120px) {
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

export const RWDArticle = styled.div`
  width: 100%;
  @media only screen and (min-width: 1120px) {
    width: 60%;
  }
`
export const ArticleTitle = styled.h1`
  width: 10%;
  line-height: 48px;
  font-size: 40px;
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.aboutUsArticleTitle};
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  text-align: left;
  @media only screen and (min-width: 700px) {
    font-size: 56px;
    letter-spacing: -2px;
    line-height: 56px;
  }
`

export const ArticleText = styled.p`
  line-height: 25px;
  color: ${({ theme }) => theme.colors.aboutUsArticleText};
  margin-bottom: 2rem;
`
