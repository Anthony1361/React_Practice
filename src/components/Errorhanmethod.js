import React from "react";

function Errorhanmethod({heroName}) {

    if(heroName === "joker"){
        throw new Error("not a hero")
    }

    return(
        <div>
           {heroName}
        </div>
    )
}

export default Errorhanmethod