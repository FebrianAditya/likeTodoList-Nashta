import React, { useState } from "react"
import logo from "../../assets/undraw_shared_goals_3d12.png"
import "./Form.css"
import { AddEvent } from "../../hooks/apiRequest"
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"

export default function FormComponent() {
    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [participant, setParticipant] = useState("")
    const [note, setNote] = useState("")
    const [image, setImage] = useState("")
    const history = useHistory()
    const inputData = {
        title,
        location,
        date,
        participant,
        note,
        picture: image
    }

    function handlerSumbit(e) {
        e.preventDefault()
        AddEvent(inputData)
            .then(_ => {
                Swal.fire('Succes add Event')
                history.push("/")
            })
            .catch(err => {
                for (let i = 0; i < err.response.data.length; i++) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${err.response.data[i]}`,
                    })
                }
            })
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={handlerSumbit}>
                            <div className="form-row inputA">
                                <div className="form-group col">
                                    <label>Title</label>
                                    <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} placeholder="e.g Meeting"/>
                                </div>
                                <div className="form-group col">
                                    <label>Location</label>
                                    <input type="text" className="form-control" onChange={e => setLocation(e.target.value)} placeholder="e.g Meeting Room"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Participant</label>
                                <input type="text" className="form-control" onChange={e => setParticipant(e.target.value)} placeholder="Jhon Doe, Febrian Aditya"/>
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input type="date" className="form-control" onChange={e => setDate(e.target.value)} placeholder="Apartment, studio, or floor"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Note</label>
                                <input type="text" className="form-control" onChange={e => setNote(e.target.value)} />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Select image:</label>
                                <input type="text" className="form-control" onChange={e => setImage(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Button</button>
                        </form>
                    </div>
                    <div className="col">
                        <img src={logo} className="img-fluid" width="500" height="450" alt="preview"/>
                    </div>
                </div>
            </div>
        </>
    )
}