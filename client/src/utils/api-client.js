import axios from "axios"
const client = axios.create({
  baseURL: "http://localhost:8080",
})

// export async function fetchBooks(func) {
//   await client.get("/").then((res) => func(res.data))
// }

export async function fetchAll() {
  try {
    const response = await client.get("/api").then((res) => res.data)
    return response
  } catch (error) {
    console.log("siin on viga", error)
  }
}
export async function fetchOne({ id }) {
  try {
    const response = await client.get(`/api/${id}`).then((res) => res.data)
    return response
  } catch (error) {
    console.log("siin on viga", error)
  }
}

export async function deleteOne({ id }) {
  try {
    const response = await client.delete(`/api/${id}`).then((res) => res.data)
    return response
  } catch (error) {
    console.log("viga deleting", error)
  }
}

export async function addOne(book) {
  try {
    const response = await client.post("/api", book).then((res) => res.data)
    return response
  } catch (error) {
    console.log("viga addOne", error)
  }
}

export async function editOne(book) {
  try {
    const response = await client
      .patch(`/api/${book._id}`, book)
      .then((res) => res.data)
    return response
  } catch (error) {
    console.log("error editing", error)
  }
}

// const URLEN = "http://localhost:8080"

/* export async function fetchData(func) {
  try {
    const response = await fetch(URLEN)
    const books = await response.json()
    func(books)
  } catch (error) {
    console.log(error)
  }
} */
// export function handleEditRecept(id, selectedRecept, recept, set) {
//   const newRecept = [...recept]
//   const index = newRecept.findIndex((e) => e.id === id)
//   newRecept[index] = selectedRecept
//   set(newRecept)
// }
