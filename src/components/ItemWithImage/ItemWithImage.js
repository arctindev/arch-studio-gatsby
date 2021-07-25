import React, { useState } from "react"
import {
  ItemText,
  ItemWrapper,
  ItemTitle,
  MaskedImage,
  ItemTextWrapper,
} from "./ItemWithImage.styles"

export default function ItemWithImage({ image, title, text }) {
  const [active, setActive] = useState(false)

  const handleMouseEnter = () => {
    setActive(() => true)
  }
  const handleMouseLeave = () => {
    setActive(() => false)
  }
  return (
    <ItemWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <MaskedImage image={image} active={active}/>
      <ItemTextWrapper>
        <ItemTitle>{title}</ItemTitle>
        <ItemText>{text}</ItemText>
      </ItemTextWrapper>
    </ItemWrapper>
  )
}
