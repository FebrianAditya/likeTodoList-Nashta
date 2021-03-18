import React from "react"
import { NavbarComponent, FormComponent } from "../../components"
import "./AddEvent.css"

export default function AddEventPage() {

    return(
        <>
            <NavbarComponent/>
            <div className="container marginTopForm">
                <FormComponent/>
            </div>
        </>
    )
}