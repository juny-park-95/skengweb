// src/components/PageTransition.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

/* ───────── 애니메이션 정의 ───────── */

const homeFadeIn = keyframes`
  0%   { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1);   }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

/* ───────── 컴포넌트 ───────── */

function PageTransition({ children }) {
  const location   = useLocation();
  const isHomePage = location.pathname === '/';
  const [fromLogo, setFromLogo] = useState(false);

  /* 1) 로고 클릭 감지 */
  useEffect(() => {
    const logoEl = document.querySelector('.logo-link');
    if (!logoEl) return;

    const handleClick = () => setFromLogo(true);
    logoEl.addEventListener('click', handleClick);

    return () => logoEl.removeEventListener('click', handleClick);
  }, []);

  /* 2) 홈 애니메이션 종료 후 flag 초기화 */
  useEffect(() => {
    if (fromLogo && isHomePage) {
      const id = setTimeout(() => setFromLogo(false), 900); // 0.85 s + 여유
      return () => clearTimeout(id);
    }
  }, [fromLogo, isHomePage]);

  /* 3) 렌더링 분기 */
  if (isHomePage && fromLogo) {
    return (
      <HomeLogoContainer key="home-logo">
        {children}
      </HomeLogoContainer>
    );
  }

  return (
    <Container key={location.pathname} $skip={isHomePage}>
      {children}
    </Container>
  );
}

export default PageTransition;

/* ───────── styled-components ───────── */

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 70px);

  /* 홈 화면에서는 다시 페이드인하지 않음 */
  ${({ $skip }) => !$skip && css`
    animation: ${fadeIn} 0.5s ease-out;
  `}
`;

const HomeLogoContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 70px);
  animation: ${homeFadeIn} 0.85s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: opacity, transform;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
`;
