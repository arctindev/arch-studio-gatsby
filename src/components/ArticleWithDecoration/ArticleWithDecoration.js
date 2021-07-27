import React from "react"
import { StyledWrapper} from './ArticleWithDecoration.styles'


export default function ArticleWithDecoration({ children }) {
  return (
    <StyledWrapper>
        {children}
    </StyledWrapper>
  )
}
