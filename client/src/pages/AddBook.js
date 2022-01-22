import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useMutation } from "react-query"
import { addOne } from "../utils/api-client"
import { queryClient } from "../AppProviders"
import styled from "styled-components"
import { PageWrapper } from "../styles/Styles"
const StyledAdd = styled(PageWrapper)`
  color: blueviolet;
  div {
    display: flex;
    flex-direction: row;
    border: 2px solid red;
    justify-content: space-between;
    align-content: space-between;
  }
  input,
  textarea {
    margin-top: 1em;
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
    <StyledAdd>
      <h1>Add new book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            onChange={handleChange}
            value={book.title}
            type="text"
            name="title"
            placeholder="book title"
          />
        </div>
        <div>
          <label>
            Author:
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
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              rows="5"
              cols="33"
              // id="description"
              onChange={handleChange}
              value={book.description}
              type="text"
              name="description"
              placeholder="Midagi raamatust..."
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </StyledAdd>
  )
}
// added form
