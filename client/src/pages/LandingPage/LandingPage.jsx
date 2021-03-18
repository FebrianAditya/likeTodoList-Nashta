import React from "react"
import { NavbarComponent, CardComponent } from "../../components"
import "./Landing.css"

export default function LandingPage() {

    return(
        <>
            <NavbarComponent/>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <CardComponent/>
                </div>
            </div>
        </>
    )
}