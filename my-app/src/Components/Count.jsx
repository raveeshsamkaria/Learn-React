import { useEffect, useRef, useState } from 'react'
import "./Count.css"

const Count = () => {
    const [value, setValue] = useState(0)
    const num = useRef(0)
    const btnRef = useRef()

    // 1. Persistent Value
    useEffect(() => {
        num.current = num.current + 1
        console.log("Re-Rendering...")
        console.log(`Num is ${num.current}`)
    })
    
    // 2. DOM Manipulation
    useEffect(() => {
        console.log("First Rendering..")
        btnRef.current.style.backgroundColor = "royalblue"
    }, [])
    

    return (
        <div>
            <h2>{value}</h2>
            <button className='click' ref={btnRef} onClick={() => {setValue(value + 1)}}>Click Me</button><br/>
            <button className='block' onClick={() => {btnRef.current.style.display = "none"}}>Hide</button> &nbsp;&nbsp;
            <button className='block' onClick={() => {btnRef.current.style.display = "block"}}>Show</button>
        </div>
    )
}

export default Count