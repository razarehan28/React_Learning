import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <a className="quantity_minus" title='Decrement'><span> - </span></a>
      <input name="quantity" type="text"></input>
      <a className="quantity_plus" title='Increment'><span> + </span></a>
    </div>
  );
}

export default App;
