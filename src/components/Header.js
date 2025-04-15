import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
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
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">SK E&C</Link>
      </Logo>
      
      <Nav className="desktop-nav">
        <NavItem>
          <Link to="/about">기업소개</Link>
        </NavItem>
        <NavItem>
          <Link to="/business">사업영역</Link>
        </NavItem>
        <NavItem>
          <Link to="/hr">인재채용</Link>
        </NavItem>
        <NavItem>
          <Link to="/center">홍보센터</Link>
        </NavItem>
      </Nav>
      
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </MenuButton>
      
      <MobileMenu isOpen={isMenuOpen}>
        <NavItem>
          <Link to="/about">기업소개</Link>
        </NavItem>
        <NavItem>
          <Link to="/business">사업영역</Link>
        </NavItem>
        <NavItem>
          <Link to="/hr">인재채용</Link>
        </NavItem>
        <NavItem>
          <Link to="/center">홍보센터</Link>
        </NavItem>
      </MobileMenu>
    </HeaderContainer>
  );
}

export default Header;
