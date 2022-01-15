import React from "react"
import { Routes, Route } from "react-router-dom"
import AllBooks from "./pages/AllBooks"
import Home from "./pages/Home"
import OneBook from "./pages/OneBook"

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="allbooks/" element={<AllBooks />} />
      <Route path="onebook/" element={<OneBook />} />
    </Routes>
  )
}
