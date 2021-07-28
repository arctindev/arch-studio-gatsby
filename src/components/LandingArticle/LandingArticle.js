import React, { useContext } from "react"
import {
  ArticleText,
  ArticleTitle,
  FixedWrapper,
  NormalWrapper,
} from "./LandingArticle.styles"
import ArticleWithDecoration from "../ArticleWithDecoration/ArticleWithDecoration"
import { LandingArticleData } from "../../data/LandingData/LandingData"
import { ViewportContext } from "../../Providers/viewportManagment"

export default function LandingArticle() {
  const { height, width } = useContext(ViewportContext)
  if (height > 720) {
    return (
      <FixedWrapper width={width}>
        {LandingArticleData.map((item, index) => (
          <ArticleWithDecoration key={index}>
            <ArticleTitle>{item.title}</ArticleTitle>
            <ArticleText>{item.article1}</ArticleText>
            <ArticleText>{item.article2}</ArticleText>
            <ArticleText>{item.article3}</ArticleText>
          </ArticleWithDecoration>
        ))}
      </FixedWrapper>
    )
  } else {
    return (
      <NormalWrapper height={height}>
        {LandingArticleData.map((item, index) => (
          <ArticleWithDecoration key={index}>
            <ArticleTitle>{item.title}</ArticleTitle>
            <ArticleText>{item.article1}</ArticleText>
            <ArticleText>{item.article2}</ArticleText>
            <ArticleText>{item.article3}</ArticleText>
          </ArticleWithDecoration>
        ))}
      </NormalWrapper>
    )
  }
}
