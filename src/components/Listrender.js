import React from "react";

function Listrender() {

    const persons = [

        {
            id: 1,
            name: "Rush" ,
            age: 30,
            skill: "React"
        },

        {
            id: 2,
            name: "Jump" ,
            age: 35,
            skill: "Java"
        },

        {
            id: 3,
            name: "Dam" ,
            age: 40,
            skill: "Script"
        },
    ]

    const personsList = persons.map(persons => <h2>I am {persons.name}. I am {persons.age} years old. I know {persons.skill} </h2>)
    return(
        <div> {personsList} </div>
    ) 

}

// function Listrender() {

//     const name = ["Rush","Jump","Dam"]
       
       // for option three //
//     const nameList =   name.map(name => <h2> {name} </h2>)

//    return(

       //option one // 
//      <div>
//         <h2> {name [0] } </h2>
//         <h2> {name [1] } </h2>
//         <h2> {name [2] } </h2>
//      </div>

        // option two //
//        <div>
//           {
//             name.map(name => <h2> {name} </h2>)
//           }
//        </div>

        //option three //
//      <div>
//           {
//             nameList
//           }
//        </div>
//    ) 
// }

export default Listrender