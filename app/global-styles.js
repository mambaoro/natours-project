/* eslint-disable prettier/prettier */
import { createGlobalStyle, css } from 'styled-components';
import { respond } from './components/media_queries/index';

const colorGreyDark = `#777`;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 62.5%;
    ${respond('big-desktop', css`font-size: 75%;`)}
    ${respond('tab-land', css`font-size: 56.25%;`)}
    ${respond('tab-port', css`font-size: 50%;`)}

  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    padding: 3rem;
    ${respond('tab-port', `padding: 0;`)}
    font-family: Lato, sans-serif;
    font-weight: 400;
    color: ${colorGreyDark};
    box-sizing: border-box;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 2.4em;
  }

  ::selection {
    background-color: rgb(126, 213, 111);
    color: #fff;
  }
`;

export default GlobalStyle;
