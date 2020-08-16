import { createGlobalStyle } from 'styled-components';
import myFont from './VeganStyle.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Major Mono Display';
        src: url(${myFont}) format('truetype');
      }
      h1 {
        font-family: 'Major Mono Display';
        font-size: 35px;
      }
`;