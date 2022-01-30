import React from "react"
import { Link } from "react-router-dom"
import { fetchAll } from "../utils/api-client"
import { useQuery } from "react-query"
import styled from "styled-components"
import orav from "../images/orav.jpg"
import { PageWrapper } from "../styles/Styles"
const BookDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  & h2 {
    max-width: 20ch;
  }
  & > * {
  }
`
const WrapperDiv = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`

export default function AllBooks() {
  const { data, isLoading, error, isSuccess, isFetching, isRefetching } =
    useQuery("FetchBooks", fetchAll)
  if (isLoading) return "Loading....."
  if (error) console.error("viga siga" + error)
  // if (isFetching) console.log("toodab1")
  // if (isRefetching) console.log("toodab2")
  // console.log(data)
  return (
    <>
      <PageWrapper>
        <h1>All books here</h1>
        <WrapperDiv>
          {isSuccess &&
            data.map((elem) => (
              <BookDiv key={elem._id}>
                <img alt="orav" src={orav} />
                <h2>{elem.title}</h2>
                <Link to={`/onebook/${elem._id}`}>Show details</Link>
                <hr></hr>
              </BookDiv>
            ))}
        </WrapperDiv>
      </PageWrapper>
    </>
  )
}
