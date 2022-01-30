import React from "react"
import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"
import DeleteBook from "../components/DeleteBook"
import { fetchOne } from "../utils/api-client"

export default function OneBook() {
  const id = useParams()
  const { isSuccess, isLoading, data, error } = useQuery(
    ["SelectOne", id],
    () => fetchOne(id)
  )
  if (isLoading) return "Loading...."
  if (error) console.error(error)
  const loetud = data.completed ? "Olen lugenud" : "Pole lugenud"

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
      <Link>To edit</Link>
      <DeleteBook id={id} />
    </div>
  )
}
