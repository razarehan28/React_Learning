import React, { Component } from "react";
import EventBind from "./EventHandling/EventBind";
import ClassClick from "./EventHandling/ClassClick";
import FunctionClick from "./EventHandling/FunctionClick";
import Message from "./components/Message";
import UserGreeting from "./ConditionalRendering/UserGreeting";
import NameList from "./Listandkeys/NameList";
import LifecycleA from "./components/LifecycleA";

class App extends Component {
  render() {
    return (
      <div>
        {/* <ParentComp /> */}
        {/* <FunctionClick />
        <ClassClick />
        <EventBind />
        <Message /> */}
        {/* <UserGreeting /> */}
        <NameList />
     
      </div>
    );
  }
}
export default App;
