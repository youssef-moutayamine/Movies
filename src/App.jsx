import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import Navbar from './layouts/navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/:title" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;