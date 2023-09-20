import React, {Component} from "react";

class Eventhand2 extends Component{
    
    clickHandler(){
        console.log("clicked is click")
    }

    render(){
        return(
            <div>
               <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default Eventhand2