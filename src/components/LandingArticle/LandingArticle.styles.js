import styled from "styled-components"

export const NormalWrapper = styled.div`
  margin-top: ${({height}) => height<720 ? "5rem" : "0"};
  position: relative;
`;

export const FixedWrapper = styled.div`
  position: fixed;
  z-index: -5;
  top: ${({width}) => width<700 ? (width-300)/30 : 20}vh;
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
