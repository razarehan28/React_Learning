import { combineReducers } from "redux";
import cakeReducer from "./cakeReducers";
import IceCreamReducer from "./IceCreamReducers";

const RootReducers = combineReducers({
  cake:cakeReducer,
  IceCream:IceCreamReducer,
})

export default RootReducers;