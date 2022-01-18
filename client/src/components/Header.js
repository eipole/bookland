import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderStyles = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  background-color: #76cc94;
  a {
    color: purple;
  }
  a + a {
    padding-left: 2rem;
  }
  div {
    color: whitesmoke;
    padding-bottom: 2rem;
  }
`

export default function Header() {
  return (
    <HeaderStyles>
      <p>Siin on raamatud</p>
      <div>༻﹡﹡﹡﹡﹡﹡﹡༺</div>
      <Link to="/allbooks">All books</Link>
      <Link to="/addbook">AddBook</Link>
      <Link to="/">Home</Link>
    </HeaderStyles>
  )
}
