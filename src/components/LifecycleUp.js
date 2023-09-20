import React, {Component} from "react";
import LifecycleMchild from "./LifecycleMchild";
import LifecycleUpchild from "./LifecycleUpchild";

class LifecycleUp extends Component{

    constructor(props){
        super(props)

        this.state = {
            name: "Daniel"
        }

        console.log("LifecycleUp constructor")
    }

    static getDerivedStateFromProps(props,state){
        //console.log are added to track the execution order//
        console.log("LifecycleUp getDerivedStateFromProps")
        
        return null
    }

    componentDidMount(){
        console.log("LifecycleUp componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifecycleUp shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecycleUp getSnapShotBeforUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecycleUp componentDidUpdate")
    }

    changeState = () =>{
        this.setState({
            name: "Ajax"
        })
    }

    render(){
        console.log("LifecycleUp render")
        return(
            <div>
               Lifecycle Up
               <button onClick={this.changeState}>Change State</button>
                <LifecycleUpchild></LifecycleUpchild>
            </div>
        )
    }
}

export default LifecycleUp