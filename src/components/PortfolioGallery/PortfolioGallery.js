import React from "react"
import { PortfolioWrapper } from "./PortfolioGallery.styles"
import { portfolioGaleryData } from "../../data/PortfolioGalleryData/PortfolioGalleryData"
import ItemWithImage from "../ItemWithImage/ItemWithImage"
import { graphql, useStaticQuery } from "gatsby"

export default function PortfolioGallery() {
  const { data } = useStaticQuery(PortfolioImagesQuery)
  return (
    <PortfolioWrapper>
      {portfolioGaleryData.map((item, index) => {
        return (
          <ItemWithImage
            key={index}
            image={data.edges[index].node.gatsbyImageData}
            title={item.title}
            text={item.text}
          />
        )
      })}
    </PortfolioWrapper>
  )
}

export const PortfolioImagesQuery = graphql`
  query PortfolioQuery {
    data: allImageSharp(
      filter: { fluid: { originalName: { regex: "/portfolio/" } } }
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
