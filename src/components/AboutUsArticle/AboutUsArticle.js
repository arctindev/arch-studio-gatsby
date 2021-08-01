import React from "react"
import { AboutUsData } from "../../data/AboutUsData/AboutUsData"
import ArticleWithDecoration from "../ArticleWithDecoration/ArticleWithDecoration"
import {
  ArticleText,
  ArticleTitle,
  NormalWrapper,
  ArticleImage,
  RWDArticle,
} from "./AboutUsArticle.styled"
export default function AboutUsArticle() {
  return (
    <NormalWrapper>
      <RWDArticle>
        {AboutUsData.map((item, index) => (
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
