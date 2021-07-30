import styled from "styled-components"

export const NormalWrapper = styled.div`
  margin-top: 5rem;
  position: relative;
  transition: padding 0.3s ease-in-out, opacity 0.1s ease-in-out;
`

export const ArticleTitle = styled.h1`
  line-height: 48px;
  font-size: 40px;
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.landingArticleTitle};
  margin-top: 4.5rem;
  margin-bottom: 2rem;
`

export const ArticleText = styled.p`
  line-height: 25px;
  color: ${({ theme }) => theme.colors.landingArticleText};
  margin-bottom: 2rem;
`
