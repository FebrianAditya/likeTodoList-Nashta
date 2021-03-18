import React from "react"

export default function SearchComponent() {

    return(
        <>
            <form class="d-flex mt-5 mb-4">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </>
    )
}