import { useEffect, useRef, useState } from 'react';

export default function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { threshold = 0.15, once = true, rootMargin = '0px 0px -50px 0px' } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.unobserve(node);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [threshold, once, rootMargin]);

  return [ref, visible];
}
