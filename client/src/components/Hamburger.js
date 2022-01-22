import React from "react"
import styled from "styled-components"

const StyledLabel = styled.label`
  padding: 2em;
  position: fixed;
  cursor: pointer;
  z-index: 1000;
`
const StyledInput = styled.input`
  display: none;
  margin: 0;
  padding: 0;
  position: fixed;
`
const StyledLinje = styled.div`
  width: 3em;
  height: 2px;
  background: red;
  border-radius: 1em;
  transform: ${({ drawer }) => !drawer && "rotate(-45deg) translateX(-6px)"};

  & + div {
    background-color: blue;
    margin-top: 0.4em;
    transform: ${({ drawer }) =>
      !drawer && "rotate(0.625turn) translateX(6px)"};
  }
`

function Hamburger({ drawer, setDrawer }) {
  function toggleDrawer() {
    setDrawer((prev) => !prev)
  }
  return (
    <StyledLabel>
      <StyledInput onClick={toggleDrawer} type={"checkbox"} />
      <StyledLinje drawer={drawer}></StyledLinje>
      <StyledLinje drawer={drawer}></StyledLinje>
    </StyledLabel>
  )
}

export default Hamburger
