import { useEffect, useRef, useCallback } from 'react';

const useScrollListener = (element, handleScroll, throttle = 300) => {
  const scrollTimer = useRef();

  const listenToScroll = useCallback(() => {
    clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      requestAnimationFrame(() => handleScroll(element));
    }, throttle);

    //eslint-disable-next-line
  }, [scrollTimer, throttle]);

  const removeScrollListener = useCallback(() => {
    if (element.current) {
      clearTimeout(scrollTimer.current);
      window.onscroll = null;
    }
  }, [scrollTimer, element]);

  useEffect(() => {
    const currentElement = element.current;

    if (currentElement) {
      //currentElement.addEventListener("scroll", listenToScroll);
      window.onscroll = () => {
        listenToScroll();
      };
    }

    return () => {
      //currentElement?.removeEventListener("scroll", listenToScroll);
      removeScrollListener();
    };
  }, [listenToScroll, removeScrollListener, element]);
};

export default useScrollListener;
