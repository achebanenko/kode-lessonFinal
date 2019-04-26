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
    .muted {
      color: ${props => props.theme.pallete.mainGray};
    }
    .text-center {
      text-align: center;
    }
  }
  a {
    color: ${props => props.theme.pallete.mainBlue};
    text-decoration: none;
  }
  
  .layout-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width:100%;
  }

  .route-slide-enter {
    transform: translateX(100%);
  }
  
  .route-slide-enter-active {
    transform: translateX(0);
    transition: transform 300ms;
  }
  
  .route-slide-exit {
    transform: translateX(0);
    transition: transform 200ms;
  }
  
  .route-slide-exit-active {
    transform: translateX(-100%);
  }
`
