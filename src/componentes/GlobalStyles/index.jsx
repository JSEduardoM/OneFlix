import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
    font-family: 'GandhiSansRegular', sans-serif;
    background: linear-gradient(45deg, #3fccfb, #a746fc);
    color: #333;
  }

  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2.5em;
    margin: 0.5em 0;
    text-align: center;
    color: #4a4a4a;
  }

  h2, h3, h4, h5, h6 {
    margin: 0.5em 0;
    color: #555;
  }

  p {
    font-size: 1em;
    margin: 0.5em 0;
    line-height: 1.6;
    color: #666;
  }

  a {
    color: #0066cc;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    background: #3fccfb;
    color: white;
    padding: 0.5em 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background: #2a9fd8;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input, textarea {
    font-family: inherit;
    font-size: 1em;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
  }

  input:focus, textarea:focus {
    border-color: #3fccfb;
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #3fccfb;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #2a9fd8;
  }
`;

export default GlobalStyles;
