import React, { Component } from "react";
import PureComp from "./components/PureComp";
import RegComp from "./components/RegComp";
import ParentComp from "./PureComponent/ParentComp";

class App extends Component {
  render() {
    return (
      <div>
        <ParentComp />
      </div>
    );
  }
}
export default App;
