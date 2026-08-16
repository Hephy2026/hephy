import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { Reveal, Doodle, Btn } from './shared';

const BATCHES = [
  {
    month: 'Weekend Batch',
    start: 'Starts 12 July',
    time: 'Sat–Sun · 10am–1pm',
    mode: 'Anna Nagar, Chennai',
    status: 'Enrolling',
    pill: 'bg-mint text-emerald-900',
  },
  {
    month: 'Weekday Batch',
    start: 'Starts 4 August',
    time: 'Mon/Wed/Fri · 7–9pm',
    mode: 'Anna Nagar, Chennai',
    status: 'Forming',
    pill: 'bg-sunshine text-amber-900',
  },
  {
    month: 'Evening Batch',
    start: 'Starts 1 September',
    time: 'Tue/Thu · 6:30–9pm',
    mode: 'Online + Studio',
    status: 'Waitlist',
    pill: 'bg-peach text-rose-900',
  },
];

export function Batches({ onEnquire }) {
  return (
    <section id="batches" className="relative py-20 md:py-28" data-testid="batches-section">
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
                className="flex h-full flex-col rounded-3xl border-2 border-ink/5 bg-white p-7 shadow-soft"
                data-testid={`batch-card-${i}`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-xl font-semibold text-ink">{b.month}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${b.pill}`}>
                    {b.status}
                  </span>
                </div>
                <ul className="space-y-3 text-ink/75">
                  <li className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-ocean" />
                    {b.start}
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-coral" />
                    {b.time}
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-mint" />
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
