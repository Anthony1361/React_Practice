import React from "react";

function Methodpropschild(props) {
    return(
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

            {/* passing from child to parent method */}
            <button onClick={() => props.greetHandler("child")} >Greet Parent</button>
        </div>
    )
}

export default Methodpropschild