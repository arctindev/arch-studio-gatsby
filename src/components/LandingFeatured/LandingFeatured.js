import React from "react"
import {
  FeaturedWrapper,
  StyledTitle,
  ItemWrapper,
  RWDButton,
} from "./LandingFeatured.styles"
import Button from "../Button/Button"
import ItemWithImage from "../ItemWithImage/ItemWithImage"
import { LandingFeaturedData } from "../../data/LandingData/LandingData"

export default function LandingFeatured() {
  return (
    <FeaturedWrapper>
      <StyledTitle>Featured</StyledTitle>
      {LandingFeaturedData.map((item, index) => {
        return (
          <ItemWrapper key={index}>
            <ItemWithImage
              key={index}
              image={item.image}
              title={item.title}
              text={item.text}
            />
          </ItemWrapper>
        )
      })}
      <RWDButton>
        <Button
          width="inherit"
          textContent="See All"
          linkDirection="/portfolio"
        />
      </RWDButton>
    </FeaturedWrapper>
  )
}
