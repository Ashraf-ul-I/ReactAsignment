import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainGallery from './components/MainGallery/MainGallery';
import Animal from './components/category/animal/Animal';
import Nature from './components/category/nature/Nature';
import Animals from './components/category/animal/Animals';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainGallery />} />
          <Route path="/animal/:galleryId" element={<Animals />} />
          {/* <Route path="/nature/:galleryId" element={<Nature />} /> */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
