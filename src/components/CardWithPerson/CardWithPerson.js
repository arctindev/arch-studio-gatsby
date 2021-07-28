import React from "react"
import LinkedinIcon from "../../assets/icons/linkedin.inline.svg"
import TwitterIcon from "../../assets/icons/twitter.inline.svg"

import {
  CardWrapper,
  PersonImage,
  PersonName,
  PersonJob,
  Icons,
} from "./CardWithPerson.styles"

export default function CardWithPerson({ image, name, job }) {
  return (
    <CardWrapper>
      <PersonImage image={image} />
      <PersonName>{name}</PersonName>
      <PersonJob>{job}</PersonJob>
      <Icons>
        <LinkedinIcon />
        <TwitterIcon />
      </Icons>
    </CardWrapper>
  )
}
