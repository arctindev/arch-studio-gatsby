import React from "react"
import {
  ArticleText,
  ArticleTitle,
  FixedWrapper
} from "./LandingArticle.styles"
import ArticleWithDecoration from "../ArticleWithDecoration/ArticleWithDecoration"
import { LandingArticleData } from "../../data/LandingData/LandingData"

export default function LandingArticle() {
  return (
      <FixedWrapper >
      {LandingArticleData.map((item) => 
        (
          <ArticleWithDecoration>
          <ArticleTitle>{item.title}</ArticleTitle>
        <ArticleText>
          {item.article1}
        </ArticleText>
        <ArticleText>
          {item.article2}
        </ArticleText>
        <ArticleText>
          {item.article3}
        </ArticleText>
        </ArticleWithDecoration>
        )
      )}
    </FixedWrapper>
  )
}
