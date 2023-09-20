import React, {Component} from "react";

class LifecycleMchild extends Component{

    constructor(props){
        super(props)

        this.state = {
            name: "Daniel"
        }

        console.log("LifecycleMchild constructor")
    }

    static getDerivedStateFromProps(props,state){
        //console.log are added to track the execution order//
        console.log("LifecycleMchild getDerivedStateFromProps")

        return null
    }

    componentDidMount(){
        console.log("LifecycleMchild componentDidMount")
    }

    render(){
        console.log("LifecycleMchild render")
        return(
            <div>
               <div>LifecycleM child</div>
               
            </div>
        )
    }
}

export default LifecycleMchild