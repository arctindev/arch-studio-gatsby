import React, { Children } from "react"
import {
  FeaturedWrapper,
  StyledTitle,
  ItemCounter,
  RWDButton,
  ItemRWDWrapper,
} from "./LandingFeatured.styles"
import Button from "../Button/Button"
import ItemWithImage from "../ItemWithImage/ItemWithImage"
import { LandingFeaturedData } from "../../data/LandingData/LandingData"

export default function LandingFeatured() {
  return (
    <FeaturedWrapper>
      <StyledTitle>Featured</StyledTitle>
      <ItemRWDWrapper>
        {LandingFeaturedData.map((item, index) => {
          return (
            <ItemWithImage
              key={index + 1}
              counter={index + 1}
              image={item.image}
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
