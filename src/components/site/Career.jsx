import { motion } from 'framer-motion';
import { Reveal, Doodle } from './shared';

const STATS = [
  { big: '500+', label: 'Learners mentored', bg: 'bg-ocean', fg: 'text-white', span: 'sm:col-span-2' },
  { big: '92%', label: 'Placed within 6 months', bg: 'bg-sunshine', fg: 'text-ink', span: '' },
  { big: '3–4', label: 'Portfolio case studies', bg: 'bg-mint', fg: 'text-ink', span: '' },
  { big: '40+', label: 'Hiring partners', bg: 'bg-coral', fg: 'text-white', span: 'sm:col-span-2' },
];

const SKILLS = [
  'Figma', 'Design Systems', 'UX Research', 'Prototyping',
  'Interaction Design', 'Usability Testing', 'Wireframing', 'Product Thinking',
];

export function Career() {
  return (
    <section id="outcomes" className="relative bg-white py-20 md:py-28" data-testid="career-section">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sunshine">The career advantage</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Graduate <Doodle color="#3FD98B">job-ready</Doodle>, not just certified.
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className={s.span}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`flex h-full flex-col justify-between rounded-3xl ${s.bg} ${s.fg} p-8 shadow-soft`}
                data-testid={`stat-${i}`}
              >
                <span className="font-display text-5xl font-bold tracking-tight md:text-6xl">{s.big}</span>
                <span className="mt-4 text-lg font-medium opacity-90">{s.label}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-3xl border-2 border-ink/5 bg-cream p-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-ink/50">Skills you'll master</p>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border-2 border-ink/10 bg-white px-4 py-2 font-display font-medium text-ink shadow-sticker"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
