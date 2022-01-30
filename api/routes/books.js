const express = require("express")
const router = express.Router()
const Book = require("../models/bookmodel")

// Getting all
router.get("/", async (req, res) => {
  try {
    const books = await Book.find()
    res.json(books)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
// Get one
router.get("/:id", async (req, res) => {
  const { id } = req.params
  const book = await Book.findById(id)
  res.json(book)
})

router.post("/", async (req, res) => {
  const newitem = new Book({
    title: req.body.title,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    description: req.body.description,
    completed: req.body.completed,
  })
  try {
    const newBook = await newitem.save()
    res.status(201).json(newBook)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})
// Edit book
router.patch("/:id", getBook, async (req, res) => {
  console.log(req.body)
  res.book.title = req.body.title
  res.book.first_name = req.body.first_name
  res.book.last_name = req.body.last_name
  res.book.description = req.body.description
  res.book.completed = req.body.completed
  try {
    const updatedBook = await res.book.save()
    res.json(updatedBook)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})
// Deleting One
router.delete("/:id", getBook, async (req, res) => {
  try {
    await res.book.remove()
    res.json({ message: "Deleted book" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getBook(req, res, next) {
  let book
  try {
    book = await Book.findById(req.params.id)
    if (book == null) {
      return res.status(404).json({ message: "Cannot find Book" })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.book = book
  next()
}
module.exports = router
