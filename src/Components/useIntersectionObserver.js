import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = ({ threshold = 0.1, multiple = 1 }) => {
  const elementsRef = useRef([]);
  const [inViewElements, setInViewElements] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewElements((prev) => [...prev, entry.target]);
          }
        });
      },
      { threshold }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [threshold]);

  return [elementsRef, inViewElements];
};

export default useIntersectionObserver;
