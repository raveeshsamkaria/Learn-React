const Navbar = () => {
    return (
        <div className='nav'>
            <span style={{fontWeight:"bold"}}>Redux Tutorial</span>
            <ul>
                <li className='navLink'>Home</li>
                <li className='navLink'><i className="fa-solid fa-cart-shopping"></i></li>
                <li className='navLink'>Items: 0</li>
            </ul>
        </div>
    )
}

export default Navbar