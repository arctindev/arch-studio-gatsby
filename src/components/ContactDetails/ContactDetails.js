import React from "react"
import ArticleWithDecoration from "../ArticleWithDecoration/ArticleWithDecoration"
import {
  DetailsText,
  DetailsTitle,
  DetailsSubtitle,
  DetailsWrapper,
  NormalWrapper,
  StyledButton,
  RwdWrapper,
} from "./ContactDetails.styles"
import ButtonArrow from "../../assets/icons/button-arrow-black.inline.svg"

export default function ContactDetails() {
  return (
    <NormalWrapper>
      <ArticleWithDecoration>
        <DetailsTitle>Contact Details</DetailsTitle>
        <DetailsSubtitle>Main Office</DetailsSubtitle>
        <RwdWrapper>
          <DetailsWrapper>
            <DetailsText>Mail : archone@mail.com</DetailsText>
            <DetailsText>Address : 1892 Chenoweth Drive TN</DetailsText>
            <DetailsText>Phone : 123 - 456 - 3451</DetailsText>
          </DetailsWrapper>
          <StyledButton width="152px">
            <span>View on Map</span>
            <ButtonArrow />
          </StyledButton>
        </RwdWrapper>
        <DetailsSubtitle>Office II</DetailsSubtitle>
        <RwdWrapper>
          <DetailsWrapper>
            <DetailsText>Mail : archtwo@mail.com</DetailsText>
            <DetailsText>Address : 3399 Wines Lane TX</DetailsText>
            <DetailsText>Phone : 832 - 123 - 4321</DetailsText>
          </DetailsWrapper>
          <StyledButton width="152px">
            <span>View on Map</span>
            <ButtonArrow />
          </StyledButton>
        </RwdWrapper>
      </ArticleWithDecoration>
    </NormalWrapper>
  )
}
