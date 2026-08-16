import { motion } from 'framer-motion';
import { Reveal, Doodle, Chip } from './shared';

const MODULES = [
  {
    no: '01',
    title: 'UI Design',
    weeks: 'Week 1-2',
    desc: 'Visual hierarchy, typography, colour, grids, components and polished interfaces.',
    chips: [['Visual Hierarchy', 'ocean'], ['Typography', 'coral'], ['Colour Theory', 'mint']],
  },
  {
    no: '02',
    title: 'UX Research & AI Tools',
    weeks: 'Week 3-4',
    desc: 'User needs, problem discovery, and leveraging AI tools for better insights.',
    chips: [['User Interviews', 'sunshine'], ['AI Tools', 'peach'], ['Personas', 'ocean']],
  },
  {
    no: '03',
    title: 'Prototyping & Design Systems',
    weeks: 'Week 5-7',
    desc: 'Build reusable components, scalable visual languages, and interactive prototypes.',
    chips: [['Figma', 'coral'], ['Design Systems', 'mint'], ['Prototyping', 'ocean']],
  },
  {
    no: '04',
    title: 'Mobile & Web App Design',
    weeks: 'Week 8-9',
    desc: 'Design responsive interfaces across mobile and desktop experiences.',
    chips: [['Mobile Apps', 'sunshine'], ['Web Apps', 'peach'], ['Responsive', 'mint']],
  },
  {
    no: '05',
    title: 'Product Thinking & Portfolio',
    weeks: 'Week 10-12',
    desc: 'Connect user needs to business goals, build your portfolio, and get placement assistance.',
    chips: [['Product Thinking', 'ocean'], ['Portfolio', 'coral'], ['Placements', 'mint']],
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="relative bg-white py-20 md:py-28" data-testid="curriculum-section">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-coral">The curriculum</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Twelve weeks, five <Doodle color="#0096C7">chapters</Doodle>, one portfolio.
          </h2>
        </Reveal>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[27px] top-4 bottom-4 hidden w-1 rounded-full bg-gradient-to-b from-ocean via-mint to-coral md:block" />

          <div className="space-y-6">
            {MODULES.map((m, i) => (
              <Reveal key={m.no} delay={i * 0.06}>
                <div className="relative flex flex-col gap-5 md:flex-row md:items-start" data-testid={`module-${i}`}>
                  {/* Step number */}
                  <motion.div
                    whileInView={{ scale: [0.6, 1] }}
                    viewport={{ once: true }}
                    className="z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ocean font-display text-lg font-bold text-white shadow-soft"
                  >
                    {m.no}
                  </motion.div>

                  {/* Card */}
                  <div className="flex-1 rounded-3xl border-2 border-ink/5 bg-cream p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-2xl font-semibold text-ink">{m.title}</h3>
                      <span className="text-sm font-bold uppercase tracking-widest text-ink/40">{m.weeks}</span>
                    </div>
                    <p className="mb-5 max-w-2xl leading-relaxed text-ink/70">{m.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {m.chips.map(([c, col]) => (
                        <Chip key={c} color={col}>{c}</Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
