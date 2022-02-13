import React from "react"
import styled from "styled-components"
import reactDom from "react-dom"

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
`
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`

export default function Modal({ vise, children, toggleModal }) {
  //   if (!vise) return null
  // console.log(window.location.pathname)

  return reactDom.createPortal(
    <>
      {vise && <StyledOverlay />}
      {vise && (
        <StyledModal>
          {children}
          <button onClick={toggleModal}>Close</button>
        </StyledModal>
      )}
    </>,
    document.getElementById("portal")
  )
}
