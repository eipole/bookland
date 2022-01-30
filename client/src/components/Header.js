import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import Hamburger from "./Hamburger"

const StyledNav = styled.nav`
  position: fixed;
  background: var(--clr-green);
  color: var(--clr-light);
  opacity: 0.8;
  top: 0;
  bottom: 20em;
  left: 0;
  right: 0;
  z-index: 100;
  transform: ${(props) =>
    props.drawer ? "translateX(100%)" : "transform: translateX(0)"};
  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1);
`

const WrapperDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  padding-bottom: 2em;
  padding-top: 4em;
  width: 100%;
  text-align: center;
  background-color: var(--clr-accent);
`

const StyledLink = styled(Link)`
  color: var(--clr-dark);
  font-weight: var(--fw-bold);
  font-size: var(--fs-h2);
  text-decoration: none;
  &:hover {
    color: red;
  }
`
const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
`

export default function Header() {
  const [drawer, setDrawer] = useState(true)

  return (
    <>
      <Hamburger drawer={drawer} setDrawer={setDrawer} />
      <WrapperDiv>
        <div>
          <h1>Siin on raamatud</h1>
          <p>༻﹡﹡﹡﹡﹡﹡﹡༺</p>
        </div>
        <StyledNav onClick={(e) => setDrawer(true)} drawer={drawer}>
          <StyledUl>
            <li>
              <StyledLink to="/allbooks">All books</StyledLink>
            </li>
            <li>
              <StyledLink to="/addbook">Add book</StyledLink>
            </li>
            {/* <li>
              <StyledLink to="/addbookmutation">AddBookMutation</StyledLink>
            </li> */}
            {/* <li>
              <StyledLink to="/onebook/:id">showbook</StyledLink>
            </li> */}
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
          </StyledUl>
        </StyledNav>
      </WrapperDiv>
    </>
  )
}
