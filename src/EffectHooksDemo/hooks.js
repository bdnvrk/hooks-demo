import { useState, useEffect } from 'react';

const getSize = () => {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  };
};

export const useInnerWindowSize = () => {
  const [innerWindowSize, setInnerWindowSize] = useState(getSize());


  const handleResize = () => {
    setInnerWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return innerWindowSize;
};

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const { innerWidth } = useInnerWindowSize();

  useEffect(() => {
    if (innerWidth <= 400) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  })

  return isMobile;
}