import { createGlobalStyle } from "styled-components";
import { Grandstander } from "next/font/google";

const grandstander = Grandstander({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }


  body {
    padding-top: 80px;
    background: rgb(44, 150, 164);
    background-color: #584849;
    font-family: ${grandstander.style.fontFamily};
  }


  h1, h2, h3, h4, h5, h6, p, ul, ol, input {
    margin: 0;
    padding: 0;
    max-width: 100%;
    word-break: break-word;
    line-height: 1.4rem;
  }
`;
