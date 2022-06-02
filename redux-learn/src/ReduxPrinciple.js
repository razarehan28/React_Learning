const redux = require("redux");
const createStore = redux.createStore;

const BUY_Cake = "BUY_CAKE";
// Define a action
const buyCake = () => {
  // Action creator
  return {
    type: BUY_Cake, // Action
    info: "First redux action",
  };
};
// Reducers
const initialState = {
  numOfCakes: 10,
};
// define a reducer function
const reducer = (state = initialState, action) => {
  // default value of initial state
  switch (action.type) {
    case BUY_Cake:
      return {
        ...state, // copy of state
        numOfCakes: state.numOfCakes - 1, // new state object
      };
    default:
      return state;
  }
};
// store in Redux
const store = createStore(reducer);
console.log("initialState", store.getState()); // initialState
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
); // subscribe
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
