import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetEvent } from "../../hooks/apiRequest"
import "./Card.css"

export default function CardComponent() {
    const events = useSelector(state => state.events)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetEvent())
    }, [])

    return(
        <>
            {
                events.map(event => {
                    return(
                        <div className="col">
                            <div className="container mt-5">
                                <div className="card" style={{width: "18rem"}}>
                                    <img src={event.picture} className="card-img-top " alt="picture" width="500" height="200"/>
                                    <div className="card-body">
                                        <p className="card-title">{event.location}</p>
                                        <h5 className="card-text">{event.title}</h5>
                                        <p>{event.date}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <p>{event.participant}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <p><b>Note:</b></p>
                                            <p>{event.note}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }
        </>
    )
} 