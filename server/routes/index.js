const express = require("express")
const routes = express.Router()
const eventRoutes = require("../routes/eventRoute")

routes.use("/", eventRoutes)

module.exports = routes