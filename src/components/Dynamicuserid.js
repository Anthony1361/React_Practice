import React from "react";
import { useParams } from "react-router-dom";

export const Dynamicuserid = () => {

    // const params = useParams();
    // const userId = params.userId;

    //the above is the same with the approach below, depends on the one u want to use//

    const {userId} = useParams();

    return(
        <div>
            <h1>Details of user {userId} </h1>
        </div>
    )
}

//Note- import useParams was inserted for URL param topic, the code was previously without it which was a diff. topic//