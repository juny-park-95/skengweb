import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import HumanResources from './pages/HumanResources';
import Center from './pages/Center';
import Location from './pages/Location';
import Footer from './components/Footer';

// ScrollToTop component that uses smooth scrolling
function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/hr" element={<HumanResources />} />
          <Route path="/center" element={<Center />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
