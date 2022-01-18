import React from "react"
import GlobalStyles from "../GlobalStyles"
import "normalize.css"
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
