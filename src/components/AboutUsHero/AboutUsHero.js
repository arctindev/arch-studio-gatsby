import React from "react"
import {
  AboutUsImage,
  AboutUsHeroWrapper,
  AboutUsHeroTitle,
  TextWrapper,
  AboutUsHeroText,
  PageDecoration,
} from "./AboutUsHero.styles"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

export default function AboutUsHero() {
  const { data } = useStaticQuery(AboutHeroImageQuery)
  const image = data.edges[0].node.gatsbyImageData
  return (
    <AboutUsHeroWrapper>
      <AboutUsImage>
        <GatsbyImage
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ objectFit: "cover" }}
          image={image}
          alt="image"
        />
      </AboutUsImage>
      <TextWrapper>
        <PageDecoration>About</PageDecoration>
        <AboutUsHeroTitle>Your team of professionals</AboutUsHeroTitle>
        <AboutUsHeroText>
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </AboutUsHeroText>
      </TextWrapper>
    </AboutUsHeroWrapper>
  )
}

export const AboutHeroImageQuery = graphql`
  query AboutHeroQuery {
    data: allImageSharp(
      filter: { fluid: { originalName: { regex: "/aboutHeroImageBig/" } } }
    ) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
  }
`
