import styled from "styled-components"

export const FeaturedWrapper = styled.div`
  @keyframes appear{
    0%{
      opacity:0;
    }
    100%{
      opacity:1;
    }
  }  
  min-height: 500px;
  position: fixed;
  z-index: -6;
  top:12rem;
  width: 100%;
  padding: 0rem 6.5vw 5rem 6.5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: white;
  animation: appear 0.5s ease-in-out;
`

export const StyledTitle = styled.h2`
  z-index: 1;
  color: ${({ theme }) => theme.colors.landingFeaturedTitle};
  letter-spacing: -1.43px;
  line-height: 48px;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 2rem;
`
