import styled from "styled-components"
import image from "../../assets/images/hero-image.jpg"

export const StyledHero = styled.div`
  width: 100%;
  height: 560px;
  padding: 0 6.5vw 0 6.5vw;
  color: ${({theme})=>theme.colors.heroFont};
  background: url(${image}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  margin-top: 6rem;
`

export const StyledHeroWrapper = styled.div`
  height: 340px;
  width: inherit;
`

export const StyledHeroTitle = styled.h2`
  font-size: 48px;
  font-weight: 900;
  line-height: 48px;
  letter-spacing: -1.2px;
  margin-bottom: 1rem;
`

export const StyledHeroText = styled.p`
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 4rem;
`
