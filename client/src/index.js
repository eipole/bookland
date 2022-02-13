import React from "react"
import ReactDOM from "react-dom"
import AllRoutes from "./AllRoutes"
// import App from "./App"
import AppProviders from "./AppProviders"

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      {/* <App /> */}
      <AllRoutes />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
)
