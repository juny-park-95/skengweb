import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Projects from './pages/Projects';
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

// ScrollToTopButton component
const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #0066cc;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.visible ? '1' : '0'};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  
  &:hover {
    background-color: #0055aa;
    transform: translateY(-3px);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
  }
`;

// Arrow Up SVG icon
const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7"/>
  </svg>
);

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hr" element={<HumanResources />} />
          <Route path="/center" element={<Center />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        <Footer />
        <ScrollToTopButton 
          visible={showScrollButton} 
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
        >
          <ArrowUpIcon />
        </ScrollToTopButton>
      </div>
    </Router>
  );
}

export default App;
