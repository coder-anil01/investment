import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './component/ScrollToTop';
import Homepage from './pages/Homepage';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
