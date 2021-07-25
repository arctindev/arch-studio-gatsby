import React from "react"
import MainTemplate from "../Template/MainTemplate"
import Hero from "../components/Hero/Hero"
import LandingArticle from "../components/LandingArticle/LandingArticle"
import LandingAboutUs from "../components/LandingAboutUs/LandingAboutUs"
import LandingFeatured from "../components/LandingFeatured/LandingFeatured"

export default function Home() {
  return (
    <MainTemplate>
      <Hero />
      <LandingArticle />
      <LandingAboutUs />
      <LandingFeatured />
    </MainTemplate>
  )
}
