import styled from "styled-components"

export const NormalWrapper = styled.div`
  position: relative;
`

export const ArticleTitle = styled.h1`
  width: 10%;
  line-height: 48px;
  font-size: 40px;
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.aboutUsArticleTitle};
  margin-top: 4.5rem;
  margin-bottom: 2rem;
  text-align: left;
`

export const ArticleText = styled.p`
  line-height: 25px;
  color: ${({ theme }) => theme.colors.aboutUsArticleText};
  margin-bottom: 2rem;
`
