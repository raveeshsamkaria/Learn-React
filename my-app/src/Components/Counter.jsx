import { useState } from 'react'
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>Counter</h2>
            <button onClick={() => {setCount(count - 1)}}>Decrement</button>
            <span> {count} </span>
            <button onClick={() => {setCount(count + 1)}}>Increment</button>
        </div>
    )
}

export default Counter