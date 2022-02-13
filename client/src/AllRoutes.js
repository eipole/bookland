import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import App from "./App"
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
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="allbooks/" element={<AllBooks />}>
          <Route path=":id" element={<OneBook />} />
        </Route>
        <Route path="addbook/" element={<AddBook />} />
        {/* <Route path="editbook/" element={<EditBook />} /> */}
        <Route path="*" element={<TestPage />} />
      </Route>
    </Routes>
  )
}

// {state?.backgroundLocation && (
//   <Routes>
//     <Route path="/img/:id" element={<Modal />} />
//   </Routes>
// )}
//<Routes location={state?.backgroundLocation || location}>
