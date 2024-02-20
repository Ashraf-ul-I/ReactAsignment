import React, { useEffect, useState } from 'react'

const Products = (props) => {
    const [products, setProducts] = useState([]);

    //jokhoni component load hobe tokhoni product data ke fetch korte hobe so ki use korte hobe?
    //answer is useEffect()

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
        fetchProducts();
    }, [])
    return (
        <div className='productsWrapper' >
            {
                products.map((product) => {
                    return (
                        <div className='card' key={product.id}>
                            <img src={product.image} alt={product.id} />
                            <h4>{product.title}</h4>
                            <h5>{product.price}</h5>
                            <button className='btn' onClick={props.addToCart}>Add to cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products