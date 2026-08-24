import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Reveal, Doodle } from './shared';

const FAQS = [
  {
    q: 'Do I need any design experience to join?',
    a: 'Not at all. Hephy is built for beginners and switchers. We start from foundations and ramp up week by week — all you need is curiosity and commitment.',
  },
  {
    q: 'Is this classroom-based or online?',
    a: 'Our core program is classroom-based at our Anna Nagar, Chennai studio for the hands-on, mentor-in-the-room experience. One batch also runs in a hybrid online + studio format.',
  },
  {
    q: 'What tools will I learn?',
    a: "Primarily Figma for UI, prototyping and design systems, alongside research and collaboration tools you'll actually use on the job.",
  },
  {
    q: 'Will I get a certificate and portfolio?',
    a: 'Yes. You graduate with a completion certificate and, more importantly, 3–4 portfolio-ready case studies plus a capstone product.',
  },
  {
    q: 'Do you help with placements?',
    a: 'We offer resume and portfolio reviews, mock interviews, and referrals through our 40+ hiring partners until you land a role.',
  },
  {
    q: 'What are the fees and payment options?',
    a: 'Share your details in the enquiry form and an advisor will walk you through the current fees, scholarships and easy EMI options.',
  },
];

function Item({ q, a, i }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <Reveal delay={i * 0.04}>
      <div className="overflow-hidden rounded-3xl border-2 border-ink/5 bg-white" data-testid={`faq-item-${i}`}>
        <button
          onClick={() => setOpen((v) => !v)}
          data-testid={`faq-toggle-${i}`}
          className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-cream"
        >
          <span className="font-display text-lg font-semibold text-ink md:text-xl">{q}</span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ocean/10 text-ocean"
          >
            <Plus className="h-5 w-5" />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="px-6 pb-6 leading-relaxed text-ink/70">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative pt-6 md:pt-8 pb-6 md:pb-9" data-testid="faq-section">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-ocean">Got doubts?</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Questions, <Doodle color="#FF6B6B">answered</Doodle>.
          </h2>
        </Reveal>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <Item key={f.q} {...f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

