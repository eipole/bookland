import React, { useState } from "react"
import { useMutation } from "react-query"
import { addOne } from "../utils/api-client"
import { queryClient } from "../AppProviders"
import styled from "styled-components"
import { isTextValid } from "../functions/validate"
import { useNavigate } from "react-router-dom"
const StyledAdd = styled.div`
  display: flex;
  justify-content: center;
  label {
    display: flex;
    flex-direction: column;
  }
  fieldset {
    border-width: 1px;
    border-color: var(--clr-grey);
    margin-top: 2em;
  }
  input,
  textarea {
    border: 0;
    border-bottom: 2px solid var(--clr-dark);
    margin-top: 1em;
    padding-top: 1em;
    box-shadow: var(--bs);
  }
  button {
    margin-top: 2em;
    &:hover {
      background-color: var(--clr-red);
    }
  }
`

export default function AddBook() {
  const navigate = useNavigate()
  const { mutate } = useMutation(addOne, {
    onSuccess: () => {
      queryClient.invalidateQueries("FetchBooks")
      navigate("/allbooks")
    },
  })

  const [book, setBook] = useState({
    title: "",
    first_name: "",
    last_name: "",
    description: "",
    completed: false,
  })
  console.log(book.completed)

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
    const { name, value, type, checked } = event.target
    console.log(event.target)
    const asi = type === "checkbox" ? checked : value
    setBook((prev) => ({
      ...prev,
      [name]: asi,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    mutate(book)
    resetForm()
  }

  return (
    <StyledAdd>
      <div>
        <h1>Add new book</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>About the book</legend>
            <label>
              <span>Title</span>
              <input
                onChange={handleChange}
                value={book.title}
                type="text"
                name="title"
                placeholder="book title"
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Author</legend>
            <label>
              <span>First name</span>
              <input
                onChange={handleChange}
                value={book.first_name}
                type="text"
                name="first_name"
                placeholder="first name"
              />
            </label>
            <label>
              <span>Last name</span>
              <input
                onChange={handleChange}
                value={book.last_name}
                type="text"
                name="last_name"
                placeholder="last name"
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Have you read it?</legend>
            <input
              onChange={handleChange}
              type="checkbox"
              value={book.completed}
              name="completed"
              placeholder="Readed?"
            />
          </fieldset>
          {book.completed && (
            <fieldset>
              <legend>Write about the book</legend>
              <label>
                <span>Description:</span>
                <textarea
                  rows="5"
                  cols="33"
                  onChange={handleChange}
                  value={book.description}
                  type="text"
                  name="description"
                  placeholder="Midagi raamatust..."
                />
              </label>
            </fieldset>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </StyledAdd>
  )
}
