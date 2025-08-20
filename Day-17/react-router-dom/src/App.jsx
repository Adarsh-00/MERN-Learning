import React from 'react';
import About from './About'
import Contact from './Contect';
import Navbar from './Navbar';
import Feedback from './Feedback';
import NotFound from './NotFound';
import Home from './Home';
import { Link, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
