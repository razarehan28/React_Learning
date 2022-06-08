import { combineReducers } from "redux";
import cakeReducer from "./cake/Reducers/cakeReducers";
import IceCreamReducer from "./IceCream/Reducers/iceCreamReducers";

const RootReducers = combineReducers({
  cake:cakeReducer,
  IceCream:IceCreamReducer,
})

export default RootReducers;