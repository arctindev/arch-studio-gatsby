import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(metadataQuery)

  const { defaultTitle, defaultDescription, titleTemplate, siteUrl, image } =
    site.siteMetadata

  const seo = {
    title: title ? title : defaultTitle,
    description: description ? description : defaultDescription,
    image: `${image}`,
    url: `${siteUrl}${pathname}`,
  }
  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${seo.image}`} />
      <meta name="url" content={`${seo.url}`} />
    </Helmet>
  )
}

export default SEO

const metadataQuery = graphql`
  query MyQuery {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        image
        titleTemplate
        siteUrl: url
      }
    }
  }
`
