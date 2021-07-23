import { createGlobalStyle } from "styled-components"
import "@fontsource/spartan/500.css"
import "@fontsource/spartan/700.css"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: 15px;
  }
  body {
    font-family: "spartan";
    font-weight: 500;
  }
  a, button, input, div {
      -webkit-tap-highlight-color: transparent;
  }
  li {
      list-style: none;
  }
`

export default GlobalStyle
