import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Btn, NAV_LINKS } from './shared';
import logo02 from '@/assets/Logo-02.png';

export function Nav({ onEnquire, isDark = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isLightText = isDark && !scrolled;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      data-testid="site-nav"
    >
      <div
        className={`mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-[background,box-shadow,border] duration-300 mx-4 md:mx-auto ${
          scrolled
            ? 'bg-cream/80 backdrop-blur-xl shadow-soft border-2 border-ink/5'
            : 'bg-transparent border-2 border-transparent'
        }`}
      >
        {/* Logo */}
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-2 pl-2">
          <img 
            src={logo02} 
            alt="Logo" 
            className="h-10 w-auto" 
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => {
            const isHash = l.href.startsWith('/#');
            const linkProps = {
              key: l.href,
              className: `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isLightText
                  ? 'text-cream/80 hover:bg-cream/10 hover:text-cream'
                  : 'text-ink/70 hover:bg-ink/5 hover:text-ink'
              }`
            };
            
            return (
              <Link to={l.href} data-testid={`nav-link-${l.label.toLowerCase()}`} {...linkProps}>
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <Btn
            as="button"
            onClick={onEnquire}
            data-testid="nav-enquire-btn"
            className="hidden sm:inline-flex px-6 py-3 text-sm"
          >
            Enquire Now
          </Btn>
          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="nav-mobile-toggle"
            className={`grid h-11 w-11 place-items-center rounded-full border-2 lg:hidden ${
              isLightText
                ? 'border-cream/20 bg-transparent text-cream'
                : 'border-ink/10 bg-white text-ink'
            }`}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 mt-2 rounded-3xl border-2 border-ink/5 bg-cream/95 p-4 backdrop-blur-xl shadow-soft lg:hidden"
            data-testid="nav-mobile-menu"
          >
            {NAV_LINKS.map((l) => {
              const isHash = l.href.startsWith('/#');
              const linkProps = {
                key: l.href,
                onClick: () => setOpen(false),
                className: "block rounded-2xl px-4 py-3 font-medium text-ink/80 hover:bg-ink/5"
              };

              return (
                <Link to={l.href} {...linkProps}>
                  {l.label}
                </Link>
              );
            })}
            <Btn
              as="button"
              onClick={() => { setOpen(false); onEnquire(); }}
              className="mt-2 w-full"
            >
              Enquire Now
            </Btn>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

