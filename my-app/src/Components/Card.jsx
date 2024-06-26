import "./Card.css"

const Card = (props) => {
    return (
        <div className='card'>
            <img src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={200} />
            <h1>{props.title}</h1>
            <p>{props.price}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique ullam assumenda! Nemo, voluptates deserunt. Inventore quis sunt dolor optio.</p>
        </div>
    )
}

export default Card