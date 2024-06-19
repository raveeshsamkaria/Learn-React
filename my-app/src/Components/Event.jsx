import { useState } from 'react'

const Event = () => {
    // Click Event
    const handleClick = () => {
        alert("Button is Clicked")
    }

    // Mouse Event
    const handleMouseOver = () => {
        alert("Mouse on Box")
    }
    
    const [name, setName] = useState("JavaScript")
    
    // Input Event
    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <h3>Click Event</h3>
            <button onClick={handleClick}>Click Me</button>
            <h3>Mouse Event</h3>
            <div className="box" onMouseOver={handleMouseOver}>
                <p>It is a Box</p>
            </div>
            <h3>Input Event</h3>
            <input type="text" value={name} onChange={handleChange} />
            <p>Label: {name}</p>
        </>
    )
}

export default Event