import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
import IceCreamContain from "./components/IceCreamContain";
import NewCakeContainer from "./components/NewCakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IceCreamContain />
        <HooksCakeContainer />
        <CakeContainer />;
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
