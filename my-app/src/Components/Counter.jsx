import { useState, useEffect } from 'react'
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0)

    // useEffect Syntax
    // useEffect(() => {
    //      Side Effect code that want to run
    //   return () => {
    //      Optional Return Function -> Cleanup Function
    //   }
    // }, []) // The Dependency Array

    // 1. No Dependency -> Whole Component -> Runs on Every Render
    useEffect(() => {
        console.log("Rendering Component")
    })

    // 2. Empty Dependency -> Whole Component - Runs on First Render
    useEffect(() => {
        console.log("Count Mounted")

    return () => {
        console.log("Count Unmounted")
    }
    }, [])

    // 3. With Dependency -> When value is changed
    useEffect(() => {
        console.log("Count Updated", count)

    return () => {
        console.log("Count Cleanup", count)
    }
    }, [count])

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