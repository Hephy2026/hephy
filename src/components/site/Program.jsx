import { PenTool, Users, Rocket, HeartHandshake } from 'lucide-react';
import { Reveal, Doodle } from './shared';

const BENEFITS = [
  {
    icon: PenTool,
    title: 'Learn by making',
    body: 'No passive lectures. Every week you ship real design work — wireframes, prototypes, and polished screens.',
    bg: 'bg-mint/25',
    ring: 'text-emerald-700',
  },
  {
    icon: Users,
    title: 'Mentor in the room',
    body: 'Small classroom batches in Chennai with working designers who review your work face-to-face.',
    bg: 'bg-peach/30',
    ring: 'text-rose-600',
  },
  {
    icon: Rocket,
    title: 'Portfolio that lands',
    body: 'Graduate with 3–4 case studies recruiters actually want to read, not throwaway exercises.',
    bg: 'bg-sunshine/30',
    ring: 'text-amber-700',
  },
  {
    icon: HeartHandshake,
    title: 'Career support',
    body: 'Resume, portfolio reviews, mock interviews and referrals until you land the role.',
    bg: 'bg-ocean/10',
    ring: 'text-ocean',
  },
];

export function Program() {
  return (
    <section id="program" className="relative pt-8 md:pt-12 pb-4 md:pb-6" data-testid="program-section">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-ocean">Why this program</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Design school that feels like a{' '}
            <Doodle color="#FF6B6B">design studio</Doodle>
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div
                className={`group h-full rounded-3xl border-2 border-ink/5 ${b.bg} p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-lift`}
                data-testid={`benefit-card-${i}`}
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-sticker">
                  <b.icon className={`h-7 w-7 ${b.ring}`} />
                </div>
                <h3 className="mb-2 font-display text-2xl font-semibold text-ink">{b.title}</h3>
                <p className="leading-relaxed text-ink/70">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

