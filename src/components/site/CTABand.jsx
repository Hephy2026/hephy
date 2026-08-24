import { motion } from 'framer-motion';
import { Btn, Marquee } from './shared';

export function CTABand({ onEnquire }) {
  return (
    <section className="relative py-8" data-testid="cta-band">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ocean px-8 py-10 text-center text-white shadow-lift md:px-16 md:py-16 grain">
          {/* decorative blobs */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -right-8 bottom-0 h-52 w-52 rounded-full bg-white/10" />

          {/* Mascot */}
          <div className="relative mb-8 flex justify-center">
            <motion.img
              src="https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206897/hephy/mascot/mascot2.png"
              alt="Hephy mascot"
              className="w-40 drop-shadow-2xl md:w-52"
              animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <h2 className="relative mx-auto max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Ready to design your career?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/80">
            Seats are limited each batch to keep mentoring personal. Grab yours before it fills up.
          </p>
          <div className="relative mt-8 flex justify-center">
            <Btn
              as="button"
              variant="coral"
              onClick={onEnquire}
              data-testid="ctaband-enquire-btn"
              className="px-9 py-4 text-lg"
            >
              Reserve my seat
            </Btn>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="mt-14 border-y-2 border-ink/5 bg-cream py-4 text-ink">
        <Marquee items={['Figma', 'UX Research', 'Design Systems', 'Prototyping', 'Portfolio', 'Mentorship', 'Chennai']} />
      </div>
    </section>
  );
}

