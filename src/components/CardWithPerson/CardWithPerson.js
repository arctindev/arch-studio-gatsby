import React, {useState} from "react"
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

export default function CardWithPerson({ image, name, job }) {
    const [active, setActive] = useState(false)

  const handleMouseEnter = () => {
    setActive(() => true)
  }

  const handleMouseLeave = () => {
      setActive(() => false)
  }

  return (
    <CardWrapper onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <PersonImage active={active}>
        <img src={image} />
        <PersonIcons active={active}>
        <LinkedinIcon />
        <TwitterIcon />
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
