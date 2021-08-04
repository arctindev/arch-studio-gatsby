import React from "react"
import {
  ContactImage,
  ContactHeroWrapper,
  ContactHeroTitle,
  TextWrapper,
  ContactHeroText,
  PageDecoration,
} from "./ContactHero.styles"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

export default function ContactHero() {
  const { data } = useStaticQuery(ContactHeroImageQuery)
  const image = data.edges[0].node.gatsbyImageData
  return (
    <ContactHeroWrapper>
      <ContactImage>
        <GatsbyImage
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ objectFit: "cover" }}
          image={image}
          alt="image"
        />
      </ContactImage>
      <TextWrapper>
        <PageDecoration>Contact</PageDecoration>
        <ContactHeroTitle>Tell us about your project</ContactHeroTitle>
        <ContactHeroText>
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </ContactHeroText>
      </TextWrapper>
    </ContactHeroWrapper>
  )
}

export const ContactHeroImageQuery = graphql`
  query ContactHeroQuery {
    data: allImageSharp(
      filter: { fluid: { originalName: { regex: "/contactHeroImageBig/" } } }
    ) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
  }
`
