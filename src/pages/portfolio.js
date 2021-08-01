import React from "react"
import MainTemplate from "../Template/MainTemplate"
import PortfolioGallery from "../components/PortfolioGallery/PortfolioGallery"

export default function portfolio() {
  const onPage = "portfolio"
  return (
    <MainTemplate onPage={onPage}>
      <PortfolioGallery />
    </MainTemplate>
  )
}
