const express = require('express')
const app = express()
const port = process.env.PORT
const routes = require("./routes")
const cors = require("cors")

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(routes)

app.listen(port, () => {
  console.log(`I LOVE YOU ${port}`)
})