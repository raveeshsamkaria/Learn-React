import { useState, useEffect } from 'react'

const Api = () => {
    const [state, setState] = useState('Users')
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${state}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [state])

    return (
        <>
            <div>
                <button onClick={() => setState('Posts')}>Posts</button> &nbsp;
                <button onClick={() => setState('Users')}>Users</button> &nbsp;
                <button onClick={() => setState('Comments')}>Comments</button>
            </div>
            <h1>{state}</h1>
            {items.map(item => {
                return <pre key={item.id}>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}

export default Api