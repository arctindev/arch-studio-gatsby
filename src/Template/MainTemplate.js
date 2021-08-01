import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { ThemeProvider } from "styled-components"
import { dayTheme } from "../global/themes/themes"
import GlobalStyle from "../global/styles/GlobalStyles"
import ViewportProvider from "../Providers/viewportManagment"
import PageChecker from "../components/PageChecker/PageChecker"

export default function MainTemplate({ onPage, children }) {
  return (
    <ThemeProvider theme={dayTheme}>
      <ViewportProvider>
        <GlobalStyle />
        <PageChecker onPage={onPage} />
        <Header onPage={onPage} />
        {children}
        <Footer onPage={onPage} />
      </ViewportProvider>
    </ThemeProvider>
  )
}
