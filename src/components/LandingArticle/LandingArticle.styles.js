import styled from "styled-components"
export const FixedWrapper = styled.div`
  position: fixed;
  z-index: -5;
  top: 7rem;
`;

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
