import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { useEffect } from 'react';

export function Layout() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const isDark = false; // Layout background always light theme
  const navIsDark = pathname.startsWith('/studio');

  const goEnquire = () => {
    if (pathname !== '/') {
      navigate('/#enquire');
    } else {
      document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return (
    <div className={`relative min-h-screen bg-cream text-ink`}>
      <Nav onEnquire={goEnquire} isDark={navIsDark} />
      <Outlet context={{ goEnquire }} />
      <Footer onEnquire={goEnquire} />
    </div>
  );
}

