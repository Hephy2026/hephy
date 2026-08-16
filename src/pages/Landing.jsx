import { Nav } from '@/components/site/Nav';
import { Hero } from '@/components/site/Hero';
import { Program } from '@/components/site/Program';
import { Curriculum } from '@/components/site/Curriculum';
import { Projects } from '@/components/site/Projects';
import { Career } from '@/components/site/Career';
import { Batches } from '@/components/site/Batches';
import { CTABand } from '@/components/site/CTABand';
import { Enquiry } from '@/components/site/Enquiry';
import { FAQ } from '@/components/site/FAQ';
import { Footer } from '@/components/site/Footer';
import { WavyDivider } from '@/components/site/shared';

export default function Landing() {
  const goEnquire = () => {
    document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' });
  };
  const goCurriculum = () => {
    document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-cream">
      <Nav onEnquire={goEnquire} />
      <main>
        <Hero onEnquire={goEnquire} onCurriculum={goCurriculum} />
        <Program />
        <WavyDivider from="#FDFBF7" to="#FFFFFF" />
        <Curriculum />
        <WavyDivider from="#FFFFFF" to="#FDFBF7" />
        <Projects />
        <WavyDivider from="#FDFBF7" to="#FFFFFF" />
        <Career />
        <WavyDivider from="#FFFFFF" to="#FDFBF7" />
        <Batches onEnquire={goEnquire} />
        <CTABand onEnquire={goEnquire} />
        <Enquiry />
        <FAQ />
      </main>
      <Footer onEnquire={goEnquire} />
    </div>
  );
}
