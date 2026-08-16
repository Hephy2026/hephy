import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import { Btn, Doodle } from './shared';

const lineVariant = {
  hidden: { y: '110%' },
  show: (i) => ({
    y: '0%',
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Line({ children, i }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span variants={lineVariant} custom={i} initial="hidden" animate="show" className="block">
        {children}
      </motion.span>
    </span>
  );
}

export function Hero({ onEnquire, onCurriculum }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yMascot = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yDeco = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      data-testid="hero-section"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-mint/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-peach/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-60" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-ink/10 bg-white px-4 py-2 text-sm font-medium shadow-sticker"
          >
            <Sparkles className="h-4 w-4 text-ocean" />
            12 WEEKS · CLASSROOM-BASED LEARNING · FIGMA MASTERY
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            <Line i={0}>AI INTEGRATED</Line>
            <Line i={1}>
              <span className="text-ocean">UI/UX & PRODUCT DESIGN</span>
            </Line>
            <Line i={2}>
              for <Doodle color="#FFD166">Tech-Driven</Doodle> Roles.
            </Line>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-ink/70"
          >
            DISCOVER THE POWER OF DESIGN. Kickstart Your Design Career. LEARN • PRACTICE • CREATE • GET PLACED.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Btn as="button" onClick={onEnquire} data-testid="hero-reserve-btn" className="px-8 py-4">
              Reserve your seat <ArrowRight className="h-4 w-4" />
            </Btn>
            <Btn
              as="button"
              variant="ghost"
              onClick={onCurriculum}
              data-testid="hero-curriculum-btn"
              className="px-8 py-4"
            >
              Explore curriculum
            </Btn>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center gap-4 text-sm text-ink/60"
          >
            <div className="flex -space-x-2">
              {['#0077B6', '#FF6B6B', '#3FD98B', '#FFD166'].map((c) => (
                <span key={c} className="h-8 w-8 rounded-full border-2 border-cream" style={{ background: c }} />
              ))}
            </div>
            <span>
              <span className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-sunshine text-sunshine" />
                ))}
              </span>
              500+ designers mentored
            </span>
          </motion.div>
        </div>

        {/* Right column – mascot */}
        <motion.div style={{ y: yMascot }} className="flex justify-center">
          <img
            src="/mascot/hero.png"
            alt="Hephy mascot"
            className="w-64 drop-shadow-2xl md:w-80 lg:w-full max-w-sm"
          />
        </motion.div>
      </div>
    </section>
  );
}
