// //CHILDREN COMPONENT OF LIFECYCLE C
// import React, { Component } from "react";

// export class LifecycleD extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "Simform",
//     };
//     console.log("LifecycleD constructor")
//   }
//   staticgetDerivedStateFromProps(props, state) {
//     console.log("LifecycleD getDerivedStateFromProps");
//     return null;
//   }
//   shouldComponentUpdate() {
//     console.log("LifecycleD shouldcomponentUpdate");
//     return true;
//   }
//   getSnapshotBeforeUpdate(prevprops, prevState) {
//     console.log("LifecycleD SnapshotbeforUpdate");
//     return null;
//   }
//   componentDidUpdate() {
//     console.log("LifecycleD ComponentDidUpdate");
//   }
//   render() {
//     console.log("LifecycleD render")
//     return (
//       <div>
//         <div>LifecycleD</div>
//       </div>
//     );
//   }
// }

// export default LifecycleD;
