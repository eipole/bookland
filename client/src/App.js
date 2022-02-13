import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import GlobalStyles from "./styles/GlobalStyles"
import "normalize.css"
function App() {
  return (
    <div>
      <Header />
      <GlobalStyles />
      <Outlet />
    </div>
  )
}

export default App
