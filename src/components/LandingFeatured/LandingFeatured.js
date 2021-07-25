import React from "react"
import { FeaturedWrapper, StyledTitle } from "./LandingFeatured.styles"
import Button from "../Button/Button"
import ItemWithImage from "../LandingItemWithImage/ItemWithImage"

export default function LandingFeatured({data}) {
  return (
    <FeaturedWrapper >
      <StyledTitle>Featured</StyledTitle>
          <ItemWithImage
            
            image={data.image}
            title={data.title}
            text={data.text}
          />
      <Button width="inherit" textContent="See All" />
    </FeaturedWrapper>
  )
}
