import React, { Component } from "react";
import EventBind from "./EventHandling/EventBind";
import ClassClick from "./EventHandling/ClassClick";
import FunctionClick from "./EventHandling/FunctionClick";
import Message from "./components/Message";
import UserGreeting from "./ConditionalRendering/UserGreeting";

class App extends Component {
  render() {
    return (
      <div>
        {/* <ParentComp /> */}
        {/* <FunctionClick />
        <ClassClick />
        <EventBind />
        <Message /> */}
        <UserGreeting />
      </div>
    );
  }
}
export default App;
