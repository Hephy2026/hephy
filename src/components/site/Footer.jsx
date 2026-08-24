import { NAV_LINKS } from './shared';
import logo04 from '@/assets/Logo-04.png';

const InstagramIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const YoutubeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);

const TwitterIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const SOCIAL_LINKS = [
  { Icon: InstagramIcon, url: 'https://www.instagram.com/hephy.academy/', label: 'Academy Instagram', sublabel: 'Academy' },
  { Icon: InstagramIcon, url: 'https://www.instagram.com/hephydesign/', label: 'Studio Instagram', sublabel: 'Studio' },
  { Icon: LinkedinIcon, url: 'https://linkedin.com/company/hephy-design/about/', label: 'LinkedIn' },
  { Icon: YoutubeIcon, url: 'https://www.youtube.com/@hephy9317', label: 'YouTube' },
  { Icon: TwitterIcon, url: 'https://x.com/HephyDesign', label: 'X (Twitter)' },
];

export function Footer({ onEnquire }) {
  return (
    <footer className="relative overflow-hidden bg-ocean text-cream" data-testid="site-footer">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo04} alt="Hephy Logo" className="h-10 w-auto" />
            </div>
            <p className="mt-4 max-w-sm leading-relaxed text-cream/70">
              At Hephy Design Minds, we blend creativity, technology, and storytelling to shape the next generation of digital creators. Our advanced career programs are designed for hands-on learning, real-world project experience, and career acceleration in the creative industry.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map(({ Icon, url, label, sublabel }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-testid={`social-${i}`}
                  className="flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-2xl bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Icon className="h-5 w-5" />
                  {sublabel && (
                    <span className="text-[10px] font-medium leading-none tracking-wide text-cream/70">
                      {sublabel}
                    </span>
                  )}
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
          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 font-display text-lg font-semibold">Contact Us</p>
              <p className="text-cream/70 text-sm mb-2"><strong className="text-cream font-medium">Chennai:</strong> A20, 1st Floor, 6th Street, A Block, Anna Nagar East, Chennai-600102</p>
              <p className="text-cream/70 text-sm"><strong className="text-cream font-medium">Bangalore:</strong> Nalapad Brigade Centre, Ground Floor, Whitefield Main Rd, Garudachar Palya, Mahadevapura, Bengaluru, Karnataka 560048</p>
            </div>
            <div className="text-cream/70 text-sm">
              <p>Ph: <a href="tel:+917978641900" className="hover:text-white transition-colors">+91 7978641900</a></p>
              <p>Email: <a href="mailto:reachout@hephy.design" className="hover:text-white transition-colors">reachout@hephy.design</a></p>
            </div>
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
          <span>© {new Date().getFullYear()} Hephy Design Minds & AVGC Pvt. Ltd. All rights reserved.</span>
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

