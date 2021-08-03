import React from "react"
import MainTemplate from "../Template/MainTemplate"
import PortfolioGallery from "../components/PortfolioGallery/PortfolioGallery"
import Seo from "../components/SEO"

export default function portfolio() {
  const onPage = "portfolio"
  return (
    <MainTemplate onPage={onPage}>
      <Seo title={onPage.toUpperCase()} description="This is Portfolio Page" />
      <PortfolioGallery />
    </MainTemplate>
  )
}
