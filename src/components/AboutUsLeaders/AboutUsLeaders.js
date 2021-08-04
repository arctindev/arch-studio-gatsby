import React from "react"
import {
  LeadersTitle,
  StyledWrapper,
  LeadersWrapper,
} from "./AboutUsLeaders.styles"
import { LeadersData } from "../../data/AboutUsData/AboutUsData"
import CardWithPerson from "../CardWithPerson/CardWithPerson"
import { graphql, useStaticQuery } from "gatsby"

export default function AboutUsLeaders() {
  const { data } = useStaticQuery(LeadersImagesQuery)
  return (
    <StyledWrapper>
      <LeadersTitle>The Leaders</LeadersTitle>
      <LeadersWrapper>
        {LeadersData.map((item, index) => (
          <CardWithPerson
            key={index}
            image={data.edges[index].node.gatsbyImageData}
            name={item.name}
            job={item.job}
          />
        ))}
      </LeadersWrapper>
    </StyledWrapper>
  )
}

export const LeadersImagesQuery = graphql`
  query LeadersQuery {
    data: allImageSharp(
      filter: { fluid: { originalName: { regex: "/person/" } } }
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
