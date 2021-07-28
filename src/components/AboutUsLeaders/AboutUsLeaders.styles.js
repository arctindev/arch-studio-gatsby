import styled from "styled-components"

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 0 6.5vw 0 6.5vw;
  background-color: ${({ theme }) => theme.colors.aboutUsLeadersBG};
  padding-bottom: 4rem;
`

export const LeadersTitle = styled.h1`
  width: 10%;
  line-height: 48px;
  font-size: 40px;
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.aboutUsArticleTitle};
  padding-bottom: 4rem;
  text-align: left;
`

export const LeadersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
