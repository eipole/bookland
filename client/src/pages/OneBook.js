import React from "react"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { fetchOne } from "../utils/api-client"

export default function OneBook() {
  const id = useParams()
  const navigate = useNavigate()

  const { isSuccess, isLoading, data, error } = useQuery(
    ["SelectOne", id],
    () => fetchOne(id)
  )
  console.log(data)
  if (isLoading) return "Loading...."
  if (error) console.error(error)
  const loetud = data.completed ? "Olen lugenud" : "Pole lugenud"
  function handleClick() {
    navigate("/")
  }
  // Lage checkbox for lugenud!!
  return (
    <div>
      <h1>OneBook</h1>
      {isSuccess && (
        <div>
          <h3>Raamat: {data.title} </h3>
          <h4>
            Autor: {data.first_name}
            <> </>
            {data.last_name}{" "}
          </h4>
          <hr></hr>
          {loetud}
          {data.description && <h4>Olulist:</h4>}
          <p> {data.description} </p>
        </div>
      )}
      <button onClick={handleClick}>Navigate button</button>
    </div>
  )
}
