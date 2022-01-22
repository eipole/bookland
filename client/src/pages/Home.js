import React from "react"
import styled from "styled-components"
import { PageWrapper } from "../styles/Styles"

const StyledHomepage = styled(PageWrapper)`
  background-color: seashell;
  hr {
    height: 3rem;
    color: sandybrown;
  }
`

export default function Home() {
  return (
    <StyledHomepage>
      <h1>Homepage</h1>
      <p>
        Nisi minim labore pariatur consectetur nisi ullamco consectetur deserunt
        occaecat. Qui quis eiusmod quis id ex veniam ad voluptate culpa dolor.
        Irure mollit ullamco minim aliquip occaecat eiusmod esse non dolor
        nulla. Dolor do ullamco exercitation ipsum esse id anim.
      </p>
      <hr></hr>
      <p>
        Nisi minim labore pariatur consectetur nisi ullamco consectetur deserunt
        occaecat. Qui quis eiusmod quis id ex veniam ad voluptate culpa dolor.
        Irure mollit ullamco minim aliquip occaecat eiusmod esse non dolor
        nulla. Dolor do ullamco exercitation ipsum esse id anim.
      </p>
      <p>
        Nisi minim labore pariatur consectetur nisi ullamco consectetur deserunt
        occaecat. Qui quis eiusmod quis id ex veniam ad voluptate culpa dolor.
        Irure mollit ullamco minim aliquip occaecat eiusmod esse non dolor
        nulla. Dolor do ullamco exercitation ipsum esse id anim.
      </p>
    </StyledHomepage>
  )
}
