import styled from "styled-components"

export const NormalWrapper = styled.div`
  position: relative;
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
