import React from "react";

function Stylecom1() {

    const cssstyle = {
        fontSize:"50px",
        color:"#ffff00",
    }

    const pstyle = {
        fontWeight:"500",
        color:"blue",
    }

    return(
        <div>
            <h1 style={cssstyle}>First styling</h1>
            <p style={pstyle}>Another paragraph</p>
        </div>
    )
}

export default Stylecom1