import React from 'react'
import Products from '../components/Products'

const Home = ({ addToCart }) => {
    return (
        <div>
            <h2 className='heading'>Welcome to the redux toolkit store</h2>
            <section>
                <h4>Products</h4>
                <Products addToCart={addToCart} />
            </section>
        </div>
    )
}

export default Home