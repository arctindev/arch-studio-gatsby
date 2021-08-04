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
import { GatsbyImage } from "gatsby-plugin-image"

export default function LandingArticle() {
  const { data, imageData } = useStaticQuery(landingArticleQuery)
  const { title, text1, text2, text3 } = data.nodes[0].frontmatter.Article
  const image = imageData.edges[0].node.gatsbyImageData
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
      <ArticleImage>
        <GatsbyImage
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ objectFit: "cover" }}
          image={image}
          alt="image"
        />
      </ArticleImage>
    </NormalWrapper>
  )
}

export const landingArticleQuery = graphql`
  query MyLandingDataQuery {
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
      }
    }
    imageData: allImageSharp(
      filter: { fluid: { originalName: { regex: "/landing-article/" } } }
    ) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
  }
`
