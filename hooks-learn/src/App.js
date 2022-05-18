import logo from './logo.svg';
import './App.css';
import ClassCounter from './component/ClassCounter'
import HookCounter from './component/HookCounter';
import HookCounterTwo from './component/HookCounterTwo';
import HookCounterThree from './component/HookCounterThree';
import HookCounterFour from './component/HookCounterFour';
import HookCounterone from './component/UseEffect/HookCounterone';
import HookMouse from './component/UseEffect/HookMouse';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */} 
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterone /> */}
    <HookMouse />
    </div>
  );
}

export default App;
