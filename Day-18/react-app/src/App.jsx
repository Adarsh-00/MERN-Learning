import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Feedback from './components/Feedback';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
