const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("Server berhasil jalan 🚀")
})

app.listen(5000, () => {
  console.log("Server jalan di http://localhost:5000")
})
