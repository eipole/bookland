import React from "react"
import GlobalStyles from "../styles/GlobalStyles"
import Header from "./Header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <GlobalStyles />
      {children}
    </>
  )
}
