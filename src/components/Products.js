import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Products = () => {
    return(
        <div>

            <input type="search" placeholder="search products"></input>

            <nav>
               <Link to={"Featured"}>Featured</Link>
               <Link to={"New"}>New</Link>
            </nav> 

            <Outlet></Outlet>
        </div>
    )
}