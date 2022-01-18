import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledHomepage = styled.div`
  color: violet;
  background-color: aliceblue;
  a + a {
    padding-left: 2rem;
    color: red;
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
      <nav>
        <Link to="allbooks">All books</Link>
        <Link to="addbook">AddBook</Link>
      </nav>
    </StyledHomepage>
  )
}
