import React, { Component } from "react";

class Errorboundary extends Component{

    constructor(props){
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }

    componentDidCatch(error,info){
        //the info parameter is for the information related to the error//
        console.log(error)
        console.log(info)
    }

    render(){
     
        if(this.state.hasError){
            return(
                <div>
                   <h1>Something went wrong</h1>
                </div>
            )
        }

        //the this.props.children refers to the component we are rendering//

        else{
            return(
                this.props.children
            )
        }
       
    }
}

export default Errorboundary