import { useEffect, useRef } from 'react';

/**
 * AutoVideo – plays only when ≥ 20% of the element is in the viewport.
 * Accepts the same props as a normal <video> element.
 */
export function AutoVideo({ className, src, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      className={className}
      {...props}
    />
  );
}
