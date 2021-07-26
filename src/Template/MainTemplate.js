import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { ThemeProvider } from "styled-components"
import { dayTheme } from "../global/themes/themes"
import GlobalStyle from "../global/styles/GlobalStyles"

export default function MainTemplate({ children }) {
  return (
    <ThemeProvider theme={dayTheme}>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}
