import React from "react"
import { FeaturedWrapper, StyledTitle } from "./LandingFeatured.styles"
import Button from "../Button/Button"
import ItemWithImage from "../ItemWithImage/ItemWithImage"
import { LandingData } from "./LandingData"

export default function LandingFeatured() {
  return (
    <FeaturedWrapper>
      <StyledTitle>Featured</StyledTitle>
      {LandingData.map((item, index) => {
        return (
          <ItemWithImage
            key={index}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        )
      })}
      <Button width="inherit" textContent="See All" />
    </FeaturedWrapper>
  )
}
