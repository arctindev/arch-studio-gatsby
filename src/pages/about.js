import React from "react"
import AboutUsArticle from "../components/AboutUsArticle/AboutUsArticle"
import AboutUsHero from "../components/AboutUsHero/AboutUsHero"
import MainTemplate from "../Template/MainTemplate"
import AboutUsLeaders from "../components/AboutUsLeaders/AboutUsLeaders"

export default function about() {
  return (
    <MainTemplate>
      <AboutUsHero />
      <AboutUsArticle />
      <AboutUsLeaders />
    </MainTemplate>
  )
}
