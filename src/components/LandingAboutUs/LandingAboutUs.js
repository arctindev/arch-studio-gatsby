import React from "react"
import Button from "../Button/Button"
import {
  InnerWrapper,
  LandingAboutUsWrapper,
  MaskedImage,
  StyledTitle,
  RWDWrapper,
} from "./LandingAboutUs.styles"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function LandingAboutUs() {
  const { data } = useStaticQuery(landingAboutQuery)
  return (
    <RWDWrapper>
      <LandingAboutUsWrapper>
        <MaskedImage>
          <GatsbyImage
            style={{ height: "100%", width: "100%" }}
            imgStyle={{ objectFit: "cover" }}
            image={data.edges[0].node.gatsbyImageData}
            alt="image"
          />
        </MaskedImage>
        <InnerWrapper>
          <StyledTitle>Small team, big ideas</StyledTitle>
          <Button width="190px" textContent="About Us" linkDirection="/about" />
        </InnerWrapper>
      </LandingAboutUsWrapper>
    </RWDWrapper>
  )
}

export const landingAboutQuery = graphql`
  query MyLandingAboutDataQuery {
    data: allImageSharp(
      filter: { fluid: { originalName: { regex: "/landing-about-us-image/" } } }
    ) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
  }
`
