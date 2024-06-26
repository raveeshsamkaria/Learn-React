import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems = useSelector((state) => state.cart)

    return (
        <div>
        {
            cartItems.map((item) => (
                <div className='cart' key={item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    <h5>$ {item.price}</h5>
                </div>
            ))
        }
        </div>
    )
}

export default Cart