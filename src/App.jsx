import { useEffect } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'sonner';
import Landing from './pages/Landing';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Toaster richColors position="top-right" />
      <Landing />
    </>
  );
}
