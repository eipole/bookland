import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useMutation } from "react-query"
import { addOne } from "../utils/api-client"
import { queryClient } from "../AppProviders"
import styled from "styled-components"
const StyledDiv = styled.div`
  color: blueviolet;
`
const StyledForm = styled.form`
  input {
    margin-top: 1rem;
  }
`

export default function AddBook() {
  const mutation = useMutation(addOne, {
    onSuccess: () => {
      queryClient.invalidateQueries("FetchBooks")
    },
  })
  const [book, setBook] = useState({
    title: "",
    first_name: "",
    last_name: "",
    description: "",
    completed: false,
  })
  function resetForm() {
    setBook({
      title: "",
      first_name: "",
      last_name: "",
      description: "",
      completed: false,
    })
  }
  function handleChange(event) {
    // console.log(event)
    const { name, value } = event.target
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    await addOne(book)
    resetForm()
  }

  return (
    <StyledDiv className="pagewrap">
      <h1>Add new book</h1>
      <StyledForm onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={book.title}
          type="text"
          name="title"
          placeholder="book title"
        />
        <input
          onChange={handleChange}
          value={book.first_name}
          type="text"
          name="first_name"
          placeholder="first name"
        />
        <input
          onChange={handleChange}
          value={book.last_name}
          type="text"
          name="last_name"
          placeholder="last name"
        />
        <input
          onChange={handleChange}
          value={book.description}
          type="text"
          name="description"
          placeholder="Midagi raamatust..."
        />

        <button type="submit">Submit</button>
      </StyledForm>
      <Link to="/">Home</Link>
    </StyledDiv>
  )
}
