import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components'; // css 임포트 추가

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  height: 70px;
  /* 배경에 약간의 투명도와 블러 효과 추가 */
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px); /* 지원하는 브라우저에서만 동작 */
  -webkit-backdrop-filter: blur(8px); /* Safari 지원 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* 좀 더 부드러운 그림자 */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* 부드러운 전환 효과 */
`;

const Logo = styled.div`
  font-size: 22px; /* 약간 줄임 */
  font-weight: 700; /* 조금 더 강조 */
  color: #1A2B48; /* 좀 더 세련된 네이비 톤 */
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
  gap: 2.5rem; /* 간격 살짝 조정 */
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// NavItem에 isActive prop 추가
const NavItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333; /* 기본 색상 변경 */
  cursor: pointer;
  position: relative;
  padding: 10px 0;
  transition: color 0.3s ease;

  /* 활성 링크 스타일 */
  ${props =>
    props.isActive &&
    css`
      color: #0056b3; /* 활성 링크 색상 */
      font-weight: 600; /* 활성 링크 굵게 */
      &::after {
        width: 100%; /* 활성 링크에는 항상 밑줄 표시 */
      }
    `}
  
  &:hover {
    color: #0056b3; /* 호버 시 색상 변경 */
    &::after {
      width: 100%;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => (props.isActive ? '100%' : '0')}; /* 초기 밑줄 상태 */
    height: 2px;
    background-color: #0056b3; /* 밑줄 색상 */
    transition: width 0.3s ease-in-out;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  @media (max-width: 768px) {
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    text-align: center; /* 모바일 메뉴 텍스트 중앙 정렬 */
    
    &:last-child {
      border-bottom: none;
    }
    /* 모바일에서도 활성 링크 스타일 적용 */
    ${props =>
      props.isActive &&
      css`
        background-color: #f0f8ff; /* 모바일 활성 링크 배경색 (예시) */
      `}
  }
`;

const MenuButton = styled.button` /* 타입 명시 제거 */
  display: none;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
  z-index: 1001; /* 모바일 메뉴보다 위에 있도록 */
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  span {
    display: block;
    width: 25px;
    height: 2.5px; /* 약간 얇게 */
    background-color: #333;
    margin: 2.5px 0; /* 간격 조정 */
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); /* 부드러운 애니메이션 */
    border-radius: 3px;
    
    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
      transform: ${props => props.isOpen ? 'translateX(20px)' : 'translateX(0)'}; /* 사라질 때 옆으로 밀리는 효과 */
    }
    
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0)'}; /* 미세 조정 */
    }
  }
`;

const MobileMenuOverlay = styled.div` /* 타입 명시 제거 */
  display: none;
  position: fixed;
  top: 0; /* 헤더 높이만큼 내리지 않고 전체 화면 커버 */
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6); /* 좀 더 어둡게 */
  z-index: 999;
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'}; /* visibility 추가 */
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  
  @media (max-width: 768px) {
    display: block; /* 항상 block으로 두고 opacity와 visibility로 제어 */
  }
`;

const MobileMenu = styled.div` /* 타입 명시 제거 */
  display: none; /* 기본적으로 숨김 */
  
  @media (max-width: 768px) {
    display: flex; /* flex로 변경하여 내부 아이템 정렬 용이하게 */
    flex-direction: column;
    align-items: center; /* 아이템 중앙 정렬 */
    position: fixed;
    top: 70px; /* 헤더 높이 아래부터 시작 */
    left: 0;
    width: 80%;
    max-width: 280px; /* 최대 너비 살짝 줄임 */
    bottom: 0;
    background-color: white;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1); /* 그림자 강화 */
    padding: 2rem 1rem; /* 패딩 조정 */
    z-index: 1000; /* MobileMenuOverlay와 MenuButton 사이 */
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); /* 부드러운 애니메이션 */
  }
`;

// NavLink 데이터 정의 (중복 제거를 위해)
const navLinks = [
  { path: "/about", label: "기업소개" },
  { path: "/business", label: "사업영역" },
  { path: "/projects", label: "주요 납품 실적" },
  { path: "/hr", label: "인재채용" },
  { path: "/center", label: "고객센터" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
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
    <> {/* Fragment 사용으로 MobileMenuOverlay를 HeaderContainer 바깥으로 빼도 됨 (z-index 관리 용이) */}
      <HeaderContainer>
        <Logo>
          <Link to="/" className="logo-link">(주)에스앤케이이엔지</Link>
        </Logo>
        
        <Nav>
          {navLinks.map(link => (
            <NavItem key={link.path} isActive={location.pathname === link.path}>
              <Link to={link.path}>{link.label}</Link>
            </NavItem>
          ))}
        </Nav>
        
        <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="메뉴 토글" aria-expanded={isMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </MenuButton>
      </HeaderContainer>
      
      {/* MobileMenuOverlay와 MobileMenu는 HeaderContainer와 별개로 렌더링하여 z-index 충돌 방지 */}
      <MobileMenuOverlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <MobileMenu isOpen={isMenuOpen}>
        {navLinks.map(link => (
          <NavItem key={`mobile-${link.path}`} isActive={location.pathname === link.path} onClick={() => setIsMenuOpen(false)}>
            <Link to={link.path}>{link.label}</Link>
          </NavItem>
        ))}
      </MobileMenu>
    </>
  );
}

export default Header;