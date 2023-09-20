import React, {Component} from "react";

class LifecycleUpchild extends Component{

    constructor(props){
        super(props)

        this.state = {
            name: "Daniel"
        }

        console.log("LifecycleUpchild constructor")
    }

    static getDerivedStateFromProps(props,state){
        //console.log are added to track the execution order//
        console.log("LifecycleUpchild getDerivedStateFromProps")

        return null
    }

    componentDidMount(){
        console.log("LifecycleUpchild componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifecycleUpchild shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecycleUpchild getSnapShotBeforUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecycleUpchild componentDidUpdate")
    }

    render(){
        console.log("LifecycleUpchild render")
        return(
            <div>
               <div>LifecycleUp child</div>
               
            </div>
        )
    }
}

export default LifecycleUpchild