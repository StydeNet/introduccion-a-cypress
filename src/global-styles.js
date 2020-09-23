import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle(
  ({ theme }) => `
    @keyframes appearsFromTop {
      from {transform: translateY(-1rem);}
      to {transform: translateY(0);}
    }

    @keyframes appearsFromLeft {
      from {transform: translateX(-1rem);}
      to {transform: translateX(0);}
    }    

    *, 
    *:after, 
    *:before {
      box-sizing: inherit;
    }

    html,
    button {
      font-family: '${theme.fontFamily}', sans-serif;
    }

    html {
      background-color: ${theme.bg};
      box-sizing: border-box;
      font-size: 10px;
    }

    body,
    button {
      font-size: ${theme.fontSize.normal};
      
      @media (max-width: ${theme.size.medium}) {
        font-size: ${theme.fontSize.small};
      }
    }

    body {
      color: ${theme.text};
      line-height: ${theme.fontHeight};
      margin: 0;
    }

    button {
      cursor: pointer;
    }

    h1 {
      margin: 1rem 0;
    }
  `
);

export default GlobalStyles;
