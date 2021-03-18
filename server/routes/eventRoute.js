const express = require("express")
const route = express.Router()
const EventController = require("../controllers/eventController")

route.get("/", EventController.getAllEvent)
route.post("/create", EventController.createEvent)

module.exports = route