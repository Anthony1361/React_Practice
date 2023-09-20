import React, {Component} from "react";

class Formhand extends Component{

    constructor(props){
        super(props)

        this.state ={
            Username: "",
            Text: "",
            Topic: "react"
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            Username: event.target.value
        })
    }

    handleTextChange = (event) => {
        this.setState({
            Text: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            Topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.Username} ${this.state.Text} ${this.state.Topic}`)
        //below is to prevent the default clearing of the alert//
        event.preventDefault()
    }

    render(){
       
        // const {Username,Text,Topic} = this.state 
        // with this const, the this.state value can be removed from the value attributes leaving only Username,Text etc as value

        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.Username} onChange={this.handleUsernameChange}></input>
                </div>

                <div>
                    <label>Text</label>
                    <textarea value={this.state.Text} onChange={this.handleTextChange}></textarea>
                </div>

                <div>
                    <label>Topic</label>
                    <select value={this.state.Topic} onChange={this.handleTopicChange}>
                        <option value={"react"}>React</option>
                        <option value={"angular"}>Angular</option>
                        <option value={"vue"}>Vue</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Formhand