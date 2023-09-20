import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


export  const Services = () => {



    return(
        <div>
            <h1>List of services</h1>
            <ul>
                <Link to={"Spa"}><li>spa</li></Link>
                <Link to={"/Massage"}><li>Massage</li></Link>
                <Link to={"/Hotbath"}><li>Hot Bath</li></Link>
            </ul>
            <Outlet></Outlet>
        </div>
    )
}