import React from "react"
import GlobalStyles from "../styles/GlobalStyles"
// import Header from "./Header"
// import "normalize.css"
export default function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <GlobalStyles />
      {children}
    </>
  )
}
