import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Click Me</button> &nbsp;&nbsp;
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  )
}

export default App
