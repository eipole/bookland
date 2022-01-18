import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --ff-primary: "Source Sans Pro", sans-serif;
  --ff-secondary: "Source Code Pro", monospace;
  --fw-reg: 300;
  --fw-bold: 900;
  --clr-light: #fff;
  --clr-dark: #303030;
  --clr-accent: #16e0bd;

  --fs-h1: 3rem;
  --fs-h2: 2.25rem;
  --fs-h3: 1.25rem;
  --fs-body: 1rem;

  --bs: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),
    0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);
    /* --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --green: #bade66; */
  }
  html {
     /* background-attachment: fixed; */
    font-size: 16px;
  }

  body {
  max-width: 60%;
  background: var(--clr-light);
  color: var(--clr-dark);
  margin: 0 auto;
  padding: 0;
  font-family: var(--ff-primary);
  font-size: var(--fs-body);
  line-height: 1.6;
  border: 1px solid blue;
   }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--clr-accent);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

 
 

  hr {
    border: 0;
    height: 8px;
     background-size: 1500px;
  }

  img {
    /* max-width: 100%; */
    width: 200px;
  height: 200px;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  .pagewrap{
    margin: 1rem;
  }
.pagewrap + h1{
  text-align: center;
}
`

export default GlobalStyles
