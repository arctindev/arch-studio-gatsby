import React, { useState } from "react"
import {
  ItemText,
  ItemWrapper,
  ItemTitle,
  MaskedImage,
  ItemTextWrapper,
} from "./ItemWithImage.styles"

export default function ItemWithImage({ counter, image, title, text }) {
  const [active, setActive] = useState(false)
  let timeout = ""
  const handleMouseEnter = () => {
    clearTimeout(timeout)
    setActive(() => true)
  }
  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setActive(() => false)
    }, 750)
  }

  return (
    <ItemWrapper
      counter={counter}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MaskedImage active={active}>
        <img src={image} />
      </MaskedImage>
      <ItemTextWrapper>
        <ItemTitle>{title}</ItemTitle>
        <ItemText>{text}</ItemText>
      </ItemTextWrapper>
    </ItemWrapper>
  )
}
