import React, {Component} from "react";
import LifecycleMchild from "./LifecycleMchild";

class LifecycleM extends Component{

    constructor(props){
        super(props)

        this.state = {
            name: "Daniel"
        }

        console.log("LifecycleM constructor")
    }

    static getDerivedStateFromProps(props,state){
        //console.log are added to track the execution order//
        console.log("LifecycleM getDerivedStateFromProps")
        
        return null
    }

    componentDidMount(){
        console.log("LifecycleM componentDidMount")
    }

    render(){
        console.log("LifecycleM render")
        return(
            <div>
               Lifecycle M
               <LifecycleMchild></LifecycleMchild>
            </div>
        )
    }
}

export default LifecycleM