import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { CircleCheck, LoaderCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Reveal, Doodle, Btn } from './shared';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '27120a9d-dc2b-4662-baf6-1eb654562fa5';
const EXPERIENCE = ['Student / Fresher', 'Career switcher', 'Working professional', 'Freelancer'];
const BATCH_OPTIONS = ['Weekend Batch', 'Weekday Batch', 'Evening Batch', 'Not sure yet'];

export function Enquiry() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', experience: '', batch: '', message: '',
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill in your name, email and phone.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Enquiry from ${form.name} - Hephy Website`,
        from_name: 'Hephy Website',
        name: form.name,
        email: form.email,
        phone: form.phone,
        experience: form.experience || 'Not specified',
        batch: form.batch || 'Not specified',
        message: form.message || 'No message provided',
      });

      if (response.data.success) {
        setDone(true);
        toast.success("Thanks! We'll reach out within 24 hours. 🎉");
        setForm({ name: '', email: '', phone: '', experience: '', batch: '', message: '' });
      } else {
        toast.error(response.data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    'w-full rounded-2xl border-2 border-ink/10 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-ocean';

  return (
    <section id="enquire" className="relative bg-white py-4 md:py-6" data-testid="enquiry-section">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left info column */}
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-coral">Take action</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Let's <Doodle color="#0096C7">talk</Doodle> about your goals.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink/70">
            Tell us a little about yourself and a program advisor will get in touch to help you pick the right batch.
          </p>

          <div className="mt-8 space-y-4">
            {/* Email */}
            <a
              href="mailto:reachout@hephy.design"
              data-testid="contact-email"
              className="flex items-center gap-4 rounded-2xl border-2 border-ink/5 bg-cream p-4 transition-colors hover:border-ocean/30"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ocean/10 text-ocean">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-ink/50">Email</span>
                <span className="font-medium text-ink">reachout@hephy.design</span>
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+917978641900"
              data-testid="contact-phone"
              className="flex items-center gap-4 rounded-2xl border-2 border-ink/5 bg-cream p-4 transition-colors hover:border-coral/30"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-coral/10 text-coral">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-ink/50">Phone</span>
                <span className="font-medium text-ink">+91 7978641900</span>
              </span>
            </a>

            {/* Address – Chennai */}
            <div className="flex items-center gap-4 rounded-2xl border-2 border-ink/5 bg-cream p-4">
              <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-mint/20 text-emerald-700">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-ink/50">Studio — Chennai</span>
                <span className="font-medium text-ink">A20, 1st Floor, 6th Street, A Block, Anna Nagar East, Chennai-600102</span>
              </span>
            </div>

            {/* Address – Bangalore */}
            <div className="flex items-center gap-4 rounded-2xl border-2 border-ink/5 bg-cream p-4">
              <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-mint/20 text-emerald-700">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-ink/50">Studio — Bangalore</span>
                <span className="font-medium text-ink">Nalapad Brigade Centre, Ground Floor, Whitefield Main Rd, Garudachar Palya, Mahadevapura, Bengaluru, Karnataka 560048</span>
              </span>
            </div>
          </div>

          <img
            src="https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206897/hephy/mascot/mascot2.png"
            alt="Hephy mascot"
            className="mt-8 hidden w-40 animate-float lg:block"
          />
        </Reveal>

        {/* Right form column */}
        <Reveal delay={0.1}>
          {done ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-full flex-col items-center justify-center rounded-[2rem] border-2 border-mint/40 bg-mint/10 p-12 text-center"
              data-testid="enquiry-success"
            >
              <CircleCheck className="mb-4 h-16 w-16 text-emerald-600" />
              <h3 className="font-display text-3xl font-semibold text-ink">You're on the list! 🎉</h3>
              <p className="mt-3 max-w-sm text-ink/70">
                We've received your enquiry. A Hephy advisor will reach out within 24 hours.
              </p>
              <Btn as="button" variant="ghost" onClick={() => setDone(false)} data-testid="enquiry-again-btn" className="mt-6">
                Submit another enquiry
              </Btn>
            </motion.div>
          ) : (
            <form
              onSubmit={submit}
              className="rounded-[2rem] border-2 border-ink/5 bg-cream p-7 shadow-soft md:p-9"
              data-testid="enquiry-form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink/70">Full name *</label>
                  <input
                    data-testid="enquiry-name"
                    className={inputCls}
                    placeholder="Aarthi Kumar"
                    value={form.name}
                    onChange={set('name')}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink/70">Phone *</label>
                  <input
                    data-testid="enquiry-phone"
                    className={inputCls}
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={set('phone')}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-medium text-ink/70">Email *</label>
                <input
                  data-testid="enquiry-email"
                  type="email"
                  className={inputCls}
                  placeholder="aarthi@example.com"
                  value={form.email}
                  onChange={set('email')}
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink/70">Your background</label>
                  <select
                    data-testid="enquiry-experience"
                    className={inputCls}
                    value={form.experience}
                    onChange={set('experience')}
                  >
                    <option value="">Select…</option>
                    {EXPERIENCE.map((e) => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink/70">Preferred batch</label>
                  <select
                    data-testid="enquiry-batch"
                    className={inputCls}
                    value={form.batch}
                    onChange={set('batch')}
                  >
                    <option value="">Select…</option>
                    {BATCH_OPTIONS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-medium text-ink/70">Anything else?</label>
                <textarea
                  data-testid="enquiry-message"
                  className={`${inputCls} min-h-[120px] resize-none`}
                  placeholder="Your goals, timeline, questions…"
                  value={form.message}
                  onChange={set('message')}
                />
              </div>

              <button
                type="submit"
                data-testid="enquiry-submit"
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ocean px-8 py-4 font-display font-semibold text-white shadow-soft transition-[transform,shadow] hover:-translate-y-1 hover:shadow-lift disabled:opacity-60"
              >
                {loading ? (
                  <LoaderCircle className="h-5 w-5 animate-spin" />
                ) : (
                  "Send my enquiry"
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

