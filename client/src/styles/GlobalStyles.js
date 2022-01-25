import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  /* box-sizing: border-box; */
  box-sizing: inherit;
}

  :root {
  --ff-primary: "Source Sans Pro", sans-serif;
  --ff-secondary: "Source Code Pro", monospace;
  --fw-reg: 300;
  --fw-bold: 900;
  --clr-light: #fff;
  --clr-dark: #303030;
  --clr-accent: #16e0bd;
  --clr-red: #FF4949;
  --clr-yellow: #ffc600;
  --clr-grey: #efefef;
  --clr-green: #bade66; 

  --fs-h1: 3rem;
  --fs-h2: 2.25rem;
  --fs-h3: 1.25rem;
  --fs-body: 2rem;

  --bs: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),
   0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);

  }
  html {
      /* background-attachment: fixed;   */
    font-size: 10px;
  }

  body {
  /* max-width: 60%; */
  box-sizing: border-box;
  background: var(--clr-light);
  color: var(--clr-dark);
  /* margin: 0 auto; */
  padding: 0;
  font-family: var(--ff-primary);
  font-size: var(--fs-body);
  line-height: 1.6;
    }

 

  button {
    background: var(--clr-accent);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
     &:hover {
      text-shadow: 4px;
    }
  }

 
 

  /* hr {
    border: 0;
    height: 8px;
     background-size: 1500px;
  } */

  img {
    /* max-width: 100%; */
    width: 200px;
  height: 200px;
  }

  /* .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  } */
 
`

export default GlobalStyles
