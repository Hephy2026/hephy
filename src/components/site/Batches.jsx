import { motion } from 'framer-motion';
import { MapPin, Laptop } from 'lucide-react';
import { Reveal, Doodle, Btn } from './shared';

const BATCHES = [
  {
    month: 'Weekend Batch',
    location: 'Anna Nagar, Chennai',
    mode: 'Online + Studio',
    status: 'Enrolling',
    pill: 'bg-white/60 text-emerald-700',
    card: 'bg-mint/25 border-ink/5',
    iconLoc: 'text-emerald-700',
    iconMode: 'text-emerald-700',
    text: 'text-ink',
    subtext: 'text-ink/70',
  },
  {
    month: 'Weekday Batch',
    location: 'Anna Nagar, Chennai',
    mode: 'Online + Studio',
    status: 'Forming',
    pill: 'bg-white/60 text-amber-700',
    card: 'bg-sunshine/30 border-ink/5',
    iconLoc: 'text-amber-700',
    iconMode: 'text-amber-700',
    text: 'text-ink',
    subtext: 'text-ink/70',
  },
  {
    month: 'Evening Batch',
    location: 'Anna Nagar, Chennai',
    mode: 'Online + Studio',
    status: 'Waitlist',
    pill: 'bg-white/60 text-rose-600',
    card: 'bg-peach/30 border-ink/5',
    iconLoc: 'text-rose-600',
    iconMode: 'text-rose-600',
    text: 'text-ink',
    subtext: 'text-ink/70',
  },
];

export function Batches({ onEnquire }) {
  return (
    <section id="batches" className="relative pb-4 md:pb-6" data-testid="batches-section">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-ocean">Upcoming batches</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Pick a rhythm that <Doodle color="#FFD166">fits your life</Doodle>.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {BATCHES.map((b, i) => (
            <Reveal key={b.month} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`flex h-full flex-col rounded-3xl border-2 p-7 shadow-soft ${b.card}`}
                data-testid={`batch-card-${i}`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className={`font-display text-xl font-semibold ${b.text}`}>{b.month}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${b.pill}`}>
                    {b.status}
                  </span>
                </div>
                <ul className={`space-y-3 ${b.subtext}`}>
                  <li className="flex items-center gap-3">
                    <MapPin className={`h-5 w-5 ${b.iconLoc}`} />
                    {b.location}
                  </li>
                  <li className="flex items-center gap-3">
                    <Laptop className={`h-5 w-5 ${b.iconMode}`} />
                    {b.mode}
                  </li>
                </ul>
                <Btn
                  as="button"
                  onClick={onEnquire}
                  variant="ghost"
                  data-testid={`batch-enquire-${i}`}
                  className="mt-7 w-full"
                >
                  Enquire about this batch
                </Btn>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

