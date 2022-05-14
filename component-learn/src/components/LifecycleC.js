// //UPDATING COMPONENT
// import React, { Component } from "react";
// import LifecycleD from "./LifecycleD";

// export class LifecycleC extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "Simform",
//     };
//     console.log("LifecycleC constructor")
//   }
//   static getDerivedStateFromProps(props, state) {
//     console.log("LifecycleC getDerivedStateFromProps");
//     return null;
//   }
//   shouldComponentUpdate() {
//     console.log("LifecycleC shouldcomponentUpdate");
//     return true;
//   }
//   getSnapshotBeforeUpdate(prevprops, prevState) {
//     console.log("LifecycleC SnapshotbeforUpdate");
//     return null;
//   }
//   componentDidUpdate() {
//     console.log("LifecycleC ComponentDidUpdate");
//   }
//   changeState = () => {
//     this.setState({
//       name: "Solution",
//     });
//   };
//   render() {
//     console.log("LifecycleC render")
//     return (
//       <div>
//         <div>LifecycleC</div>
//         <button onClick={this.changeState}>Change State</button>
//         <LifecycleD />
//       </div>
//     );
//   }
// }

// export default LifecycleC;
