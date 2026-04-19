import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './theme';
import useDarkMode from './hooks/useDarkMode';
import { I18nProvider, useI18n } from './i18n';
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
import ScrollToHash from './components/ScrollToHash';
import PageTransition from './components/PageTransition';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

const SkipLink = styled.a`
  position: absolute;
  top: -999px;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.toast + 1};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[5]}`};
  background: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.textInverse};
  border-radius: 0 0 ${({ theme }) => theme.radii.md} 0;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

  &:focus {
    top: 0;
    outline: 2px solid ${({ theme }) => theme.colors.palette.blue[200]};
    outline-offset: 2px;
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing[8]};
  right: ${({ theme }) => theme.spacing[8]};
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.textInverse};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  transform: translateY(${(props) => (props.visible ? '0' : '8px')});
  transition: all ${({ theme }) => theme.transitions.base};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: ${({ theme }) => theme.zIndex.toast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.brandHover};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }

  ${({ theme }) => theme.media.mdDown} {
    width: 42px;
    height: 42px;
    bottom: ${({ theme }) => theme.spacing[5]};
    right: ${({ theme }) => theme.spacing[5]};
  }
`;

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

function AppShell() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { mode, toggle: toggleTheme, isDark } = useDarkMode();
  const { lang, toggle: toggleLang, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.pageYOffset > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <div className="App">
          <SkipLink href="#main-content">{t.common.skipToContent}</SkipLink>
          <ScrollToTop />
          <ScrollToHash />
          <Header
            isDark={isDark}
            onToggleTheme={toggleTheme}
            lang={lang}
            onToggleLang={toggleLang}
          />
          <Routes>
            <Route path="/"          element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about"     element={<PageTransition><About /></PageTransition>} />
            <Route path="/business"  element={<PageTransition><Business /></PageTransition>} />
            <Route path="/projects"  element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/hr"        element={<PageTransition><HumanResources /></PageTransition>} />
            <Route path="/center"    element={<PageTransition><Center /></PageTransition>} />
            <Route path="/location"  element={<PageTransition><Location /></PageTransition>} />
          </Routes>
          <Footer />
          <ScrollToTopButton
            visible={showScrollButton}
            onClick={scrollToTop}
            aria-label={t.common.scrollToTop}
          >
            <ArrowUpIcon />
          </ScrollToTopButton>
        </div>
      </Router>
    </ThemeProvider>
  );
}

function App() {
  return (
    <I18nProvider>
      <AppShell />
    </I18nProvider>
  );
}

export default App;
