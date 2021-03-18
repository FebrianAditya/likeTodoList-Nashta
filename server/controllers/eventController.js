const { Event } = require("../models")

class EventController {

    static createEvent(req, res) {
        
        const inputUser = {
            title: req.body.title,
            location: req.body.location,
            participant: req.body.participant,
            date: new Date(),
            note: req.body.note,
            picture: req.body.picture    
        }

        Event.create(inputUser)
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                let tampErr = []
                if (err.name === "SequelizeValidationError") {
                    if (err.errors.length > 1) {
                        for (let i = 0; i < err.errors.length; i++) {
                            tampErr.push(err.errors[i].message)
                        }
                        res.status(400).json(tampErr)
                    }else {
                        tampErr = []
                        tampErr.push(err.errors[0].message)
                        res.status(400).json(tampErr)
                    }
                } else {
                    res.status(500).json(err)
                }
            })

    }

    static getAllEvent(req, res) {
    
        Event.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
        
    }

}

module.exports = EventController