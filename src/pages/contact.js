import React from "react"
import MainTemplate from "../Template/MainTemplate"
import ContactHero from "../components/ContactHero/ContactHero"
import ContactDetails from "../components/ContactDetails/ContactDetails"
import ContactMap from "../components/ContactMap/ContactMap"
import ContactForm from "../components/ContactForm/ContactForm"
import Seo from "../components/SEO"

export default function about() {
  const onPage = "contact"
  return (
    <MainTemplate onPage={onPage}>
      <Seo title={onPage.toUpperCase()} description="This is Contact Page" />
      <ContactHero />
      <ContactDetails />
      <ContactMap />
      <ContactForm />
    </MainTemplate>
  )
}
