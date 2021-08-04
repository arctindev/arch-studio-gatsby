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
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Hero() {
  const { data } = useStaticQuery(sliderImagesQuery)
  const [state, setState] = useState(0)
  let time = ""
  useEffect(() => {
    time = setTimeout(() => {
      setState(() => (state < LandingSliderData.length - 1 ? state + 1 : 0))
    }, 12000)
  }, [state])

  const handleNavClick = value => {
    clearTimeout(time)
    setState(value)
  }

  return (
    <RWDWrapper>
      <StyledHero key={state}>
        <StyledImage>
          <GatsbyImage
            style={{ height: "100%", width: "100%" }}
            imgStyle={{ objectFit: "cover" }}
            image={data.edges[state].node.gatsbyImageData}
            alt="image"
          />
        </StyledImage>
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
        {LandingSliderData.map((item, index) => {
          return (
            <SliderNavItem
              key={index}
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

export const sliderImagesQuery = graphql`
  query sliderQuery {
    data: allImageSharp(
      filter: { fluid: { originalName: { regex: "/hero-image/" } } }
      sort: { order: ASC, fields: fluid___originalName }
    ) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
  }
`
