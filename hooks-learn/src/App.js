import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StyleSheet from "./component/StyleSheet";
// import Inline from "./component/Inline";
// import ComponentC from "./component/UseContext/ComponentC";
//  export const UserContext = React.createContext();
//  export const ChannelContext = React.createContext();
import './Appstyle.css'
import styles from './Appstyles.module.css'

function App() {
  return (
    <div className="App">
<h1 className="Error">Error</h1>
<h1 className="styles.success">Success</h1>
      {/* <UserContext.Provider value={'Rehan'}>
        <ChannelContext.Provider value={'Raza'}>
        <ComponentC />
        </ChannelContext.Provider>
          
      </UserContext.Provider> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <Inline /> */}
    </div>
  );
}

export default App;
