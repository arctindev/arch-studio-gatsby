import React from "react"
import Header from "../components/Header/Header"
import GlobalStyle from "../global/styles/GlobalStyles"
import Hero from "../components/Hero/Hero"

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      {/* Header and Nav*/}
      <Header />
      {/*Hero image*/}
      <Hero />
    </div>
  )
}
