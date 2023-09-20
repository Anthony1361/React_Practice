import React from "react";

function Dissprop(props) {
    const {name, add} = props
    return (
        <div>
            <p> {name} </p>
            <p> {add} </p>
        </div>
    )
}

export  default Dissprop