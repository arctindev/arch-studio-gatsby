import React, { useState } from "react"
import {
  ItemText,
  ItemWrapper,
  ItemTitle,
  MaskedImage,
  ItemTextWrapper,
} from "./ItemWithImage.styles"
import { GatsbyImage } from "gatsby-plugin-image"

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
  console.log(image)
  return (
    <ItemWrapper
      counter={counter}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MaskedImage active={active}>
        <GatsbyImage style={{ height: "100%", width: "100%" }} imgStyle={{ objectFit: "cover" }} image={image} alt="image"/>
      </MaskedImage>
      <ItemTextWrapper>
        <ItemTitle>{title}</ItemTitle>
        <ItemText>{text}</ItemText>
      </ItemTextWrapper>
    </ItemWrapper>
  )
}
