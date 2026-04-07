import { useEffect } from 'react';

export const useIntersectionObserver = (selector, visibleClass) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
        }
      });
    }, {
      threshold: 0.01,
    });

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [selector, visibleClass]);
};
