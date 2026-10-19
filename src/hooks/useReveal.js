import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    // Observe the element itself and all children with .reveal class
    observer.observe(node);
    const children = node.querySelectorAll('.reveal');
    children.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
