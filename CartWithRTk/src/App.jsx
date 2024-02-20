// App.js
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Carts from './pages/Carts'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'
function App() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(prevCount => prevCount + 1);
  }

  return (
    <div className='App'>

      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path='/' element={<Home addToCart={addToCart} />} /> {/* Pass addToCart function as prop */}
          <Route path='/cart' element={<Carts />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
