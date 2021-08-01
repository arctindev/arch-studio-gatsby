import React, { useState, useEffect } from "react"
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroTitle,
  StyledHeroText,
  StyledButton,
  StyledLink,
  RWDWrapper,
  StyledImage,
  SliderNav,
  SliderNavItem,
} from "./Hero.styles"
import ButtonArrow from "../../assets/icons/button-arrow.inline.svg"
import { LandingSliderData } from "../../data/LandingData/LandingData"

export default function Hero() {
  const [state, setState] = useState(0)
  let time = ""
  const handleNavClick = value => {
    clearTimeout(time)
    setState(value)
  }

  useEffect(() => {
    time = setTimeout(() => {
      setState(() => (state < LandingSliderData.length - 1 ? state + 1 : 0))
    }, 12000)
  }, [state])

  return (
    <RWDWrapper>
      <StyledHero key={state}>
        <StyledImage image={LandingSliderData[state].image} />
        <StyledHeroWrapper>
          <StyledHeroTitle>{LandingSliderData[state].title}</StyledHeroTitle>
          <StyledHeroText>{LandingSliderData[state].text}</StyledHeroText>
          <StyledLink to="/portfolio">
            <StyledButton width="250px">
              <span>See Our Portfolio</span>
              <ButtonArrow />
            </StyledButton>
          </StyledLink>
        </StyledHeroWrapper>
      </StyledHero>
      <SliderNav>
        {LandingSliderData.map(item => {
          return (
            <SliderNavItem
              onClick={() => handleNavClick(item.id - 1)}
              value={item.id}
              state={state + 1}
            >
              {item.id < 10 ? `0${item.id}` : item.id}
            </SliderNavItem>
          )
        })}
      </SliderNav>
    </RWDWrapper>
  )
}
