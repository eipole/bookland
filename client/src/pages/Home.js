import React from "react"
import styled from "styled-components"
import { PageWrapper } from "../styles/Styles"

const StyledHomepage = styled.div`
  gap: 2rem;
  background-color: seashell;
  @media screen and (min-width: 1200px) {
    display: flex;
    /* flex-wrap: wrap; */
    & > * {
      /* flex-grow: 1; */
      /* flex-shrink: 1; */
      flex: 1;
    }
  }
`

export default function Home() {
  return (
    <PageWrapper>
      <h1>Homepage</h1>

      <StyledHomepage>
        <p>
          Nisi minim labore pariatur consectetur nisi ullamco consectetur
          deserunt occaecat. Qui quis eiusmod quis id ex veniam ad voluptate
          culpa dolor. Irure mollit ullamco minim aliquip occaecat eiusmod esse
          non dolor nulla. Dolor do ullamco exercitation ipsum esse id anim.
        </p>
        <p>
          Nisi minim labore pariatur consectetur nisi ullamco consectetur
          deserunt occaecat. Qui quis eiusmod quis id ex veniam ad voluptate
          culpa dolor. Irure mollit ullamco minim aliquip occaecat eiusmod esse
          non dolor nulla. Dolor do ullamco exercitation ipsum esse id anim.
        </p>
        <p>
          Nisi minim labore pariatur consectetur nisi ullamco consectetur
          deserunt occaecat. Qui quis eiusmod quis id ex veniam ad voluptate
          culpa dolor. Irure mollit ullamco minim aliquip occaecat eiusmod esse
          non dolor nulla. Dolor do ullamco exercitation ipsum esse id anim.
        </p>
        <p>
          Nisi minim labore pariatur consectetur nisi ullamco consectetur
          deserunt occaecat. Qui quis eiusmod quis id ex veniam ad voluptate
          culpa dolor. Irure mollit ullamco minim aliquip occaecat eiusmod esse
          non dolor nulla. Dolor do ullamco exercitation ipsum esse id anim.
          Nisi minim labore pariatur consectetur nisi ullamco consectetur
          deserunt occaecat. Qui quis eiusmod quis id ex veniam ad voluptate
          culpa dolor. Irure mollit ullamco minim aliquip occaecat eiusmod esse
          non dolor nulla. Dolor do ullamco exercitation ipsum esse id anim.
        </p>
      </StyledHomepage>
    </PageWrapper>
  )
}
