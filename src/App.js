import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import HumanResources from './pages/HumanResources';
import Center from './pages/Center';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/hr" element={<HumanResources />} />
          <Route path="/center" element={<Center />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
