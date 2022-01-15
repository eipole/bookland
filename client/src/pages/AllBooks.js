import React from "react"
import { Link } from "react-router-dom"
import { fetchAll } from "../utils/api-client"
import { useQuery } from "react-query"
import styled from "styled-components"
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
  console.log(data)
  return (
    <WrapperDiv>
      <p>All books here</p>
      {data &&
        data.map((elem) => (
          <BookDiv key={elem.id}>
            <h1>{elem.title}</h1>
            <p>Kirjanik:</p>
            <h2>{elem.first_name}</h2>
            <h2>{elem.last_name}</h2>
            <hr></hr>
          </BookDiv>
        ))}
      <Link to="/">Home</Link>
    </WrapperDiv>
  )
}
