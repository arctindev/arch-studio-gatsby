import React from "react"
import Header from "../components/Header/Header"
import GlobalStyle from "../global/styles/GlobalStyles"
import Hero from "../components/Hero/Hero"
import LandingArticle from "../components/LandingArticle/LandingArticle"
import LandingAboutUs from "../components/LandingAboutUs/LandingAboutUs"
import LandingFeatured from "../components/LandingFeatured/LandingFeatured"
import Footer from "../components/Footer/Footer"
import { ThemeProvider } from 'styled-components';
import { dayTheme } from "../global/themes/themes"

export default function Home() {
  return (
    <div>
      <ThemeProvider theme={dayTheme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <LandingArticle />
      <LandingAboutUs />
      <LandingFeatured />
      <Footer />
      </ThemeProvider>
    </div>
  )
}
