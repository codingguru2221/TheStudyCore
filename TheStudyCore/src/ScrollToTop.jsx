// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top
  }, [pathname]);

  return null;
};

export default ScrollToTop;
