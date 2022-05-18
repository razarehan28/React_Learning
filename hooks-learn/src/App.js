import logo from './logo.svg';
import './App.css';
import ClassCounter from './component/ClassCounter'
import HookCounter from './component/HookCounter';
import HookCounterTwo from './component/HookCounterTwo';
import HookCounterThree from './component/HookCounterThree';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */} 
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      <HookCounterThree />
    </div>
  );
}

export default App;
