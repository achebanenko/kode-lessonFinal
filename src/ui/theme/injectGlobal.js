import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial;
    font-size: 16px;
    font-weight: normal;
    color: ${props => props.theme.pallete.mainBlack};
    line-height: 24px;
  }
  a {
    color: ${props => props.theme.pallete.mainBlue};
    text-decoration: none;
  }
`
