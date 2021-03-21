import React, { useState, useLayoutEffect } from 'react';

const useScroll = () => {
  const [scrollCoor, setScrollCoor] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const setter = () => {
      const x = window.scrollX;
      const y = window.scrollY;

      setScrollCoor({ x, y });
    };

    window.addEventListener('scroll', setter);

    return () => window.removeEventListener('scroll', setter);
  }, [scrollCoor]);

  return scrollCoor;
};

export default useScroll;
