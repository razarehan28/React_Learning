import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./component/ClassCounter";
import HookCounter from "./component/HookCounter";
import HookCounterTwo from "./component/HookCounterTwo";
import HookCounterThree from "./component/HookCounterThree";
import HookCounterFour from "./component/HookCounterFour";
import HookCounterone from "./component/UseEffect/HookCounterone";
import HookMouse from "./component/UseEffect/HookMouse";
import MouseContainer from "./component/UseEffect/MouseContainer";
import DataFetching from "./component/UseEffect/DataFetching";
import ComponentC from "./component/UseContext/ComponentC";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterone /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <DataFetching /> */}
      <UserContext.Provider value={"Rehan"}>
        <ChannelContext value={"Raza"}>
          <ComponentC />
        </ChannelContext>
      </UserContext.Provider>
    </div>
  );
}

export default App;
