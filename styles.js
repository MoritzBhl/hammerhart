import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Saira;
    background: rgb(44, 150, 164);
    background-attachment: fixed;
    background-color: #584849;
  }

  h1, h2, h3, h4, h5, h6, p, ul, ol {
    margin: 0;
    padding: 0;
    max-width: 100%;
    word-break: break-all;
  }
`;
