import React, { Component } from "react";
import Methodpropschild from "./Methodpropschild";

class Methodpropsparent extends Component{
    constructor(props){
        super(props)

        this.state = {
            message: "Parent"
        }

        this.greetParent = this.greetParent.bind(this)
    }

    // greetParent(){
    //     alert(`Hello ${this.state.message}`)
    // }

    // passing from child to parent method//
    greetParent(childName){
        alert(`Hello ${this.state.message} from ${childName}`)
    }

    render(){
        return(
            <div>
               <Methodpropschild greetHandler={this.greetParent}></Methodpropschild>
            </div>
        )
    }
}

export default Methodpropsparent