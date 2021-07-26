import React from "react"
import { PortfolioWrapper } from "./PortfolioGallery.styles"
import { portfolioGaleryData } from "./PortfolioGalleryData"
import ItemWithImage from "../ItemWithImage/ItemWithImage"

export default function PortfolioGallery() {
  return (
    <PortfolioWrapper>
      {portfolioGaleryData.map((item, index) => {
        return (
          <ItemWithImage
            key={index}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        )
      })}
    </PortfolioWrapper>
  )
}
