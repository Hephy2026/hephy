import { motion } from 'framer-motion';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Studio', href: '/studio' },
  { label: 'Program', href: '/#program' },
  { label: 'Curriculum', href: '/#curriculum' },
  { label: 'Batches', href: '/#batches' },
];

export function Reveal({ children, delay = 0, y = 26, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Doodle({ children, color = '#FFD166', className = '' }) {
  return (
    <span className={`doodle-underline ${className}`}>
      {children}
      <svg viewBox="0 0 200 12" preserveAspectRatio="none" fill="none">
        <path
          d="M2 8C40 3 80 3 110 6C140 9 175 5 198 4"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Btn({ as = 'a', variant = 'primary', className = '', children, ...props }) {
  const Comp = motion[as] || motion.a;
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display font-600 text-base tracking-tight cursor-pointer select-none';
  const styles = {
    primary: 'bg-ocean text-white shadow-soft hover:shadow-lift',
    coral: 'bg-coral text-white shadow-soft hover:shadow-lift',
    ghost: 'bg-white text-ink border-2 border-ink/10 hover:border-ocean/40',
    dark: 'bg-ink text-cream hover:bg-ocean',
  };
  return (
    <Comp
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function Chip({ children, color = 'ocean' }) {
  const map = {
    ocean: 'bg-ocean/10 text-ocean',
    coral: 'bg-coral/15 text-coral',
    mint: 'bg-mint/20 text-emerald-700',
    sunshine: 'bg-sunshine/25 text-amber-700',
    peach: 'bg-peach/20 text-rose-600',
  };
  return (
    <span className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium ${map[color]}`}>
      {children}
    </span>
  );
}

export function WavyDivider({ from = '#FDFBF7', to = '#FFFFFF', flip = false }) {
  return (
    <div className="relative -mb-px leading-[0]" style={{ background: from }}>
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={`block w-full h-[60px] md:h-[90px] ${flip ? 'rotate-180' : ''}`}
      >
        <path d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,45 L1440,90 L0,90 Z" fill={to} />
      </svg>
    </div>
  );
}

export function Marquee({ items, className = '' }) {
  const row = [...items, ...items];
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div className="flex shrink-0 animate-marquee gap-10 pr-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-3xl md:text-5xl font-semibold">
            {t}
            <span className="text-sunshine">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

