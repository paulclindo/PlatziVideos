import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body { 
    margin: 0;
    padding: 0;
    font-family: 'Muli', sans-serif;
    background: #8f57fd;
  }
`;

export default GlobalStyle;
