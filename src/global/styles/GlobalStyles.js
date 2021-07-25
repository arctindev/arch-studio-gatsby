import { createGlobalStyle } from "styled-components"
import "@fontsource/spartan/500.css"
import "@fontsource/spartan/700.css"
import "@fontsource/spartan/400.css"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  body {
    font-family: "spartan";
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.bodyBG};
  }
  a, button, input, div {
      -webkit-tap-highlight-color: transparent;
  }
  li {
      list-style: none;
  }
  div , a , button , input , p , li , ul, main, article {
    font-size: 15px;
  }
`

export default GlobalStyle
