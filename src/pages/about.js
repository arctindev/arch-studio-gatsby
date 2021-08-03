import React from "react"
import AboutUsArticle from "../components/AboutUsArticle/AboutUsArticle"
import AboutUsHero from "../components/AboutUsHero/AboutUsHero"
import MainTemplate from "../Template/MainTemplate"
import AboutUsLeaders from "../components/AboutUsLeaders/AboutUsLeaders"
import Seo from "../components/SEO"

export default function about() {
  const onPage = "about us"
  return (
    <MainTemplate onPage={onPage}>
      <Seo title={onPage.toUpperCase()} description="This is About Page" />
      <AboutUsHero />
      <AboutUsArticle />
      <AboutUsLeaders />
    </MainTemplate>
  )
}
