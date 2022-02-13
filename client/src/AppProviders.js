import React from "react"
// import "./mainstyles.css"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { BrowserRouter as Router } from "react-router-dom"
// import Layout from "./unused/Layout"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        if (error.status === 404) return false
        else if (failureCount < 2) return true
        else return false
      },
    },
  },
})

export default function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* <Layout>{children}</Layout> */}
        {children}
        <ReactQueryDevtools />
      </Router>
    </QueryClientProvider>
  )
}
