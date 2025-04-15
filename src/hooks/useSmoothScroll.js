import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Custom hook to smoothly scroll to top when route changes
function useSmoothScroll() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // When route changes, smoothly scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
}

export default useSmoothScroll;
