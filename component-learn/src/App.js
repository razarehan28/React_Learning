import React, { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Greet name="Simform" locationName="Gujarat" /> 
       <Greet name="Solutions" locationName="Gujarat" />
       <Greet name="Rehan" locationName="Kolkata" /> */}
        {/* <Welcome name="Simform" locationName="Gujarat"/>
      <Welcome name="Simform" locationName="Gujarat" />
      <Welcome name="Rehan" locationName="Kolkata" /> */}
        <Message />
      </div>
    );
  }
}
export default App;
