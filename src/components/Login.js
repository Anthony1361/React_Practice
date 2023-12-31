import React from "react";
import { useState } from "react";
import { useAuth } from "./Authprofile";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [user, setUser] = useState("")

    const auth = useAuth()

    const navigate = useNavigate();

    const handleLogin = () => {
        auth.Login(user)
        navigate("/")
    }

    return(
        <div>

           <label>
              Username: <input type="text" onChange={event => setUser(event.target.value)}></input>
           </label>

           <button onClick={handleLogin}>Login</button> 
        </div>
    )
}