import styled from "styled-components"

export const NormalWrapper = styled.div`
  padding-top: ${({ height }) => (height === undefined ? "1248px" : "0")};
  margin-top: ${({ height }) => (height < 720 ? "5rem" : "0")};
  position: relative;
  opacity: ${({ height }) => (height === undefined ? "0" : "1")};
  transition: padding 0.3s ease-in-out, opacity 0.3s ease-in-out;
`

export const FixedWrapper = styled.div`
  position: fixed;
  z-index: -5;
  top: ${({ width }) => (width < 700 ? (width - 250) / 30 : 15)}vh;
  opacity: ${({ width }) => (width === undefined ? "0" : "1")};
  transition: opacity 0.3s ease-in-out;
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
