import React, { useContext } from "react"
import { StyledWrapper } from "./ArticleWithDecoration.styles"
import { ViewportContext } from "../../Providers/viewportManagment"

export default function ArticleWithDecoration({ children }) {
  const { width } = useContext(ViewportContext)
  return <StyledWrapper width={width}>{children}</StyledWrapper>
}
