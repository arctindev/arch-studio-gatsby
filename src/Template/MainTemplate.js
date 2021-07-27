import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { ThemeProvider } from "styled-components"
import { dayTheme } from "../global/themes/themes"
import GlobalStyle from "../global/styles/GlobalStyles"
import { ViewportProvider } from "../Hooks/viewport"

export default function MainTemplate({ children }) {
  return (
    <ThemeProvider theme={dayTheme}>
      <ViewportProvider>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </ViewportProvider>
    </ThemeProvider>
  )
}
