// App.js
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Carts from './pages/Carts'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'
function App() {


  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Carts />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
