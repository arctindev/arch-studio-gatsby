import React, { useContext } from "react"
import { StyledWhitespace } from "./Whitespace.styles"
import { ViewportContext } from "../../Providers/viewportManagment"

export default function Whitespace() {
  const { height } = useContext(ViewportContext)
  if (height > 720) {
    return <StyledWhitespace />
  } else {
    return null
  }
}
