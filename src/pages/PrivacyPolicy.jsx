import { Reveal, Doodle } from '@/components/site/shared';

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-cream text-ink">
      <main className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <Reveal>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Privacy <Doodle color="#3FD98B">Policy</Doodle>
          </h1>
          <p className="text-ink/70 text-lg mb-12">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 text-lg leading-relaxed text-ink/80">
            <p className="font-medium text-ink">
              Welcome to Hephy Design ("Hephy," "we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at www.hephy.design.
            </p>
            <p>By using our website, you agree to the practices described in this Privacy Policy.</p>

            <h2 className="font-display text-3xl font-bold text-ink mt-16 mb-6">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            
            <h3 className="font-display text-xl font-bold text-ink mt-8 mb-4">Personal Information</h3>
            <p>When you contact us or submit an inquiry, you may provide information such as:</p>
            <ul className="list-disc pl-8 space-y-2 marker:text-sunshine">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Company or organization name</li>
              <li>Project details and any information you choose to share</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-ink mt-8 mb-4">Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul className="list-disc pl-8 space-y-2 marker:text-ocean">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Date and time of your visit</li>
              <li>Referring website</li>
              <li>Usage statistics</li>
            </ul>

            <h2 className="font-display text-3xl font-bold text-ink mt-16 mb-6">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-8 space-y-2 marker:text-coral">
              <li>Respond to inquiries and project requests</li>
              <li>Provide our design and creative services</li>
              <li>Improve our website and user experience</li>
              <li>Analyze website performance and traffic</li>
              <li>Communicate with you regarding our services</li>
              <li>Maintain website security and prevent misuse</li>
              <li>Comply with applicable legal obligations</li>
            </ul>

            <h2 className="font-display text-3xl font-bold text-ink mt-16 mb-6">3. Cookies and Tracking Technologies</h2>
            <p>Our website may use cookies and similar technologies to:</p>
            <ul className="list-disc pl-8 space-y-2 marker:text-mint">
              <li>Improve website functionality</li>
              <li>Remember user preferences</li>
              <li>Measure website performance</li>
              <li>Analyze visitor behavior</li>
            </ul>
            <p className="mt-6">You can control or disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.</p>

            <h2 className="font-display text-3xl font-bold text-ink mt-16 mb-6">4. Third-Party Services</h2>
            <p>We may use trusted third-party service providers to operate our website and business, including services such as:</p>
            <ul className="list-disc pl-8 space-y-2 marker:text-sunshine">
              <li>Website analytics</li>
              <li>Contact forms</li>
              <li>Hosting providers</li>
              <li>Email communication services</li>
            </ul>
            <p className="mt-6">These providers may process information only as necessary to perform services on our behalf and are expected to protect your information.</p>

            <h2 className="font-display text-3xl font-bold text-ink mt-16 mb-6">5. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal information.</p>
            <p>We may disclose information:</p>
            <ul className="list-disc pl-8 space-y-2 marker:text-ocean">
              <li>When required by law</li>
              <li>To protect our legal rights</li>
              <li>To comply with legal processes</li>
              <li>To trusted service providers who assist in operating our website or delivering our services</li>
            </ul>

            <h2 className="font-display text-3xl font-bold text-ink mt-16 mb-6">6. Data Security</h2>
            <p>We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, misuse, or disclosure.</p>
            <p>While we strive to protect your data, no method of internet transmission or electronic storage is completely secure.</p>

            <h2 className="font-display text-3xl font-bold text-ink mt-16 mb-6">7. Data Retention</h2>
            <p>We retain personal information only for as long as necessary to:</p>
            <ul className="list-disc pl-8 space-y-2 marker:text-coral">
              <li>Respond to inquiries</li>
              <li>Deliver requested services</li>
              <li>Meet legal and business obligations</li>
              <li>Resolve disputes</li>
            </ul>

            <h2 className="font-display text-3xl font-bold text-ink mt-16 mb-6">8. Your Rights</h2>
            <p>Depending on your location and applicable laws, you may have the right to:</p>
            <ul className="list-disc pl-8 space-y-2 marker:text-mint">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent where applicable</li>
              <li>Object to certain processing activities</li>
            </ul>
            <p className="mt-6">To exercise these rights, please contact us using the information below.</p>

            <h2 className="font-display text-3xl font-bold text-ink mt-16 mb-6">9. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites. We encourage you to review their privacy policies before providing personal information.</p>

            <h2 className="font-display text-3xl font-bold text-ink mt-16 mb-6">10. Children's Privacy</h2>
            <p>Our website is not intended for children under the age of 13 (or the applicable age in your jurisdiction). We do not knowingly collect personal information from children.</p>

            <h2 className="font-display text-3xl font-bold text-ink mt-16 mb-6">11. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated Effective Date.</p>
            <p>We encourage you to review this Privacy Policy periodically.</p>

            <h2 className="font-display text-3xl font-bold text-ink mt-16 mb-6">12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
            
            <div className="bg-white p-8 rounded-3xl border-2 border-ink/5 mt-8 shadow-soft inline-block min-w-[300px]">
              <h3 className="font-display text-2xl font-bold text-ink mb-4">Hephy Design</h3>
              <div className="space-y-3">
                <p className="flex flex-col sm:flex-row sm:items-center"><span className="font-medium text-ink/60 mr-2 w-20">Website:</span> <a href="https://www.hephy.design" className="text-ocean font-medium hover:underline transition-all">www.hephy.design</a></p>
                <p className="flex flex-col sm:flex-row sm:items-center"><span className="font-medium text-ink/60 mr-2 w-20">Email:</span> <a href="mailto:reachout@hephy.design" className="text-ocean font-medium hover:underline transition-all">reachout@hephy.design</a></p>
              </div>
            </div>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
