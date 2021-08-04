import React from "react"
import ArticleWithDecoration from "../ArticleWithDecoration/ArticleWithDecoration"
import {
  ArticleText,
  ArticleTitle,
  NormalWrapper,
  ArticleImage,
  RWDArticle,
} from "./AboutUsArticle.styled"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function AboutUsArticle() {
  const { data, imageData } = useStaticQuery(aboutArticleQuery)
  const { title, text1, text2, text3 } = data.nodes[0].frontmatter.Article
  const image = imageData.edges[0].node.gatsbyImageData
  return (
    <NormalWrapper>
      <RWDArticle>
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

export const aboutArticleQuery = graphql`
  query MyAboutDataQuery {
    data: allMarkdownRemark(
      filter: { frontmatter: { Article: { location: { eq: "about" } } } }
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
      filter: { fluid: { originalName: { regex: "/articleImage/" } } }
    ) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
  }
`
