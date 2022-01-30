import React from "react"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { queryClient } from "../AppProviders"
import { deleteOne } from "../utils/api-client"

export default function DeleteBook({ id }) {
  const navigate = useNavigate()
  const { mutate } = useMutation(deleteOne, {
    onSuccess: () => {
      queryClient.invalidateQueries("FetchBooks")
    },
  })

  function handleClick() {
    console.log(mutate)
    mutate(id)

    navigate("/allbooks")
  }
  return (
    <div>
      <button onClick={handleClick}>Delete Book</button>
    </div>
  )
}
