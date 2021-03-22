import { useState, useEffect, useLayoutEffect } from 'react';

const useScroll = (element) => {
  const [scrollData, setScrollCoor] = useState({ x: 0, y: 0 });
  const [screenHeight, setScreenHeight] = useState(0);
  const [isAssigned, setIsAssigned] = useState(false);
  const [pageScrollHeight, setPageScrollHeight] = useState(0);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  useLayoutEffect(() => {
    const setter = () => {
      const x = window.scrollX;
      const y = window.scrollY;

      setScrollCoor({ x, y });
    };

    if (element.current && !isAssigned) {
      setPageScrollHeight(element.current.nextElementSibling.scrollHeight);
    }

    window.addEventListener('scroll', setter);

    return () => {
      setIsAssigned(true);
      window.removeEventListener('scroll', setter);
    };

    //eslint-disable-next-line
  }, [scrollData]);

  return [scrollData, screenHeight, pageScrollHeight];
};

export default useScroll;
