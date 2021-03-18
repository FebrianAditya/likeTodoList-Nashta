import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetEvent } from "../../hooks/apiRequest"

export default function TableComponent() {
    const events = useSelector(state => state.events)
    // const [pagination, setPagination] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetEvent())
        // setPagination(Math.ceil(events.length / 5))
    }, [])

    return(
        <>
            {/* {JSON.stringify(events.length)} */}
            {/* { JSON.stringify(pagination) } */}
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Location</th>
                        <th scope="col">Date</th>
                        <th scope="col">Participant</th>
                        <th scope="col">Note</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map((event, i) => {
                            return(
                                <tr>
                                    <th scope="row">{i+1}</th>
                                    <td>{event.title}</td>
                                    <td>{event.location}</td>
                                    <td>{event.date}</td>
                                    <td>{event.participant}</td>
                                    <td>{event.note}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </>
    )
}