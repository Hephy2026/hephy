import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal, Doodle, WavyDivider } from '@/components/site/shared';
import { Services as ServicesGrid } from '@/components/site/Services';
import { Box, PlayCircle, MonitorPlay, Layers, MessageSquare } from 'lucide-react';
import { AutoVideo } from '@/components/site/AutoVideo';




// ── Cloudinary asset URLs (served from CDN) ──────────────────────────────────
const heroBg  = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206919/hephy/services/hero_bg.mp4';
const vid52   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206921/hephy/services/vid_52.mp4';
const vid53   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206923/hephy/services/vid_53.mp4';
const vid54   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206925/hephy/services/vid_54.mp4';
const vid55   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206927/hephy/services/vid_55.mp4';
const vid56   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206928/hephy/services/vid_56.mp4';
const vid57   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206930/hephy/services/vid_57.mp4';
const vid58   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206933/hephy/services/vid_58.mp4';
const vid59   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206934/hephy/services/vid_59.mp4';
const vid60   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206937/hephy/services/vid_60.mp4';
const vid61   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206939/hephy/services/vid_61.mp4';
const vid62   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206941/hephy/services/vid_62.mp4';
const vid64   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206944/hephy/services/vid_64.mp4';
const vid65   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206946/hephy/services/vid_65.mp4';
const vid66   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206947/hephy/services/vid_66.mp4';
const vid67   = 'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206949/hephy/services/vid_67.mp4';
const img1    = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206951/hephy/services/img_1.png';
const img2    = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206952/hephy/services/img_2.png';
const img3    = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206953/hephy/services/img_3.jpg';
const img4    = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206955/hephy/services/img_4.jpg';
const img5    = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206956/hephy/services/img_5.jpg';
const img6    = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206957/hephy/services/img_6.jpg';
const img7    = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206958/hephy/services/img_7.jpg';
const img8    = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206960/hephy/services/img_8.jpg';
const img9    = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206961/hephy/services/img_9.jpg';
const img10   = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206962/hephy/services/img_10.jpg';
const img11   = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206963/hephy/services/img_11.jpg';
const img12   = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206964/hephy/services/img_12.jpg';
const img13   = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206966/hephy/services/img_13.jpg';
const img14   = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206967/hephy/services/img_14.jpg';
const img15   = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206968/hephy/services/img_15.jpg';
const img16   = 'https://res.cloudinary.com/fkmi7uzw/image/upload/v1787206969/hephy/services/img_16.jpg';
// ─────────────────────────────────────────────────────────────────────────────
const COLLAGE_ITEMS = [
  // Row 1
  { type: 'vid',  src: vid52,  cols: 1, rows: 2 },
  { type: 'vid',  src: vid53,  cols: 2, rows: 1 },
  { type: 'text', text: 'CGI',                    fontSize: '3.5vw',  cols: 1, rows: 1 },
  { type: 'vid',  src: vid54,  cols: 2, rows: 1 },

  // Row 2
  { type: 'text', text: 'CREATIVE\nDESIGN',       fontSize: '1.6vw',  cols: 1, rows: 1 },
  { type: 'vid',  src: vid55,              cols: 2, rows: 1 },
  { type: 'text', text: 'BRANDING\nADVERTISEMENT', fontSize: '1.1vw', cols: 1, rows: 1 },
  { type: 'vid',  src: vid56,              cols: 1, rows: 2 },

  // Row 3
  { type: 'text', text: '3D PRODUCT\nVISUALIZATION', fontSize: '1.3vw', cols: 1, rows: 1 },
  { type: 'vid',  src: vid59,  cols: 1, rows: 2 },
  { type: 'text', text: 'SOCIAL MEDIA\nMANAGEMENT', fontSize: '1.8vw',  cols: 2, rows: 1 },
  { type: 'vid',  src: vid60,  cols: 1, rows: 2 },

  // Row 4
  { type: 'vid',  src: vid57,  cols: 1, rows: 1 },
  { type: 'vid',  src: vid58,  cols: 2, rows: 1 },
  { type: 'text', text: 'DIGITAL\nMARKETING',     fontSize: '1.2vw',  cols: 1, rows: 1 },

  // Row 5–6
  { type: 'vid',  src: vid67,  cols: 2, rows: 2 },
  { type: 'vid',  src: vid66,  cols: 2, rows: 2 },
  { type: 'text', text: 'ANIMATION',               fontSize: '1.8vw',  cols: 1, rows: 2, vertical: true },

  // Row 6 fills
  { type: 'vid',  src: vid62,  cols: 1, rows: 2 },

  // Row 7
  { type: 'vid',  src: vid61,  cols: 2, rows: 1 },
  { type: 'text', text: '3D PRODUCT\nDESIGN',     fontSize: '2vw',    cols: 2, rows: 1 },
  { type: 'vid',  src: vid65,  cols: 1, rows: 1 },
  { type: 'text', text: 'DIGITAL\nEXPERIENCES',      fontSize: '1.4vw',  cols: 1, rows: 1 },
];


const GALLERY = [
  img7, img8, img9, img10, img11, img12
];

const CAROUSEL_VIDEOS = [
  'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787207356/hephy/videos/convo2.mp4',
  'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206738/hephy/videos/ice.mp4',
  'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206757/hephy/videos/necklace_shot.mp4',
  'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206780/hephy/videos/necklace_ad.mp4',
  'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787207401/hephy/videos/sample_1.mp4',
  'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787207452/hephy/videos/sample_2.mp4',
  'https://res.cloudinary.com/fkmi7uzw/video/upload/v1787206893/hephy/videos/untitled.mp4'
];

const VISIONARY_DESIGN = [
  { 
    title: '3D Product\nVisualization', 
    body: 'Highly Detailed\nFlexible Presentations\nVisual Accuracy', 
    gradient: 'from-[#1DBA2E] to-[#148F20]',
    icon: Box,
    video: 'https://video.wixstatic.com/video/65be00_f7e39a2477d144cd814437f7c3a02196/360p/mp4/file.mp4' 
  },
  { 
    title: 'Custom\nAnimation', 
    body: 'Increased Engagement\nDynamic Storytelling\nBrand Appeal', 
    gradient: 'from-[#C1D91A] to-[#9CAE10]',
    icon: PlayCircle,
    video: 'https://video.wixstatic.com/video/11062b_d8a14b48151a42e5a4421864ab921ee1/480p/mp4/file.mp4' 
  },
  { 
    title: 'Explainer\nVideos', 
    body: 'Clear Communication\nEasy Understanding\nEngaging Content', 
    gradient: 'from-[#EA8404] to-[#B86602]',
    icon: MonitorPlay,
    video: 'https://video.wixstatic.com/video/65be00_a4916679d8704788a4e9206f6f1970a8/360p/mp4/file.mp4' 
  },
  { 
    title: '360°\nProduct Views', 
    body: 'Enhanced Transparency\nDetailed Interaction\nUser Empowerment', 
    gradient: 'from-[#DE0011] to-[#A3000C]',
    icon: Layers,
    video: 'https://video.wixstatic.com/video/65be00_042edfc301074a588d8acdda3b6cfa70/360p/mp4/file.mp4' 
  },
];

export default function ServicesPage() {
  const { goEnquire } = useOutletContext();

  return (
    <div className="w-full">
      <main className="overflow-hidden bg-cream text-ink">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-4 md:px-6 mb-16 pt-32 pb-12 overflow-hidden border-b border-ink/5">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <AutoVideo
            src={heroBg}
            className="w-full h-full object-cover object-[center_20%] origin-[50%_10%] scale-105"
          />
          {/* Overlay for text blending */}
          <div className="absolute inset-0 bg-ink/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <Reveal className="text-left w-full md:w-1/2">
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-4 tracking-tight text-white drop-shadow-2xl">
              Welcome<br />
              <span className="italic font-light text-cream/90">to Hephy</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="w-full md:w-1/2 flex justify-start md:justify-end">
            <div className="flex flex-col items-start md:items-end text-left md:text-right gap-6">
              <p className="text-white/90 max-w-sm text-lg md:text-xl font-medium drop-shadow-md leading-relaxed">
                Where innovation meets creativity. We build intelligent solutions and immersive digital experiences for the future.
              </p>
              <button onClick={goEnquire} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-ink hover:bg-cream hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <span className="font-bold text-sm uppercase tracking-wider">Let's Chat!</span>
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

        {/* Master Collage Grid */}
        <section className="px-4 mb-8 md:mb-12 w-full overflow-hidden">
          <style>{`
            .master-collage {
              display: grid;
              grid-template-columns: repeat(6, 1fr);
              grid-auto-rows: calc((100vw - 2rem) / 6);
              gap: 0;
            }
          `}</style>
          <div className="master-collage">
            {COLLAGE_ITEMS.map((item, i) => {
              const colSpan = item.cols || 1;
              const rowSpan = item.rows || 1;
              const gridStyle = {
                gridColumn: `span ${colSpan}`,
                gridRow: `span ${rowSpan}`,
              };
              if (item.type === 'text') {
                return (
                  <div
                    key={i}
                    style={{ ...gridStyle, fontSize: item.fontSize, writingMode: item.vertical ? 'vertical-rl' : undefined, letterSpacing: item.vertical ? '0.25em' : undefined }}
                    className="flex flex-col justify-center items-center text-center p-1 uppercase font-display font-bold tracking-widest leading-tight overflow-hidden bg-cream"
                  >
                    <span className="whitespace-pre-line text-ink/90 drop-shadow-sm">{item.text}</span>
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  style={gridStyle}
                  className="overflow-hidden relative bg-ink/10 group"
                >
                  <AutoVideo
                    src={item.src}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* Auto Carousel */}
        <section className="mb-16 md:mb-20 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-cream to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-cream to-transparent pointer-events-none"></div>
          
          <motion.div 
            className="flex gap-4 md:gap-6 items-center"
            animate={{ x: [0, -1920] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...CAROUSEL_VIDEOS, ...CAROUSEL_VIDEOS].map((vidUrl, i) => (
              <div key={i} className="flex-none w-48 md:w-64 lg:w-72 aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden bg-ink/5 relative group cursor-pointer shadow-lg">
                <AutoVideo
                  src={vidUrl}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </section>

        <div className="bg-cream text-ink">

          {/* Reused Services Grid */}
          <div>
            <ServicesGrid 
              subtitle="Let Us Handle" 
              titleStart="Your" 
              doodleText="Branding" 
              doodleColor="#FFD23F" 
            />
          </div>

          {/* Visionary Design Showcase */}
          <section className="px-6 py-6 md:py-9 bg-cream text-ink relative overflow-hidden">
            {/* Abstract background blobs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-ocean/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-coral/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
            
            <div className="mx-auto max-w-7xl relative z-10">
              <div className="text-center mb-20">
                <Reveal>
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-ink/5 border border-ink/10 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(0,0,0,0.05)] transition-colors hover:bg-ink/10 cursor-default">
                    <span className="w-2 h-2 rounded-full bg-sunshine animate-pulse" />
                    <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.15em] text-ink">
                      Get 1 Month Free With Annual Plan
                    </h3>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-ink via-ink/80 to-ink/40 pb-4">
                    Visionary <span className="italic font-light">Design</span>
                  </h2>
                </Reveal>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 h-full">
                {VISIONARY_DESIGN.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <Reveal key={card.title} delay={i * 0.15} className="h-full">
                      <div className="group relative h-[450px] lg:h-[550px] w-full rounded-[2.5rem] overflow-hidden cursor-pointer isolate shadow-2xl">
                        {/* Background Video & Gradients */}
                        <div className="absolute inset-0 z-0 bg-ink">
                          <AutoVideo
                            src={card.video}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent transition-opacity duration-500" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-end">
                          <div className="transform transition-transform duration-500 md:group-hover:-translate-y-4">
                            {/* Floating Icon */}
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white mb-6 shadow-xl transition-transform duration-500 md:group-hover:scale-110 md:group-hover:bg-white/20">
                              <Icon strokeWidth={1.5} className="w-7 h-7 md:w-8 md:h-8" />
                            </div>
                            
                            {/* Title */}
                            <h4 className="font-display text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold leading-tight text-white mb-4 whitespace-pre-line drop-shadow-md">
                              {card.title}
                            </h4>
                            
                            {/* Expanding Body Content (Always expanded on mobile, hover on desktop) */}
                            <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out md:group-hover:grid-rows-[1fr]">
                              <div className="overflow-hidden">
                                <div className="pt-2 md:pt-4 flex flex-col gap-2 md:gap-3">
                                  {card.body.split('\n').map((line, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-white/90">
                                      <div className="w-1.5 h-1.5 rounded-full bg-sunshine" />
                                      <span className="text-sm md:text-base font-medium tracking-wide">{line}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Subtle Border Glow */}
                        <div className="absolute inset-0 z-20 border-2 border-white/0 rounded-[2.5rem] transition-colors duration-500 md:group-hover:border-white/20 pointer-events-none" />
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              {/* Book a Call CTA */}
              <Reveal delay={0.3} className="mt-20 flex justify-center">
                <button onClick={goEnquire} className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-ocean hover:bg-[#208ab5] text-white font-bold tracking-wider uppercase text-sm md:text-base transition-all hover:scale-105 shadow-[0_0_40px_rgba(42,169,219,0.3)]">
                  <span>Book a call</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </Reveal>
            </div>
          </section>

          {/* Skills Program CTA */}
          <section className="relative py-6 md:py-9 px-4 md:px-6 overflow-hidden bg-[#f8fafc]">
            {/* Massive Soft Background Orbs (Mint & Lavender) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[140%] bg-[#d9f5eb] blur-[150px] rounded-full" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[140%] bg-[#e9e4fa] blur-[150px] rounded-full" />
            </div>

            <Reveal className="relative z-10 mx-auto max-w-6xl">
              <div className="bg-gradient-to-br from-[#e0f7f2]/80 to-[#e4edf9]/80 border border-white/60 backdrop-blur-3xl rounded-[3rem] p-10 md:p-24 text-center shadow-[0_30px_80px_rgba(0,0,0,0.12)] relative overflow-hidden group isolate">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 border border-white/50 backdrop-blur-md mb-8 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#f6d365] animate-pulse" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-ink/80">Enrollment Open</span>
                </div>

                <h2 className="mb-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-ink drop-shadow-sm">
                  Take Your Skills To The <br className="hidden md:block" />
                  Next Level With The <br className="hidden lg:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20d0a8] to-[#12b3e8] block mt-2 md:mt-4">Hephy Skills Program</span>
                </h2>
                
                <p className="text-ink/70 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-14 leading-relaxed">
                  Unlock your creative potential and master industry-leading tools with our expert-led, hands-on mentorship.
                </p>

                <button 
                  onClick={goEnquire}
                  className="group relative inline-flex h-14 md:h-16 items-center justify-center overflow-hidden rounded-full bg-white px-10 md:px-14 font-display text-sm md:text-base font-bold tracking-[0.2em] text-ink uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Join Us To Level Up
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 z-0 h-full w-full translate-y-[50%] bg-[#dcf3ee] transition-transform duration-500 group-hover:translate-y-0" />
                </button>
              </div>
            </Reveal>
          </section>

        </div>
      </main>
    </div>
  );
}

