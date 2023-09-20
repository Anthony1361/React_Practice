import React from "react";
import { useAuth } from "./Authprofile";
import { useNavigate } from "react-router-dom";

export const Profile = () => {

    // const auth = useAuth();

    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     auth.Logout()
    //     navigate("/")
    // }

    return(
        // <div>
        //     <h1>Welcome {auth.user} </h1>
        //     <button onClick={handleLogout}>Logout</button>
        // </div>

       <div>
         <h1>Welcome </h1>
       </div>
    )
}