import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import AddBook from "./pages/AddBook"
import AllBooks from "./pages/AllBooks"
// import EditBook from "./pages/EditBook"
import Home from "./pages/Home"
import OneBook from "./pages/OneBook"
import TestPage from "./pages/TestPage"

export default function AllRoutes() {
  // let location = useLocation()
  // let state = location.state as {backgroundLocation?: Location}
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="allbooks/" element={<AllBooks />} />
      <Route path="onebook/:id" element={<OneBook />} />
      <Route path="addbook/" element={<AddBook />} />
      {/* <Route path="editbook/" element={<EditBook />} /> */}
      <Route path="testpage/" element={<TestPage />} />
    </Routes>
  )
}

// {state?.backgroundLocation && (
//   <Routes>
//     <Route path="/img/:id" element={<Modal />} />
//   </Routes>
// )}
//<Routes location={state?.backgroundLocation || location}>
