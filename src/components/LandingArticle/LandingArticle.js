import React from "react"
import {
  ArticleText,
  ArticleTitle,
  NormalWrapper,
  PageDecoration,
  ArticleImage,
  RWDArticle,
} from "./LandingArticle.styles"
import ArticleWithDecoration from "../ArticleWithDecoration/ArticleWithDecoration"
import { LandingArticleData } from "../../data/LandingData/LandingData"

export default function LandingArticle() {
  return (
    <NormalWrapper>
      <RWDArticle>
        <PageDecoration>Welcome</PageDecoration>
        {LandingArticleData.map((item, index) => (
          <ArticleWithDecoration key={index}>
            <ArticleTitle>{item.title}</ArticleTitle>
            <ArticleText>{item.article1}</ArticleText>
            <ArticleText>{item.article2}</ArticleText>
            <ArticleText>{item.article3}</ArticleText>
          </ArticleWithDecoration>
        ))}
      </RWDArticle>
      <ArticleImage />
    </NormalWrapper>
  )
}
