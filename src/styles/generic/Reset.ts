import styled, { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  h1,h2,h3,h4,h5,h6,p,img,span, button{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background-color: black;
  }

  button {
    cursor: pointer;

  }

  a {
    color: inherit;
    text-decoration: none;
  }


`;

export const Container = styled.main`
  width: 100vw;
  display: flex;

  color: white;
`;
