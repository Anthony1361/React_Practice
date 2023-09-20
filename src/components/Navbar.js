import React from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useAuth } from "./Authprofile";

export const Navbar = () => {

    const navLinkStyles = ({isActive}) => {
        return{
            fontweight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
        }
    }

    //the const below is for login button when the user is offline //
    // const auth = useAuth();

    return(

    //    <nav className="primarynav">
    //     <NavLink style={navLinkStyles} to={'/'}>Home</NavLink>
    //     <NavLink style={navLinkStyles} to={'/About'}>About</NavLink>
    //     <NavLink style={navLinkStyles} to={'/Products'}>Products</NavLink>
    //     <NavLink style={navLinkStyles} to={"/Services"}>Services</NavLink>
    //     <NavLink style={navLinkStyles} to={"/Profile"}>Profile</NavLink>

    //     {
    //         !Auth.User && (
    //           <NavLink style={navLinkStyles} to={"/Login"}>
    //             Login
    //           </NavLink>
    //         )
    //     }

    //    </nav>

        // <nav>
        //    <Link to={'/'}>Home</Link>
        //    <Link to={'/about'}>About</Link>
        // </nav>

       <nav className="primarynav">
          <NavLink style={navLinkStyles} to={"/"}>
               Home
          </NavLink>
          <NavLink style={navLinkStyles} to={"/about"}>
              About
          </NavLink>
          <NavLink style={navLinkStyles} to={"/products"}>
              Products
          </NavLink>
          <NavLink style={navLinkStyles} to={"/profile"}>
              Profile
          </NavLink>
          <NavLink style={navLinkStyles} to={"/services"}>
              Services
          </NavLink>


       </nav>

        
    )
}