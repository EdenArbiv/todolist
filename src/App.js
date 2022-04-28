import React from 'react';
import { BrowserRouter as Router, Routes , Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import ToDo from './components/ToDo';

export default function () {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path="/todo" element={<ToDo/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/" element={<Navigate replace to='/todo'/>}/>
      </Routes>
    
      <Footer/>
    </div>
    </Router>
  )
}
