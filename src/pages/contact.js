import React from "react"
import MainTemplate from "../Template/MainTemplate"
import ContactHero from "../components/ContactHero/ContactHero"
import ContactDetails from "../components/ContactDetails/ContactDetails"
import ContactMap from "../components/ContactMap/ContactMap"
import ContactForm from "../components/ContactForm/ContactForm"

export default function about() {
  const onPage = "contact"
  return (
    <MainTemplate onPage={onPage}>
      <ContactHero />
      <ContactDetails />
      <ContactMap />
      <ContactForm />
    </MainTemplate>
  )
}
