import React from "react"
import { Link } from "react-router-dom"

export const Hotbath = () => {
    return(
        <div>
            Welcome to Hot Bath
            <Link to={"/Services"}>Prev</Link>
        </div>
    )
}