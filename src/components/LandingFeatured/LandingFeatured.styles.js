import styled from "styled-components"

export const FeaturedWrapper = styled.div`
  min-height: 960px;
  width: 100%;
  padding: 5rem 6.5vw 5rem 6.5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.landingFeaturedBG};
`

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.landingFeaturedTitle};
  letter-spacing: -1.43px;
  line-height: 48px;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 2rem;
`
