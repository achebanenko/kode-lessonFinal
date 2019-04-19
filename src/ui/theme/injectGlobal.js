import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial;
    font-weight: normal;
    color: ${props => props.theme.pallete.mainBlack};
  }

`
