import React from "react"
import MainTemplate from "../Template/MainTemplate"
import ArticleWithDecoration from "../components/ArticleWithDecoration/ArticleWithDecoration"
import Seo from "../components/SEO"

export default function Home() {
  const onPage = "404"
  return (
    <MainTemplate onPage={onPage}>
      <Seo />
      <ArticleWithDecoration></ArticleWithDecoration>
    </MainTemplate>
  )
}
