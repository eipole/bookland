import React from "react"
import { Routes, Route } from "react-router-dom"
import App from "./App"
import AddBook from "./pages/AddBook"
import AllBooks from "./pages/AllBooks"
import Home from "./pages/Home"
import OneBook from "./pages/OneBook"
import TestPage from "./pages/TestPage"

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="allbooks/" element={<AllBooks />}>
          <Route path=":id" element={<OneBook />} />
        </Route>
        <Route path="addbook/" element={<AddBook />} />
        <Route path="*" element={<TestPage />} />
      </Route>
    </Routes>
  )
}
