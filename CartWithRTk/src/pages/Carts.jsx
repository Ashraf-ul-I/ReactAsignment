import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
const Carts = () => {
    const cartItems = useSelector((state) => state.cart);//subsrive the data
    const dispatch = useDispatch();

    const removeProduct = (itemId) => {
        dispatch(remove(itemId)); //dispatch er bhitore action call korte hobe
    }
    return (
        <div>
            <h3>Cart</h3>
            <div className='cartWrapper'>
                {
                    cartItems.map((item) => {
                        return (
                            <div className='cartCard' key={item.id}>
                                <img src={item.image} alt={`${item.id}Product Image not Found `} />
                                <h5>{item.title}</h5>
                                <h5>{item.price}</h5>
                                <button className='btn' onClick={() => removeProduct(item.id)}>Remove</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carts
