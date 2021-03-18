import React from "react"
import "../NavbarComponent/Navbar.css"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/"> 
                        <img src="https://nashta.co.id/wp-content/uploads/2020/06/logo-construction3.png" width="60" height="60" className="d-inline-block align-top" alt="Logo Nashta"/>
                    </Link>
                    <div className="ml-auto">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active marginButton">
                                    <Link to="/formadd"> +AddEvent </Link>
                                </li>
                                <li className="nav-item marginButton">
                                    <Link to="/dashboard"> Dashboard </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}