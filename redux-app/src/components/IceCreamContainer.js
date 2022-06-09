import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {buyIceCream} from '../redux/cake&icecream/Actions/cakeIceCreamAction'

function IceCreamContainer() {
  const numOfIceCream = useSelector((state) => state.IceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of IceCream -{numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
}

export default IceCreamContainer;
