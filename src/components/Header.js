import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  height: 70px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #003366;
  a {
    text-decoration: none;
    color: inherit;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  padding: 10px 0;
  
  &:hover {
    color: #0066cc;
    &::after {
      width: 100%;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #0066cc;
    transition: width 0.3s;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  @media (max-width: 768px) {
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 2px 0;
    transition: all 0.3s;
    border-radius: 3px;
    
    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'rotate(0)'};
    }
  }
`;

const MobileMenuOverlay = styled.div`
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: opacity 0.3s;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 70px;
    left: 0;
    width: 80%;
    max-width: 300px;
    bottom: 0;
    background-color: white;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    z-index: 1000;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when location changes (user navigates to a new page)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">(주)에스앤케이이엔지</Link>
      </Logo>
      
      <Nav>
        <NavItem>
          <Link to="/about">기업소개</Link>
        </NavItem>
        <NavItem>
          <Link to="/business">사업영역</Link>
        </NavItem>
        <NavItem>
          <Link to="/projects">주요 납품 실적</Link>
        </NavItem>
        <NavItem>
          <Link to="/hr">인재채용</Link>
        </NavItem>
        <NavItem>
          <Link to="/center">고객센터</Link>
        </NavItem>
      </Nav>
      
      <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      
      <MobileMenuOverlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      
      <MobileMenu isOpen={isMenuOpen}>
        <NavItem>
          <Link to="/about">기업소개</Link>
        </NavItem>
        <NavItem>
          <Link to="/business">사업영역</Link>
        </NavItem>
        <NavItem>
          <Link to="/projects">주요 납품 실적</Link>
        </NavItem>
        <NavItem>
          <Link to="/hr">인재채용</Link>
        </NavItem>
        <NavItem>
          <Link to="/center">고객센터</Link>
        </NavItem>
      </MobileMenu>
    </HeaderContainer>
  );
}

export default Header;
