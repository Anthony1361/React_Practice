import React, { Component } from "react";

class Coutersetstate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.state.count = this.state.count + 1
    // setState is important for react to render, so the first method is not recommended//

    // this.setState({
    //     count:  this.state.count = this.state.count + 1
    // })

    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback value", this.state.count);
    //     // this callback arrow was so that the console can increment inline with the setState
    //   }
    // );

    // this.setState(prevState => ({
    //     count: prevState.count + 1
    // }))

    this.setState((prevState, props) => ({
        count: prevState.count + 1
        // just the same thing with the above one//
    })

    )
    console.log(this.state.count);
  }

  incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <div> Count - {this.state.count} </div>

        {/* <button onClick={() => this.increment()}>Increment</button> */}
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Coutersetstate;
