import styled from "styled-components"

export const FeaturedWrapper = styled.div`
  height: 960px;
  width: 100%;
  padding: 0vh 6.5vw 0 6.5vw;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.landingFeaturedTitle};
  letter-spacing: -1.43px;
  line-height: 48px;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 2rem;
`
