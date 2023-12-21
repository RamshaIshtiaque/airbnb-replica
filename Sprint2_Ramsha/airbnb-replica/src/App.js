import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import TopPage from './components/TopPage';



function App() {
  return (
    <div className="app">
    <Router>
      <TopPage/>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      
      <Footer />
    </Router>
  </div>
);
};
export default App;
