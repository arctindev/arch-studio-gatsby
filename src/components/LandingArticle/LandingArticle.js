import React from "react"
import {
  StyledWrapper,
  ArticleText,
  ArticleTitle,
} from "./LandingArticle.styles"

export default function LandingArticle() {
  return (
    <StyledWrapper>
      <ArticleTitle>Welcome to Arch Studio</ArticleTitle>
      <ArticleText>
        We have a unique network and skillset to help bring your projects to
        life. Our small team of highly skilled individuals combined with our
        large network put us in a strong position to deliver exceptional
        results.
      </ArticleText>
      <ArticleText>
        Over the past 10 years, we have worked on all kinds of projects. From
        stations to high-rise buildings, we create spaces that inspire and
        delight.
      </ArticleText>
      <ArticleText>
        We work closely with our clients so that we understand the intricacies
        of each project. This allows us to work in harmony the surrounding area
        to create truly stunning projects that will stand the test of time.
      </ArticleText>
    </StyledWrapper>
  )
}
