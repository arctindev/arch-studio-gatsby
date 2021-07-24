import React from "react"
import {
  ItemText,
  ItemWrapper,
  ItemTitle,
  MaskedImage,
  ItemTextWrapper,
} from "./ItemWithImage.styles"

export default function ItemWithImage({ image, title, text }) {
  return (
    <ItemWrapper>
      <MaskedImage image={image} />
      <ItemTextWrapper>
        <ItemTitle>{title}</ItemTitle>
        <ItemText>{text}</ItemText>
      </ItemTextWrapper>
    </ItemWrapper>
  )
}
