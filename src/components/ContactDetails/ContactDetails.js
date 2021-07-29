import React from "react"
import ArticleWithDecoration from "../ArticleWithDecoration/ArticleWithDecoration"
import {
  DetailsText,
  DetailsTitle,
  DetailsSubtitle,
  DetailsWrapper,
  NormalWrapper,
  StyledButton,
  StyledLink,
} from "./ContactDetails.styles"
import ButtonArrow from "../../assets/icons/button-arrow-black.inline.svg"

export default function ContactDetails() {
  return (
    <NormalWrapper>
      <ArticleWithDecoration>
        <DetailsTitle>Contact Details</DetailsTitle>
        <DetailsWrapper>
          <DetailsSubtitle>Main Office</DetailsSubtitle>
          <DetailsText>Mail : archone@mail.com</DetailsText>
          <DetailsText>Address : 1892 Chenoweth Drive TN</DetailsText>
          <DetailsText>Phone : 123 - 456 - 3451</DetailsText>
          <StyledButton width="152px">
            <span>View on Map</span>
            <ButtonArrow />
          </StyledButton>
        </DetailsWrapper>
        <DetailsWrapper>
          <DetailsSubtitle>Office II</DetailsSubtitle>
          <DetailsText>Mail : archtwo@mail.com</DetailsText>
          <DetailsText>Address : 3399 Wines Lane TX</DetailsText>
          <DetailsText>Phone : 832 - 123 - 4321</DetailsText>
          <StyledButton width="152px">
            <span>View on Map</span>
            <ButtonArrow />
          </StyledButton>
        </DetailsWrapper>
      </ArticleWithDecoration>
    </NormalWrapper>
  )
}
