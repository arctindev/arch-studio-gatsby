import React from "react"
import { StyledSpan } from "./PageChecker.styles"

export default function PageChecker({ onPage }) {
  return <StyledSpan>{onPage}</StyledSpan>
}
