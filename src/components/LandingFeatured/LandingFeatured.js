import React from "react"
import {
  FeaturedWrapper,
  StyledTitle,
  RWDButton,
  ItemRWDWrapper,
} from "./LandingFeatured.styles"
import Button from "../Button/Button"
import ItemWithImage from "../ItemWithImage/ItemWithImage"
import { LandingFeaturedData } from "../../data/LandingData/LandingData"
import { graphql, useStaticQuery } from "gatsby"

export default function LandingFeatured() {
  const { data } = useStaticQuery(featuredImagesQuery)
  console.log(data.edges[0].node.gatsbyImageData)

  return (
    <FeaturedWrapper>
      <StyledTitle>Featured</StyledTitle>
      <ItemRWDWrapper>
        {LandingFeaturedData.map((item, index) => {
          return (
            <ItemWithImage
              key={index + 1}
              counter={index + 1}
              image={data.edges[index].node.gatsbyImageData}
              title={item.title}
              text={item.text}
            />
          )
        })}
        <RWDButton>
          <Button
            width="inherit"
            textContent="See All"
            linkDirection="/portfolio"
          />
        </RWDButton>
      </ItemRWDWrapper>
    </FeaturedWrapper>
  )
}

export const featuredImagesQuery = graphql`
  query FeaturedQuery {
  data : allImageSharp(filter: {fluid: {originalName: {regex: "/featured/"}}}) {
    edges {
      node {
        gatsbyImageData
      }
    }
  }
}

`;
