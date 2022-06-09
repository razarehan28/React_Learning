import React from "react";
import { connect } from "react-redux";
// import { buycake } from "./redux/cake/cakeAction";
import {buyIceCream} from '../redux'

function IceCreamContain(props) {
  return (
    <div>
      <h2>Number of IceCream-{props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfIceCream,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps)
  (IceCreamContain);
