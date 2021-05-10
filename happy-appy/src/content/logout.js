import React, { Component } from "react";
 
class Logout extends Component {
  render() {
    localStorage.clear();
    return (
      <div>
        <h2>Thanks for Visiting!</h2>
        <h3>You are now logged out</h3>
      </div>
    );
  }
}

export default Logout;