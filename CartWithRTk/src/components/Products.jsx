import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice'
import Spinner from './spinner/Spinner';

const Products = (props) => {

    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);
    const { data: products, status } = useSelector((state) => state.product) //data:products data ke products e rename korechi
    //jokhoni component load hobe tokhoni product data ke fetch korte hobe so ki use korte hobe?
    //answer is useEffect()

    useEffect(() => {

        dispatch(fetchProducts());

        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // }
        // fetchProducts();
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    if (status === STATUSES.LOADING) {
        return (<Spinner />);
    }

    if (status === STATUSES.ERROR) {
        return (
            <img src='error.png' className='errorImage'></img>
        )
    }

    return (

        <div className='productsWrapper' >
            {status === STATUSES.IDLE ?
                (products.map((product) => {
                    return (
                        <div className='card' key={product.id}>
                            <img src={product.image} alt={product.id} />
                            <h4>{product.title}</h4>
                            <h5>{product.price}</h5>
                            <button className='btn' onClick={() => handleAdd(product)}>Add to cart</button>
                        </div>
                    )
                })) : (<div className='spinner'><Spinner /></div>)
            }
        </div>
    )
}

export default Products