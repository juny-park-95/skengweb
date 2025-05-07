import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 해시 링크(#id)를 처리하는 컴포넌트
 * 페이지 로드 또는 location 변경 시 해시가 있으면 해당 요소로 스크롤
 */
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // 페이지가 완전히 로드된 후 스크롤 처리
    const handleHashScroll = () => {
      if (location.hash) {
        // 해시에서 '#' 제거
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          // 요소로 스크롤
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // 약간의 지연 후 스크롤 처리 (페이지 렌더링이 완료된 후)
    setTimeout(handleHashScroll, 300);

    // Clean up
    return () => {
      // 필요한 정리 작업이 있다면 여기에 작성
    };
  }, [location]);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
}

export default ScrollToHash;
