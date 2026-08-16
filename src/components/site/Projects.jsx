import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, Doodle, Chip } from './shared';

const FEATURED = {
  img: 'https://images.unsplash.com/photo-1695048132783-4b9f77bde5be?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  tag: 'Capstone spotlight',
  title: 'Reef — a mobile banking app for students',
  desc: 'A ten-week student build: from user research and journey mapping to a polished, shippable UI with a full design system.',
  chips: [['Product Design', 'ocean'], ['Design System', 'mint'], ['Prototype', 'coral']],
};

const STAGES = [
  {
    img: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    label: 'Discover',
    note: 'Interviews & synthesis',
  },
  {
    img: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    label: 'Design',
    note: 'Wireframes → hi-fi UI',
  },
  {
    img: 'https://images.unsplash.com/photo-1558655146-6c222b05fce4?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    label: 'Deliver',
    note: 'Prototype & handoff',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28" data-testid="projects-section">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-mint">What you'll build</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Real products, not <Doodle color="#FF8FA3">throwaway</Doodle> exercises.
          </h2>
        </Reveal>

        {/* Featured project card */}
        <Reveal>
          <div
            className="group grid overflow-hidden rounded-[2rem] border-2 border-ink/5 bg-white shadow-soft md:grid-cols-2"
            data-testid="featured-project"
          >
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 z-10 bg-ocean/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <img
                src={FEATURED.img}
                alt={FEATURED.title}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <Chip color="coral">{FEATURED.tag}</Chip>
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink">{FEATURED.title}</h3>
              <p className="mt-4 leading-relaxed text-ink/70">{FEATURED.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {FEATURED.chips.map(([c, col]) => (
                  <Chip key={c} color={col}>{c}</Chip>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stage cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {STAGES.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <motion.div
                className="group relative overflow-hidden rounded-3xl border-2 border-ink/5 bg-white"
                whileHover={{ y: -6 }}
                data-testid={`project-stage-${i}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.label}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 font-display text-sm font-semibold shadow-sticker">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h4 className="font-display text-xl font-semibold text-ink">{s.label}</h4>
                    <p className="text-sm text-ink/60">{s.note}</p>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-ocean/10 text-ocean">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
