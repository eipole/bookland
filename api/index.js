if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const mongoDB = process.env.DATABASE_URL
const mongoose = require("mongoose")

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PATCH, PUT")
  res.setHeader("Access-Control-Allow-Headers", "content-type")
  // res.set(
  //   "Content-Security-Policy",
  //   "default-src 'self', form-action 'self',script-src 'self'"
  // )
  next()
})

mongoose.connect(mongoDB)
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("connected to mongoose"))

mongoose.connection.on("open", function (ref) {
  console.log("Connected to mongo server.")
})

mongoose.connection.on("error", function (err) {
  console.log("Could not connect to mongo server!")
  return console.log(err)
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const bookRouter = require("./routes/books")
app.use("/api", bookRouter)

app.listen(port, () => {
  console.log("Kuulan" + port)
})

/* const { MongoClient } = require("mongodb")
MongoClient.connect(mongoDb, function (err, client) {
  if (err) throw err
  console.log("connected edukalt")
  var db = client.db("raamatud")

  db.collection("books")
    .find()
    .toArray(function (err, result) {
      if (err) throw err

      console.log(result)
    })
}) */
