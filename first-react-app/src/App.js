import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <h3>{count}</h3>
      <button onClick = {() => {setCount(count + 1)}}>Click Me</button> &nbsp;&nbsp;
      <button onClick = {() => {setCount(0)}}>Reset</button>
    </div>
  );
}

export default App;
