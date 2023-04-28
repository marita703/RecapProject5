import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding-top: 80px;
    padding-bottom: 100px;
    background-color: whitesmoke;
   
  }

  img {
    object-fit: cover;
    max-width: 800px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: hotpink;
    font-weight: bold;
  }

`;
