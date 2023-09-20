import React, { Component } from "react";

class Ifelsecon extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedin: true,
    };
  }

  render() {

    //Ternary and Short circuit operators is recommended by him because//
       //it is more readable and clear//

    //short circuit operator conditional rendering starts here//

    return(
        this.state.isLoggedin && <div>Short circuit operator</div>
    )

    //short circuit operator ends here//

    //ternary conditional operator aproache starts here//

    // return this.state.isLoggedin ? (
    //   <div>ternary conditional operator</div>
    // ) : (
    //   <div>else ternary conditional operator</div>
    // );

    //ternary conditional operator approache ends here //

    //element variables conditional rendering approache starts here//

    // let message

    // if(this.state.isLoggedin){
    //     message = <div>element variables</div>
    // }

    // else{
    //     message = <div>else element variable</div>
    // }

    // return(
    //     <div> {message} </div>
    // )

    //element variable ends//

    //if/else conditional rendering starts here//

    // if(this.state.isLoggedin){
    //     return(
    //         <h2>ifelse conditional rendering</h2>
    //     )
    // }

    // else{
    //     return(
    //        <p>Welcome Guest</p>
    //     )
    // }

    //if/else ends here
  }
}

export default Ifelsecon;
