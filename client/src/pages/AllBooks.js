import React from "react"
import { Link } from "react-router-dom"
import { fetchAll } from "../utils/api-client"
import { useQuery } from "react-query"
import styled from "styled-components"
import orav from "../images/orav.jpg"
const BookDiv = styled("div")`
  background-color: papayawhip;
`
const WrapperDiv = styled("div")`
  padding: 2rem;
  & ${BookDiv} + ${BookDiv} {
    color: red;
    padding-top: 10rem;
  }
`

export default function AllBooks() {
  const { data, isLoading, error, isSuccess } = useQuery("FetchBooks", fetchAll)
  if (isLoading) return "Loading....."
  if (error) console.error("viga siga" + error)
  // console.log(data)
  return (
    <WrapperDiv>
      <h1>All books here</h1>
      {isSuccess &&
        data.map((elem) => (
          <BookDiv key={elem._id}>
            <img alt="orav" src={orav} />
            <h2>{elem.title}</h2>
            <Link to={`/onebook/${elem._id}`}>Show details</Link>
            <hr></hr>
          </BookDiv>
        ))}
      <Link to="/">Home</Link>
      <Link to="/addbook">TestPage</Link>
    </WrapperDiv>
  )
}
