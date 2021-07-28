import React from "react"
import {
  LeadersTitle,
  StyledWrapper,
  LeadersWrapper,
} from "./AboutUsLeaders.styles"
import { LeadersData } from "../../data/AboutUsData/AboutUsData"
import CardWithPerson from "../CardWithPerson/CardWithPerson"

export default function AboutUsLeaders() {
  return (
    <StyledWrapper>
      <LeadersTitle>The Leaders</LeadersTitle>
      <LeadersWrapper>
        {LeadersData.map((item, index) => (
          <CardWithPerson
            key={index}
            image={item.image}
            name={item.name}
            job={item.job}
          />
        ))}
      </LeadersWrapper>
    </StyledWrapper>
  )
}
