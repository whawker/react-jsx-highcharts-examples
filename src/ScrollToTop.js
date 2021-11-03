import { useEffect } from 'react';
import { useNavigationType, useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const navigationType = useNavigationType();
  const { pathname } = useLocation();
  
  useEffect(() => {
    if (navigationType === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }, [navigationType, pathname]);

  return children;
};

export default ScrollToTop;
