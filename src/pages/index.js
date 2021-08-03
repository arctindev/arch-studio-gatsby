import React from "react"
import MainTemplate from "../Template/MainTemplate"
import Hero from "../components/Hero/Hero"
import LandingArticle from "../components/LandingArticle/LandingArticle"
import LandingAboutUs from "../components/LandingAboutUs/LandingAboutUs"
import LandingFeatured from "../components/LandingFeatured/LandingFeatured"
import Seo from "../components/SEO"

export default function Home() {
  const onPage = "home"
  return (
    <MainTemplate onPage={onPage}>
      <Seo title={onPage.toUpperCase()} description="This is Home Page" />
      <Hero />
      <LandingArticle />
      <LandingAboutUs />
      <LandingFeatured />
    </MainTemplate>
  )
}
