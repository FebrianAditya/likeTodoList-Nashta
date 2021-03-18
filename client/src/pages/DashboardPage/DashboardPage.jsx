import React from "react"
import { NavbarComponent, TableComponent, SearchComponent } from "../../components"

export default function DashboardPage() {

    return(
        <>
            <NavbarComponent/>
            <div className="container">
                <SearchComponent/>
                <TableComponent/>
            </div>
        </>
    )
}