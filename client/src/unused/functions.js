const URLEN = "http://localhost:8080"

export async function fetchData(func) {
  try {
    const response = await fetch(URLEN)
    const books = await response.json()
    func(books)
  } catch (error) {
    console.log(error)
  }
}
