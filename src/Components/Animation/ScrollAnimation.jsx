// ScrollAnimation.js
import React, { useEffect, useRef } from 'react';
import './ScrollAnimation.css';

const ScrollAnimation = ({ direction = 'left', children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef} className={`scroll-animation scroll-animation-${direction}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
