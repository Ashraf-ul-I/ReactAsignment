import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Animal from './components/category/animal/Animal'

import Animals from './components/category/animal/Animals'
import MainGallery from './components/MainGallery/MainGallery'

function App() {
  return (
    <>
      <div>
        <Header></Header>
        {/* <Animal /> */}
        <MainGallery />
      </div>

    </>
  )
}

export default App
