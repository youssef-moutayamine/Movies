import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import Navbar from './layouts/navbar';
import { MovieProvider } from './context/MovieContext';

const App = () => {
  return (
    <MovieProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </MovieProvider>
  );
};

export default App;