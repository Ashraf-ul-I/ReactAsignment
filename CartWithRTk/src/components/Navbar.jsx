import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const Navbar = () => {
    const dispatch = useDispatch();
    const getData = useSelector((fullState) => fullState.cart) //kun objhect take subsribe korte chacchi..means jokhoni change hoye jabe tokhoni automatic ekhane data peye jabo amra

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className='logo'>Redux Store</span>
            <div>
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/cart'>Cart</Link>
                <span className='cartCount'>
                    Cart items:{getData.length}
                </span>
            </div>
        </div>
    )
}

export default Navbar