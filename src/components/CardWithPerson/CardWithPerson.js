import React, { useState } from "react"
import LinkedinIcon from "../../assets/icons/linkedin.inline.svg"
import TwitterIcon from "../../assets/icons/twitter.inline.svg"

import {
  CardWrapper,
  PersonImage,
  PersonName,
  PersonJob,
  PersonIcons,
  Icons,
} from "./CardWithPerson.styles"
import { GatsbyImage } from "gatsby-plugin-image"

export default function CardWithPerson({ image, name, job }) {
  const [active, setActive] = useState(false)

  const handleMouseEnter = () => {
    setActive(() => true)
  }

  const handleMouseLeave = () => {
    setActive(() => false)
  }

  return (
    <CardWrapper>
      <PersonImage active={active}>
        <GatsbyImage
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            zIndex: "0",
            height: "100%",
            width: "100%",
            minHeight: "300px",
          }}
          imgStyle={{ objectFit: "cover" }}
          image={image}
          alt="image"
        />
        <PersonIcons active={active}>
          <LinkedinIcon
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <TwitterIcon
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </PersonIcons>
      </PersonImage>
      <PersonName>{name}</PersonName>
      <PersonJob>{job}</PersonJob>
      <Icons>
        <LinkedinIcon />
        <TwitterIcon />
      </Icons>
    </CardWrapper>
  )
}
