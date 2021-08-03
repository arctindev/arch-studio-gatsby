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
import { useStaticQuery, graphql } from "gatsby"

export default function LandingArticle() {
  const { data } = useStaticQuery(landingArticleQuery)
  const { title, text1, text2, text3 } = data.nodes[0].frontmatter.Article

  return (
    <NormalWrapper>
      <RWDArticle>
        <PageDecoration>Welcome</PageDecoration>
        <ArticleWithDecoration>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleText>{text1}</ArticleText>
          <ArticleText>{text2}</ArticleText>
          <ArticleText>{text3}</ArticleText>
        </ArticleWithDecoration>
      </RWDArticle>
      <ArticleImage />
    </NormalWrapper>
  )
}

export const landingArticleQuery = graphql`
  query MyLandingtDataQuery {
    data: allMarkdownRemark(
      filter: { frontmatter: { Article: { location: { eq: "home" } } } }
    ) {
      nodes {
        frontmatter {
          Article {
            title
            text1
            text2
            text3
          }
        }
        id
      }
    }
  }
`
