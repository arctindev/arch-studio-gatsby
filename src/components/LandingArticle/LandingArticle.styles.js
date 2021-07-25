import styled from "styled-components"

export const StyledWrapper = styled.main`
  position: relative;
  width: 100%;
  height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  padding: 0 6.5vw 0 6.5vw;
  margin-bottom: 7rem;
  &:before {
    content: "";
    position: absolute;
    height: 2px;
    width: 4rem;
    background-color: #c8ccd8;
    top: 0;
    left: 6.5vw;
  }
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
