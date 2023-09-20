import React,  { Component } from "react";

class Eventbind extends Component{

    constructor(props){
        super(props)

        this.state = {
            message: "Hello World"
        }

        // below is the third approach//
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Goodye!"
    //     })
    //     console.log(this)
    // }

    // below is the fourth approach//
    clickHandler = () => {
        this.setState({
            message: "Goodye!"
        })
    }

    render(){
        return(
            <div>
                <div> {this.state.message} </div>
                {/* first approch in binding, first approach is not recommended because of performance implications  */}
              <button onClick={this.clickHandler.bind(this)}>Click Bind</button>
              {/* second approch in binding,this is the easiest way to pass parameters for its simplicity and if your code doesnt
              involve re-rendering nested components */}
              <button onClick={() => this.clickHandler()}>Click Bind</button>
              {/* third approach is commonly seen and it is recommended with the fourth approach */}
              <button onClick={this.clickHandler}>Click Bind</button>
              {/* in the fourth approach, the clickHandler(){} is removed and the third approach in constructor */}
              <button onClick={this.clickHandler}>Click Bind</button>
            </div>
        )
    }
}

export default Eventbind