import { MessageCircle, Link2, Share2 } from 'lucide-react';
import { NAV_LINKS } from './shared';

const SOCIAL_ICONS = [MessageCircle, Link2, Share2];

export function Footer({ onEnquire }) {
  return (
    <footer className="relative overflow-hidden bg-ocean text-cream" data-testid="site-footer">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 64 64" className="h-10 w-10">
                <rect x="2" y="2" width="60" height="60" rx="18" fill="#2AA9DB"/>
                <path d="M16 14 C13 14 12 17 12 20 L12 46 C12 49 14 50 17 50 L21 50 C24 50 25 48 25 45 L25 19 C25 16 23 14 20 14 Z" fill="#FFFFFF" opacity=".95"/>
                <path d="M35 15 L35 49" stroke="#2B2560" strokeWidth="7" strokeLinecap="round"/>
                <path d="M12 31 Q32 24 52 33" stroke="#2B2560" strokeWidth="3" strokeDasharray="2 6" fill="none" strokeLinecap="round"/>
              </svg>
              <span className="font-display text-3xl font-bold">Hephy</span>
            </div>
            <p className="mt-4 max-w-xs leading-relaxed text-cream/70">
              Chennai's playful, mentor-led UI/UX & Product Design program. Learn by building real products.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_ICONS.map((Ic, i) => (
                <a
                  key={i}
                  href="#top"
                  data-testid={`social-${i}`}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Ic className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="mb-4 font-display text-lg font-semibold">Explore</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-cream/70 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="mb-4 font-display text-lg font-semibold">Get started</p>
            <p className="text-cream/70">A20, 1st Floor, 6th Street, A Block, Anna Nagar East, Chennai-600102</p>
            <p className="text-cream/70">hello@hephy.design</p>
            <button
              onClick={onEnquire}
              data-testid="footer-enquire-btn"
              className="mt-4 rounded-full bg-sunshine px-6 py-3 font-display font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Enquire Now
            </button>
          </div>
        </div>

        {/* Big watermark */}
        <div className="mt-14 select-none text-center">
          <span className="font-display text-[18vw] font-bold leading-none tracking-tight text-white/10 md:text-[12rem]">
            Hephy
          </span>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-cream/60 md:flex-row">
          <span>© {new Date().getFullYear()} Hephy Design School. All rights reserved.</span>
          <span>Made with 🐙 in Chennai</span>
        </div>
      </div>
    </footer>
  );
}
