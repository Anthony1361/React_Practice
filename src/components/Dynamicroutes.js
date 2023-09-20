import React from "react";
import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const Dynamicroutes = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    //searchParams is an object, the second value setSearchParams is a function//
    //note- the useSearchParams is similar to the useState//

    const showActiveUsers = searchParams.get("filter") === "Active";

    return(
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>

            <Outlet></Outlet>

            {/* the div below is for search params another diff. topic and the useSearchparam hook*/}
            <div>
                <button onClick={() => setSearchParams({filter: "Active"})}>Active Users</button>
                {/* the filter is an object with one property and a value which is Active */}
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>

            {
                showActiveUsers ? (
                    <div>
                      <h2>Showing Active Users</h2>
                        <ul>
                            <li>I am active 1</li>
                            <li>I am active 2</li>
                            <li>I am active 3</li>
                        </ul>
                    </div>
                    
                ) : (
                    <div>
                    <h2>Showing All Users</h2>
                      <ul>
                          <li>I am user 1</li>
                          <li>I am user 2</li>
                          <li>I am user 3</li>
                      </ul>
                  </div>
                )
            }
        </div>
    )
}