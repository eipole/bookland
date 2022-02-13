import React, { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { fetchAll } from "../utils/api-client"
import { useQuery } from "react-query"
import styled from "styled-components"
import orav from "../images/orav.jpg"
import { PageWrapper } from "../styles/Styles"
import Modal from "../components/Modal"
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
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* h1 {
    display: block;
  } */
  h1 {
    flex: 0 0 100%;
    text-align: center;
  }
  gap: 2em;
  & div {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
  }
`

// const WrapperDiv = styled("div")`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 2rem;
// `

export default function AllBooks() {
  const [vise, setVise] = useState(false)
  const { data, isLoading, error, isSuccess } = useQuery("FetchBooks", fetchAll)
  if (isLoading) return "Loading....."
  if (error) console.error("viga siga" + error)

  function toggleModal() {
    setVise((prev) => !prev)
  }
  return (
    <>
      <PageWrapper>
        <h1>All books here</h1>
        <Container>
          {isSuccess &&
            data.map((elem) => (
              <BookDiv key={elem._id}>
                <img alt="orav" src={orav} />
                <h2>{elem.title}</h2>
                <Link onClick={toggleModal} to={`/allbooks/${elem._id}`}>
                  Show details
                </Link>
                <hr></hr>
              </BookDiv>
            ))}
        </Container>
        <Modal vise={vise} toggleModal={toggleModal}>
          <Outlet />
        </Modal>
      </PageWrapper>
    </>
  )
}
