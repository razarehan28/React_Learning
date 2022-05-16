// conditional Rendering in React
import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // Short circuit Operator
    return this.state.isLoggedIn && <div>Welcome to Simform</div>;
    // Ternary operator
    return this.state.isLoggedIn ? (
      <div>Welcome To Simform</div>
    ) : (
      <div>Thanks To join Simform</div>
    );
    // Elements Variable
    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome To Simform</div>;
    } else {
      message = <div>Thanks to join Simform</div>;
    }
    return <div>{message}</div>;
    // if else operator
    if (this.state.isLoggedIn) {
      return <div>Welcome to Simform</div>;
    } else {
      return <div>Welcome a Guest</div>;
    }
  }
}

export default UserGreeting;
