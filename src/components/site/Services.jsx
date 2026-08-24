import { Megaphone, Video, Box, Film, Smartphone, TrendingUp, Globe, FileText } from 'lucide-react';
import { Reveal, Doodle } from './shared';

const SERVICES = [
  {
    icon: Megaphone,
    title: 'Branding',
    body: 'Craft a unique identity that resonates with your audience and builds lasting loyalty.',
    bg: 'bg-mint/25',
    ring: 'text-emerald-700',
  },
  {
    icon: Video,
    title: 'CGI Marketing',
    body: 'Engage customers with stunning computer-generated imagery tailored for digital campaigns.',
    bg: 'bg-peach/30',
    ring: 'text-rose-600',
  },
  {
    icon: Box,
    title: '3D Product Visualization',
    body: 'Showcase your products from every angle with photorealistic 3D renders.',
    bg: 'bg-sunshine/30',
    ring: 'text-amber-700',
  },
  {
    icon: Film,
    title: 'Animation',
    body: 'Bring your ideas to life with captivating motion graphics and custom animations.',
    bg: 'bg-ocean/10',
    ring: 'text-ocean',
  },
  {
    icon: Smartphone,
    title: 'Social Media Management',
    body: 'Grow your online presence with targeted strategies and engaging content creation.',
    bg: 'bg-peach/30',
    ring: 'text-rose-600',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    body: 'Drive traffic and conversions through data-driven performance marketing.',
    bg: 'bg-mint/25',
    ring: 'text-emerald-700',
  },
  {
    icon: Globe,
    title: 'Website Creation',
    body: 'Build responsive, high-converting websites that represent your brand perfectly.',
    bg: 'bg-ocean/10',
    ring: 'text-ocean',
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    body: 'Deliver the right message to the right audience with structured content planning.',
    bg: 'bg-sunshine/30',
    ring: 'text-amber-700',
  },
];

export function Services({ 
  subtitle = "Our Expertise", 
  titleStart = "Everything you need for", 
  doodleText = "growth",
  doodleColor = "#2AA9DB"
}) {
  return (
    <section id="services" className="relative py-6 md:py-9" data-testid="services-section">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-ocean">{subtitle}</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            {titleStart} <Doodle color={doodleColor}>{doodleText}</Doodle>
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div
                className={`group h-full rounded-3xl border-2 border-ink/5 ${s.bg} p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-lift`}
                data-testid={`service-card-${i}`}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sticker">
                  <s.icon className={`h-6 w-6 ${s.ring}`} />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

