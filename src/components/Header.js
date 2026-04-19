import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ThemeToggle from './common/ThemeToggle';

const NAV_LINKS = [
  { path: '/about',    label: '기업소개' },
  { path: '/business', label: '사업영역' },
  { path: '/projects', label: '주요 납품 실적' },
  { path: '/hr',       label: '인재채용' },
  { path: '/center',   label: '고객센터' },
];

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 clamp(1rem, 5vw, 2.5rem);
  height: ${({ theme }) => theme.layout.headerHeight};
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(15, 23, 42, 0.82)' : 'rgba(255, 255, 255, 0.82)'};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base};
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  color: ${({ theme }) => theme.colors.text};

  a { color: inherit; }

  ${({ theme }) => theme.media.mdDown} {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};

  ${({ theme }) => theme.media.mdDown} {
    display: none;
  }
`;

const NavItem = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textMuted};
  position: relative;
  padding: ${({ theme }) => theme.spacing[3]} 0;
  transition: color ${({ theme }) => theme.transitions.fast};

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.colors.brand};
      font-weight: ${theme.typography.fontWeight.semibold};
      &::after { width: 100%; }
    `}

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    background: ${({ theme }) => theme.colors.brand};
    transition: width ${({ theme }) => theme.transitions.base};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.brand};
    &::after { width: 100%; }
  }

  ${({ theme }) => theme.media.mdDown} {
    padding: ${({ theme }) => theme.spacing[4]} 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.bgMuted};
    width: 100%;
    text-align: center;

    &:last-child { border-bottom: none; }

    ${({ $active, theme }) =>
      $active &&
      css`
        background: ${theme.colors.brandSoft};
      `}
  }
`;

const MenuButton = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.header + 2};
  border-radius: ${({ theme }) => theme.radii.full};

  ${({ theme }) => theme.media.mdDown} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.bgMuted};
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.text};
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:nth-child(1) {
      transform: ${({ $open }) => ($open ? 'rotate(45deg) translate(5px, 5px)' : 'none')};
    }
    &:nth-child(2) {
      opacity: ${({ $open }) => ($open ? 0 : 1)};
      transform: ${({ $open }) => ($open ? 'translateX(16px)' : 'none')};
    }
    &:nth-child(3) {
      transform: ${({ $open }) => ($open ? 'rotate(-45deg) translate(5px, -5px)' : 'none')};
    }
  }
`;

const MobileOverlay = styled.div`
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.5);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: ${({ theme }) => theme.zIndex.header};

  ${({ theme }) => theme.media.mdDown} {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: ${({ theme }) => theme.layout.headerHeight};
  left: 0;
  bottom: 0;
  width: 78%;
  max-width: 300px;
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[4]}`};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transform: translateX(${({ $open }) => ($open ? '0' : '-100%')});
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: ${({ theme }) => theme.zIndex.header + 1};

  ${({ theme }) => theme.media.mdDown} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

function Header({ isDark, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  return (
    <>
      <HeaderContainer>
        <Logo>
          <Link to="/" aria-label="홈으로 이동">(주)에스앤케이이엔지</Link>
        </Logo>

        <Nav aria-label="주 메뉴">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.path;
            return (
              <NavItem key={link.path} $active={active}>
                <Link to={link.path} aria-current={active ? 'page' : undefined}>
                  {link.label}
                </Link>
              </NavItem>
            );
          })}
        </Nav>

        <NavActions>
          {onToggleTheme && <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />}
          <MenuButton
            $open={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="메뉴 토글"
            aria-expanded={isMenuOpen}
          >
            <span /><span /><span />
          </MenuButton>
        </NavActions>
      </HeaderContainer>

      <MobileOverlay $open={isMenuOpen} onClick={() => setIsMenuOpen(false)} aria-hidden="true" />
      <MobileMenu $open={isMenuOpen} aria-label="모바일 메뉴" aria-hidden={!isMenuOpen}>
        {NAV_LINKS.map((link) => {
          const active = location.pathname === link.path;
          return (
            <NavItem
              key={`m-${link.path}`}
              $active={active}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to={link.path} aria-current={active ? 'page' : undefined}>
                {link.label}
              </Link>
            </NavItem>
          );
        })}
      </MobileMenu>
    </>
  );
}

export default Header;
