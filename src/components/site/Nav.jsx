import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Btn, NAV_LINKS } from './shared';

export function Nav({ onEnquire }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-2 pl-2">
          <img 
            src="https://static.wixstatic.com/media/65be00_3fca1b2e668a4ec5b262b48aa6e3b66d~mv2.png/v1/fill/w_182,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo-02.png" 
            alt="Logo" 
            className="h-10 w-auto" 
          />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
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
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink/10 bg-white lg:hidden"
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
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-medium text-ink/80 hover:bg-ink/5"
              >
                {l.label}
              </a>
            ))}
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
