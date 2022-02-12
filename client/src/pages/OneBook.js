import React, { useState } from "react"
import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"
import DeleteBook from "../components/DeleteBook"
import { fetchOne } from "../utils/api-client"
import EditBook from "./EditBook"

export default function OneBook() {
  const [edit, setEdit] = useState(false)
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
      <button onClick={() => setEdit((prev) => !prev)}>Change data</button>
      {edit && <EditBook data={data} />}
      {/* <Link to={`/editbook/${id}`}>To edit</Link> */}
      <DeleteBook id={id} />
    </div>
  )
}
