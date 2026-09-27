import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Zap,
  Clock,
  Video,
  ArrowRight,
  CheckCircle2,
  Check,
  Lock,
  Flame,
  Brain,
  Box,
  Palette,
  Camera,
  Layers,
  Sun,
  Aperture,
  Trophy,
  ChevronDown,
  ChevronsLeftRight,
  MoveHorizontal
} from 'lucide-react';

// =========================================================================
// CASHFREE CHECKOUT CONFIGURATION
// Replace this with your actual Cashfree payment form URL!
// =========================================================================
const CASHFREE_CHECKOUT_URL = "[PASTE CASHFREE PAYMENT CHECKOUT LINK HERE]";

// Mascot image path - works with public folder or imported asset
const TOBO_MASCOT_SRC = "/mascot2.jpg";

export default function WorkshopLanding() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDraggingSlider, setIsDraggingSlider] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const sliderContainerRef = useRef(null);

  const handleSliderMove = (clientX) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(5, Math.min(95, position));
    setSliderPosition(clamped);
  };

  const handleTouchMove = (e) => {
    if (!isDraggingSlider || e.touches.length === 0) return;
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingSlider) return;
    handleSliderMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDraggingSlider(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  const handleCtaClick = (e) => {
    if (!CASHFREE_CHECKOUT_URL || CASHFREE_CHECKOUT_URL.includes("PASTE CASHFREE PAYMENT CHECKOUT LINK HERE")) {
      e.preventDefault();
      const pricingSection = document.getElementById('pricing-section');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = CASHFREE_CHECKOUT_URL;
    }
  };

  const handleCopyCheckoutUrl = () => {
    navigator.clipboard.writeText(CASHFREE_CHECKOUT_URL);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Do I need previous 3D experience?",
      a: "No. The workshop is designed to be beginner-friendly."
    },
    {
      q: "Do I need expensive software?",
      a: "No. The workshop should explain accessible modern tools and workflows."
    },
    {
      q: "Is this live?",
      a: "Yes. It is a live online workshop."
    },
    {
      q: "How long is the workshop?",
      a: "2.5 hours."
    },
    {
      q: "Will there be hands-on activities?",
      a: "Yes. Participants will follow along with guided activities."
    },
    {
      q: "Who is this workshop for?",
      a: "Students, beginners, designers, architects, creators and anyone interested in 3D + AI."
    },
    {
      q: "How do I register?",
      a: "Click the Reserve My Seat — ₹199 button and complete the secure payment checkout."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030508] text-slate-100 font-sans antialiased selection:bg-[#00F0FF] selection:text-[#030508] overflow-x-hidden relative">
      
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.14),transparent_70%)] blur-3xl opacity-60"></div>
        <div className="absolute top-[35%] -left-32 w-[650px] h-[650px] bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.16),transparent_70%)] blur-3xl opacity-40"></div>
        <div className="absolute top-[68%] -right-32 w-[700px] h-[700px] bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.12),transparent_70%)] blur-3xl opacity-40"></div>
        
        {/* Cyber Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-80" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* Top Urgency Ticker Banner */}
      <aside aria-label="Workshop Urgency Banner" className="relative z-50 bg-gradient-to-r from-[#070A10] via-[#0D111A] to-[#070A10] border-b border-cyan-500/20 py-2.5 px-4 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium tracking-wide">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] font-semibold text-[11px] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping"></span>
            Next Live Cohort Filling Fast
          </span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-slate-300">2.5 Hours Immersive Session on Zoom</span>
          <span className="text-slate-500 hidden md:inline">•</span>
          <span className="text-[#00F0FF] font-semibold hidden md:inline">Special Workshop Offer: ₹199 only</span>
        </div>
      </aside>

      {/* Header / Navigation Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#030508]/85 border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo + Micro Mascot Companion */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#00F0FF] via-indigo-600 to-[#8B5CF6] p-[1.5px] shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#030508] rounded-[10px] flex items-center justify-center overflow-hidden">
                <svg className="w-6 h-6 text-[#00F0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#070A10] border border-[#00F0FF] overflow-hidden shadow-sm flex items-center justify-center">
                <img 
                  src={TOBO_MASCOT_SRC} 
                  alt="Tobo Micro" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://placehold.co/40x40/070A10/00F0FF?text=Tobo'; }}
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-xl leading-none text-white flex items-center gap-0.5">
                HEPHY<span className="text-[#00F0FF]">.</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-slate-400 font-semibold uppercase">ACADEMY</span>
            </div>
          </a>

          {/* Quick Stats Badges */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider text-slate-300 uppercase">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-[#00F0FF]" />
              <span>100% Live Workshop</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#8B5CF6]" />
              <span>2.5 Hours Duration</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Companion: Tobo (8 Tentacles)</span>
            </div>
          </div>

          {/* Header Action Button */}
          <div>
            <a 
              href={CASHFREE_CHECKOUT_URL}
              onClick={handleCtaClick}
              className="relative group overflow-hidden rounded-xl p-[1px] inline-block focus:outline-none focus:ring-2 focus:ring-[#00F0FF]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] via-indigo-600 to-[#8B5CF6] rounded-xl group-hover:opacity-100 transition-opacity"></span>
              <span className="relative block px-5 py-2.5 rounded-[11px] bg-[#070A10] group-hover:bg-[#0D111A] text-white font-bold text-xs sm:text-sm tracking-wide transition-colors">
                RESERVE MY SEAT — ₹199
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO SECTION */}
      <section className="relative z-10 pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Headlines */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-200">
                LIVE • 2.5 HOURS • BEGINNER FRIENDLY
              </span>
            </div>

            <h1 className="font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white">
              FROM ZERO TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#00F0FF]">3D</span>
            </h1>

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-[#8B5CF6]">
              Create. AI. Light. Render.
            </h2>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Build your first 3D design and discover how AI is transforming the modern 3D workflow — in one immersive live workshop.
            </p>

            {/* Visual Transformation Steps Flow */}
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-3 rounded-2xl bg-[#070A10]/90 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-300 shadow-inner">
              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[#00F0FF] font-bold">IDEA</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-200">3D MODEL</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-violet-400">MATERIAL</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-amber-300">LIGHT</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-white border border-cyan-400/30">FINAL RENDER</span>
            </div>
          </div>

          {/* Hero Grid: 3D Viewport with Tobo Mascot (Left 7) + Pricing Card (Right 5) */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* 3D Scene Viewport featuring Tobo & 3D Elements */}
            <div className="lg:col-span-7 relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00F0FF] via-indigo-600 to-pink-500 rounded-3xl blur-xl opacity-35 group-hover:opacity-60 transition duration-1000"></div>
              
              <div className="relative rounded-2xl border border-slate-700/80 overflow-hidden bg-[#0D111A]/80 backdrop-blur-xl shadow-2xl">
                
                <div className="relative min-h-[480px] sm:min-h-[520px] bg-gradient-to-b from-[#0D111A] via-[#070A10] to-[#030508] flex flex-col justify-between p-4 sm:p-6 overflow-hidden">
                  
                  {/* Top HUD */}
                  <div className="flex items-center justify-between z-30">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                      <span className="ml-2 text-[11px] font-mono text-[#00F0FF] font-semibold px-2 py-0.5 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/20">
                        HEPHY_STUDIO // TOBO 3D WORKSPACE
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1 text-[#00F0FF]"><Zap className="w-3.5 h-3.5" /> 120 FPS</span>
                      <span className="text-slate-600">|</span>
                      <span className="text-emerald-400">AI RAYTRACING ACTIVE</span>
                    </div>
                  </div>

                  {/* Mascot Center Stage with 3D Elements */}
                  <div className="relative w-full flex-1 flex items-center justify-center py-6 select-none">
                    
                    {/* Perspective Pedestal Base */}
                    <div className="absolute bottom-2 w-4/5 h-32 border border-[#00F0FF]/25 rounded-[50%] bg-gradient-to-t from-cyan-600/20 to-transparent blur-[0.5px]"></div>
                    
                    {/* Concentric Holographic Orbit Rings */}
                    <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-violet-500/30 border-dashed animate-spin" style={{ animationDuration: '30s' }}></div>
                    <div className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-[#00F0FF]/30 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>

                    {/* Interactive 3D Wireframe Cube Badge */}
                    <div className="absolute left-6 sm:left-10 top-16 z-20 hidden sm:flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-[#030508]/80 border-2 border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center transform hover:rotate-12 transition-transform">
                        <Box className="w-6 h-6 text-[#00F0FF] animate-pulse" />
                      </div>
                      <span className="block text-[10px] font-mono text-[#00F0FF] mt-2 bg-[#030508]/80 px-2 py-0.5 rounded border border-[#00F0FF]/30">Cube_01 [Wire]</span>
                    </div>

                    {/* 3D Tool HUD Chips */}
                    <div className="absolute right-4 sm:right-8 top-16 z-20 hidden sm:flex flex-col gap-2">
                      <div className="px-3 py-1.5 rounded-xl bg-[#030508]/90 border border-violet-500/40 backdrop-blur-md shadow-lg flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-ping"></span>
                        <span className="text-[11px] font-mono text-violet-300 font-bold">Shader: Glass PBR</span>
                      </div>
                      <div className="px-3 py-1.5 rounded-xl bg-[#030508]/90 border border-[#00F0FF]/40 backdrop-blur-md shadow-lg flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-[#00F0FF]" />
                        <span className="text-[11px] font-mono text-cyan-300 font-bold">Tentacles: 8 Rigged</span>
                      </div>
                    </div>

                    {/* Tobo Speech Bubble */}
                    <div className="absolute -top-3 sm:top-1 z-30">
                      <div className="px-4 py-2 rounded-2xl bg-[#030508]/90 border-2 border-[#00F0FF] text-xs font-bold text-white shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center gap-2 backdrop-blur-xl">
                        <span className="text-base">🐙</span>
                        <span>Tobo says: <strong className="text-[#00F0FF]">Let's build in 3D + AI! 🚀</strong></span>
                      </div>
                    </div>

                    {/* Mascot Showcase Container */}
                    <div className="relative z-10 flex flex-col items-center mt-6">
                      <div className="absolute inset-0 rounded-full shadow-[0_0_70px_20px_rgba(0,240,255,0.3),0_0_100px_40px_rgba(139,92,246,0.25)] scale-90 -z-10"></div>
                      
                      <div className="relative w-64 h-64 sm:w-80 sm:h-80 group transition-transform duration-500 hover:scale-105">
                        <img 
                          src={TOBO_MASCOT_SRC} 
                          alt="Tobo the Hephy Academy 3D Mascot - 8 Tentacles Intelligent Octopus" 
                          className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,240,255,0.45)]"
                          onError={(e) => { e.target.src = 'https://placehold.co/400x400/030508/00F0FF?text=Tobo+3D+Octopus'; }}
                        />

                        <div className="absolute bottom-0 inset-x-0 text-center">
                          <span className="inline-block px-3 py-0.5 rounded-full bg-[#030508]/90 border border-cyan-500/40 text-[10px] font-mono text-[#00F0FF] shadow-md backdrop-blur-md">
                            X: 0.00 Y: +1.42 Z: -0.15 | 8-OCTO RIG
                          </span>
                        </div>
                      </div>

                      <div className="mt-2 flex items-center gap-2 px-3 py-1 rounded-full bg-[#030508]/80 border border-cyan-500/30 text-[11px] font-mono text-slate-300 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>Tobo • Creative Tech Companion (8 Tentacles)</span>
                      </div>
                    </div>

                  </div>

                  {/* Viewport Bottom Status Bar */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-3 z-30">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span> Mode: Live Guided Creation
                    </span>
                    <span className="text-slate-400 font-medium">Hephy Interactive Engine v4.2</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Pricing Card (Right 5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-6 sm:p-8 border-2 border-cyan-500/40 bg-[#0D111A]/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,240,255,0.25)]">
                
                {/* Offer Ribbon */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6] text-[#030508] font-black text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" /> LIMITED-TIME WORKSHOP OFFER
                  </span>
                </div>

                <div className="mt-2 text-center border-b border-slate-800/80 pb-5">
                  <h3 className="text-xl sm:text-2xl font-black text-white">Live 3D + AI Masterclass</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">2.5 Hours Immersive Hands-On Experience</p>
                </div>

                {/* Price Display */}
                <div className="my-6 text-center">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Exclusive Workshop Price</div>
                  <div className="flex items-baseline justify-center gap-3">
                    <span className="text-slate-500 text-lg sm:text-xl line-through font-semibold">₹3,999</span>
                    <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#00F0FF] tracking-tight">₹199</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">95% OFF</span>
                  </div>
                  <div className="mt-2 text-[11px] text-[#00F0FF]/90 font-medium">
                    Instant Joining Confirmation • Complete Workflow Breakdown
                  </div>
                </div>

                {/* Bullet Inclusions */}
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 mb-6">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00F0FF] flex-shrink-0" />
                    <span>2.5 Hours Live Guided Creation with Instructors</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00F0FF] flex-shrink-0" />
                    <span>Modern AI-powered 3D workflow tools demonstrated</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00F0FF] flex-shrink-0" />
                    <span>Interactive Q&A and direct project feedback</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <a 
                  href={CASHFREE_CHECKOUT_URL}
                  onClick={handleCtaClick}
                  className="block w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#00F0FF] via-sky-400 to-[#8B5CF6] hover:from-cyan-300 hover:to-violet-400 text-[#030508] font-black text-center text-base sm:text-lg tracking-wide uppercase shadow-[0_0_35px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] focus:outline-none"
                >
                  RESERVE MY SEAT — ₹199
                </a>

                {/* Microcopy */}
                <div className="mt-4 text-center">
                  <p className="text-[11px] sm:text-xs text-slate-400 flex items-center justify-center gap-2 font-medium">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Secure checkout • Live online workshop • Beginner friendly</span>
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    Filling fast from Meta / Instagram
                  </span>
                  <span className="font-mono text-slate-300">Cohort: <strong className="text-white">89% Booked</strong></span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: CREATE SOMETHING REAL */}
      <section className="relative z-10 py-16 lg:py-24 border-t border-slate-900 bg-[#070A10]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00F0FF]">Hands-On Immersion</span>
            <h2 className="font-black text-3xl sm:text-5xl text-white mt-2">
              You won't just watch. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#00F0FF]">You'll CREATE.</span>
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg">
              This is a hands-on creative experience designed to take you through the complete 3D workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {/* Card 01 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-[#0D111A]/80 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#00F0FF]">01</span>
                  <span className="p-2 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]"><Brain className="w-5 h-5" /></span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">01 — THINK</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Understand how professional 3D designers approach a concept.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-400 flex items-center justify-between">
                <span>Concept Vision</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00F0FF] hidden md:block" />
              </div>
            </div>

            {/* Card 02 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-[#0D111A]/80 backdrop-blur-md flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-indigo-400">02</span>
                  <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400"><Box className="w-5 h-5" /></span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">02 — BUILD</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Turn simple shapes into a complete 3D object or environment.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-indigo-400/80 flex items-center justify-between">
                <span>Geometry & Forms</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400 hidden md:block" />
              </div>
            </div>

            {/* Card 03 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-[#0D111A]/80 backdrop-blur-md flex flex-col justify-between hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#8B5CF6]">03</span>
                  <span className="p-2 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6]"><Sparkles className="w-5 h-5" /></span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">03 — AI POWER</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Discover how modern AI tools can accelerate the 3D workflow.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-violet-400 flex items-center justify-between">
                <span>AI Acceleration</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8B5CF6] hidden md:block" />
              </div>
            </div>

            {/* Card 04 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-[#0D111A]/80 backdrop-blur-md flex flex-col justify-between hover:border-pink-500/50 hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-pink-400">04</span>
                  <span className="p-2 rounded-lg bg-pink-500/10 text-pink-400"><Palette className="w-5 h-5" /></span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">04 — STYLE</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Add materials, textures, lighting and atmosphere.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-pink-400/80 flex items-center justify-between">
                <span>PBR & Lighting</span>
                <ArrowRight className="w-3.5 h-3.5 text-pink-400 hidden md:block" />
              </div>
            </div>

            {/* Card 05 */}
            <div className="p-6 rounded-2xl border border-cyan-500/40 bg-[#0D111A]/90 backdrop-blur-md flex flex-col justify-between shadow-[0_0_30px_rgba(0,240,255,0.2)]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#00F0FF]">05</span>
                  <span className="p-2 rounded-lg bg-[#00F0FF]/20 text-[#00F0FF]"><Camera className="w-5 h-5" /></span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">05 — RENDER</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Turn your work into a polished final visual.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-[#00F0FF] flex items-center gap-1">
                <span>Final Masterpiece</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: WHAT YOU WILL LEARN */}
      <section className="relative z-10 py-16 lg:py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Curriculum Breakdown</span>
            <h2 className="font-black text-3xl sm:text-5xl text-white mt-2">
              What You'll Experience in 2.5 Hours
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg">
              Focused, practical, and highly visual learning designed to get you creating immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0D111A]/80 backdrop-blur-md hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/20 flex items-center justify-center text-[#00F0FF] mb-5 text-2xl">
                🧱
              </div>
              <h3 className="font-bold text-xl text-white mb-2">3D DESIGN FUNDAMENTALS</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Understand the building blocks of 3D design and modeling.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0D111A]/80 backdrop-blur-md hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] mb-5 text-2xl">
                🤖
              </div>
              <h3 className="font-bold text-xl text-white mb-2">AI + 3D WORKFLOW</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                See how AI can accelerate ideation and asset creation.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0D111A]/80 backdrop-blur-md hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 text-2xl">
                🎨
              </div>
              <h3 className="font-bold text-xl text-white mb-2">MATERIALS & TEXTURES</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Learn how materials, colors and surface properties transform a model.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0D111A]/80 backdrop-blur-md hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 text-2xl">
                💡
              </div>
              <h3 className="font-bold text-xl text-white mb-2">LIGHTING</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Understand how lighting changes mood, realism and visual quality.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0D111A]/80 backdrop-blur-md hover:border-rose-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-5 text-2xl">
                📷
              </div>
              <h3 className="font-bold text-xl text-white mb-2">CAMERA & COMPOSITION</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Learn how professional designers frame a 3D scene.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0D111A]/80 backdrop-blur-md hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 text-2xl">
                ✨
              </div>
              <h3 className="font-bold text-xl text-white mb-2">FINAL RENDER</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Bring everything together into a polished visual.
              </p>
            </div>

          </div>

          {/* Section CTA */}
          <div className="mt-14 text-center">
            <div className="inline-block p-[1.5px] rounded-2xl bg-gradient-to-r from-[#00F0FF] via-[#8B5CF6] to-pink-500 shadow-[0_0_35px_rgba(0,240,255,0.3)]">
              <div className="bg-[#0D111A] px-8 py-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-white font-bold text-base">Transform into a modern 3D + AI creator</div>
                  <div className="text-xs text-slate-400">Join Tobo and the Hephy team in this live session</div>
                </div>
                <a 
                  href={CASHFREE_CHECKOUT_URL}
                  onClick={handleCtaClick}
                  className="px-6 py-3 rounded-xl bg-[#00F0FF] hover:bg-cyan-300 text-[#030508] font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                >
                  RESERVE MY SEAT — ₹199
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: THE WORKSHOP JOURNEY */}
      <section className="relative z-10 py-16 lg:py-24 border-t border-slate-900 bg-[#070A10]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00F0FF]">Step-by-Step Flow</span>
            <h2 className="font-black text-3xl sm:text-5xl text-white mt-2">
              The Workshop Journey
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg">
              Follow the exact progression from raw idea to publishable visual.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 relative">
            
            {/* Step 01 */}
            <div className="p-4 rounded-xl border border-slate-800 bg-[#0D111A]/80 text-center flex flex-col items-center">
              <span className="px-2 py-0.5 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] font-mono text-[11px] font-bold mb-3">01 — IDEA</span>
              <div className="w-full aspect-square rounded-lg bg-[#030508] border border-slate-800 flex items-center justify-center p-3 mb-3">
                <Brain className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="font-bold text-white text-sm">Idea</h4>
              <p className="text-[11px] text-slate-400 mt-1">Concept & Design</p>
            </div>

            {/* Step 02 */}
            <div className="p-4 rounded-xl border border-slate-800 bg-[#0D111A]/80 text-center flex flex-col items-center">
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono text-[11px] font-bold mb-3">02 — MODEL</span>
              <div className="w-full aspect-square rounded-lg bg-[#030508] border border-slate-800 flex items-center justify-center p-3 mb-3">
                <Box className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="font-bold text-white text-sm">3D Model</h4>
              <p className="text-[11px] text-slate-400 mt-1">Shape & Structure</p>
            </div>

            {/* Step 03 */}
            <div className="p-4 rounded-xl border border-slate-800 bg-[#0D111A]/80 text-center flex flex-col items-center">
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-violet-400 font-mono text-[11px] font-bold mb-3">03 — MATERIAL</span>
              <div className="w-full aspect-square rounded-lg bg-[#030508] border border-slate-800 flex items-center justify-center p-3 mb-3">
                <Palette className="w-8 h-8 text-violet-400" />
              </div>
              <h4 className="font-bold text-white text-sm">Material</h4>
              <p className="text-[11px] text-slate-400 mt-1">Textures & Colors</p>
            </div>

            {/* Step 04 */}
            <div className="p-4 rounded-xl border border-slate-800 bg-[#0D111A]/80 text-center flex flex-col items-center">
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 font-mono text-[11px] font-bold mb-3">04 — LIGHT</span>
              <div className="w-full aspect-square rounded-lg bg-[#030508] border border-slate-800 flex items-center justify-center p-3 mb-3">
                <Sun className="w-8 h-8 text-amber-300 animate-pulse" />
              </div>
              <h4 className="font-bold text-white text-sm">Light</h4>
              <p className="text-[11px] text-slate-400 mt-1">Mood & Atmosphere</p>
            </div>

            {/* Step 05 */}
            <div className="p-4 rounded-xl border border-slate-800 bg-[#0D111A]/80 text-center flex flex-col items-center">
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[#00F0FF] font-mono text-[11px] font-bold mb-3">05 — RENDER</span>
              <div className="w-full aspect-square rounded-lg bg-[#030508] border border-slate-800 flex items-center justify-center p-3 mb-3">
                <Aperture className="w-8 h-8 text-[#00F0FF]" />
              </div>
              <h4 className="font-bold text-white text-sm">Render</h4>
              <p className="text-[11px] text-slate-400 mt-1">Professional Output</p>
            </div>

            {/* Step 06 */}
            <div className="p-4 rounded-xl border border-cyan-500/40 bg-[#0D111A]/90 text-center flex flex-col items-center shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6] text-[#030508] font-mono text-[11px] font-black mb-3">06 — SHARE</span>
              <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-indigo-950 to-cyan-950 border border-cyan-400/30 flex items-center justify-center p-3 mb-3">
                <Trophy className="w-8 h-8 text-[#00F0FF]" />
              </div>
              <h4 className="font-bold text-white text-sm">Your Creation</h4>
              <p className="text-[11px] text-[#00F0FF] mt-1">Ready to Share</p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: INTERACTIVE EXPERIENCE */}
      <section className="relative z-10 py-16 lg:py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 bg-[#0D111A]/80 backdrop-blur-xl relative overflow-hidden">
            
            <div className="max-w-3xl mb-12">
              <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold text-xs uppercase tracking-wider">
                High-Energy Live Interaction
              </span>
              <h2 className="font-black text-3xl sm:text-5xl text-white mt-4">
                This Isn't Another Boring Webinar.
              </h2>
              <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
                You won't spend 2.5 hours watching someone click through software. You'll participate, experiment and create alongside the instructor.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              
              <div className="p-5 rounded-2xl bg-[#030508]/80 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <div className="text-2xl mb-2">🎮</div>
                <h4 className="font-bold text-white text-base sm:text-lg">LIVE CHALLENGES</h4>
                <p className="text-xs text-slate-400 mt-1">Sprint activities to immediately practice 3D concepts.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#030508]/80 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <div className="text-2xl mb-2">🤖</div>
                <h4 className="font-bold text-white text-base sm:text-lg">AI DEMOS</h4>
                <p className="text-xs text-slate-400 mt-1">Real-time prompt and AI integration demonstrations.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#030508]/80 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <div className="text-2xl mb-2">🧑‍💻</div>
                <h4 className="font-bold text-white text-base sm:text-lg">HANDS-ON CREATION</h4>
                <p className="text-xs text-slate-400 mt-1">Follow along keystroke-by-keystroke on your own machine.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#030508]/80 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <div className="text-2xl mb-2">💬</div>
                <h4 className="font-bold text-white text-base sm:text-lg">LIVE Q&A</h4>
                <p className="text-xs text-slate-400 mt-1">Get immediate answers and troubleshooting in real time.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#030508]/80 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-bold text-white text-base sm:text-lg">DESIGN BATTLE</h4>
                <p className="text-xs text-slate-400 mt-1">Fun, high-energy mini challenges with fellow learners.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#030508]/80 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <div className="text-2xl mb-2">🏆</div>
                <h4 className="font-bold text-white text-base sm:text-lg">FINAL REVEAL</h4>
                <p className="text-xs text-slate-400 mt-1">Showcase your finished scene and celebrate your creation.</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: PERFECT FOR */}
      <section className="relative z-10 py-16 lg:py-24 border-t border-slate-900 bg-[#070A10]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00F0FF]">Participant Profiles</span>
            <h2 className="font-black text-3xl sm:text-5xl text-white mt-2">
              Who Is This Workshop For?
            </h2>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-xs sm:text-sm">
              <Check className="w-4 h-4" /> No previous 3D experience required.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl border border-slate-800 bg-[#0D111A]/80 hover:border-cyan-500/40 transition-colors">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold text-lg text-white">Students exploring 3D</h3>
              <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
                Find out if 3D and visual storytelling is the creative discipline you want to pursue.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-[#0D111A]/80 hover:border-cyan-500/40 transition-colors">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-lg text-white">Beginners starting from zero</h3>
              <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
                Zero software experience needed. We take you from simple basic blocks to fully lit renders.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-[#0D111A]/80 hover:border-cyan-500/40 transition-colors">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-bold text-lg text-white">Graphic designers</h3>
              <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
                Upgrade your skill stack from 2D canvases to high-impact 3D compositions.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-[#0D111A]/80 hover:border-cyan-500/40 transition-colors">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="font-bold text-lg text-white">Architects & interior design enthusiasts</h3>
              <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
                Experience modern AI lighting and composition workflows for spatial concepts.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-[#0D111A]/80 hover:border-cyan-500/40 transition-colors">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-lg text-white">Content creators</h3>
              <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
                Produce standout 3D product visuals and graphics that captivate social audiences.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-[#0D111A]/80 hover:border-cyan-500/40 transition-colors">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-bold text-lg text-white">Anyone curious about AI + 3D</h3>
              <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
                Discover how AI is revolutionizing asset generation and modern visual workflows.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: WHY 3D + AI? */}
      <section className="relative z-10 py-20 lg:py-28 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">The Creative Evolution</span>
            <h2 className="font-black text-3xl sm:text-5xl text-white mt-2">
              3D Is Changing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#00F0FF]">Are You Ready?</span>
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg">
              3D design is no longer limited to traditional modeling workflows.
            </p>
          </div>

          <div className="relative rounded-3xl p-8 sm:p-12 border border-slate-800 bg-[#0D111A]/80 backdrop-blur-xl">
            <div className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
              Today, designers can combine:
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              
              <div className="p-4 rounded-xl bg-[#030508]/80 border border-cyan-500/40 flex flex-col items-center">
                <span className="w-10 h-10 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center font-bold text-sm mb-2">3D</span>
                <span className="text-xs font-bold text-white">3D Design</span>
              </div>

              <div className="p-4 rounded-xl bg-[#030508]/80 border border-violet-500/40 flex flex-col items-center">
                <span className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center font-bold text-sm mb-2">AI</span>
                <span className="text-xs font-bold text-white">AI Tools</span>
              </div>

              <div className="p-4 rounded-xl bg-[#030508]/80 border border-slate-800 flex flex-col items-center">
                <span className="w-10 h-10 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center font-bold text-sm mb-2">CGI</span>
                <span className="text-xs font-bold text-white">CGI</span>
              </div>

              <div className="p-4 rounded-xl bg-[#030508]/80 border border-slate-800 flex flex-col items-center">
                <span className="w-10 h-10 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center font-bold text-sm mb-2">VIS</span>
                <span className="text-xs font-bold text-white">Visualization</span>
              </div>

              <div className="p-4 rounded-xl bg-[#030508]/80 border border-slate-800 flex flex-col items-center">
                <span className="w-10 h-10 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center font-bold text-sm mb-2">ANI</span>
                <span className="text-xs font-bold text-white">Animation</span>
              </div>

              <div className="p-4 rounded-xl bg-[#030508]/80 border border-emerald-500/40 flex flex-col items-center">
                <span className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm mb-2">RT</span>
                <span className="text-xs font-bold text-white">Real-Time Rendering</span>
              </div>

            </div>

            <div className="mt-12 text-center pt-8 border-t border-slate-800/80">
              <blockquote className="text-lg sm:text-2xl font-bold text-white max-w-2xl mx-auto leading-relaxed">
                "The goal isn't to replace creativity with AI.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-[#00F0FF]">It's to give creative people more power."</span>
              </blockquote>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: WHAT YOU GET */}
      <section className="relative z-10 py-16 lg:py-24 border-t border-slate-900 bg-[#070A10]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00F0FF]">Concrete Inclusions</span>
            <h2 className="font-black text-3xl sm:text-5xl text-white mt-2">
              What You Get
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Transparent, zero-hype breakdown of your workshop deliverables.
            </p>
          </div>

          <div className="rounded-2xl p-6 sm:p-10 border border-slate-800 bg-[#0D111A]/80 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#030508]/60 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">2.5-hour LIVE online workshop</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Interactive live session with expert instructors</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#030508]/60 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Hands-on 3D design experience</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Create your own 3D scene step by step</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#030508]/60 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">AI-assisted 3D workflow demonstration</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Witness how AI accelerates 3D ideation and assets</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#030508]/60 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Materials & lighting fundamentals</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Techniques to create mood, realism, and reflections</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#030508]/60 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Final rendering workflow</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Turn the 3D scene into a polished image export</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#030508]/60 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Live interaction & Q&A</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Direct answers and guidance whenever you get stuck</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#030508]/60 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Workshop resources</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Curated asset packs and reference links</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#030508]/60 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Beginner-friendly guidance</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Clear instructions designed for newcomers</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 9: THE BIG TRANSFORMATION (INTERACTIVE SLIDER) */}
      <section className="relative z-10 py-16 lg:py-24 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00F0FF]">Visual Shift</span>
            <h2 className="font-black text-3xl sm:text-5xl text-white mt-2">
              Imagine What You Could Create Next.
            </h2>
            <div className="mt-4 flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-slate-300">
              <span className="text-slate-400 font-bold">YOUR CREATIVE IDEA</span>
              <ArrowRight className="w-4 h-4 text-[#00F0FF]" />
              <span className="text-[#00F0FF] font-bold">YOUR 3D CREATION</span>
            </div>
          </div>

          <div className="rounded-2xl p-4 sm:p-6 border border-slate-800 bg-[#0D111A]/80 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
            <div className="text-center text-xs text-slate-400 mb-3 flex items-center justify-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>Drag the slider horizontally to compare Before vs After</span>
            </div>

            <div 
              ref={sliderContainerRef}
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden cursor-ew-resize select-none border border-slate-700"
              onMouseDown={() => setIsDraggingSlider(true)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDraggingSlider(true)}
              onTouchMove={handleTouchMove}
            >
              {/* After Layer (Full Width background) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#030508] via-indigo-950 to-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,240,255,0.28),transparent_60%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.32),transparent_60%)]"></div>
                
                <div className="relative text-center z-10 px-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-xs font-bold mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span> AFTER
                  </div>
                  <div className="text-2xl sm:text-4xl font-black text-white tracking-wide">
                    BEAUTIFUL CINEMATIC FINISHED 3D RENDER
                  </div>
                  <div className="text-xs sm:text-sm text-[#00F0FF] font-mono mt-2">
                    Materials Applied • Dynamic Studio Lights • AI Denoised 4K
                  </div>
                </div>
              </div>

              {/* Before Layer (Clipped left side) */}
              <div 
                className="absolute inset-0 bg-[#070A10] border-r-2 border-[#00F0FF] flex items-center justify-center overflow-hidden" 
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative text-center z-10 w-full max-w-sm px-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-600 text-slate-300 font-mono text-xs font-bold mb-3">
                    BEFORE
                  </div>
                  <div className="text-2xl sm:text-4xl font-black text-slate-400 tracking-wide">
                    SIMPLE SKETCH / PRIMITIVE / GRAY MODEL
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-mono mt-2">
                    Zero materials • Flat wireframe • No atmosphere
                  </div>
                </div>
              </div>

              {/* Knob Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-[#00F0FF] flex items-center justify-center pointer-events-none transform -translate-x-1/2" 
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-10 h-10 rounded-full bg-[#030508] border-2 border-[#00F0FF] flex items-center justify-center text-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.6)]">
                  <ChevronsLeftRight className="w-4 h-4" />
                </div>
              </div>

            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-2 font-mono">
              <span>BEFORE: Simple Sketch & Primitives</span>
              <span className="text-[#00F0FF] font-semibold">AFTER: Final Rendered Creation</span>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 10: PRICING SECTION */}
      <section id="pricing-section" className="relative z-10 py-20 lg:py-28 border-t border-slate-900 bg-gradient-to-b from-[#030508] via-[#070A10] to-[#030508]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00F0FF]">Transparent Pricing</span>
            <h2 className="font-black text-3xl sm:text-5xl text-white mt-2">
              JOIN THE LIVE WORKSHOP
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3">
              Secure your registration and follow along with instructors in real time.
            </p>
          </div>

          <div className="rounded-3xl p-8 sm:p-12 border-2 border-cyan-500/50 bg-[#0D111A]/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,240,255,0.25)] relative overflow-hidden">
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-bold uppercase tracking-wider mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping"></span>
                  Confirmed Live Access
                </div>

                <h3 className="font-black text-2xl sm:text-3xl text-white">
                  Hephy 2.5-Hour 3D + AI Workshop
                </h3>
                
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Learn the modern creative pipeline from the ground up. Zero tedious prerequisites. Interactive Q&A throughout the session.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-3 rounded-xl bg-[#030508]/70 border border-slate-800">
                    <div className="text-xs text-slate-400">Duration</div>
                    <div className="text-sm font-bold text-white font-mono mt-0.5">2.5 Hours LIVE</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#030508]/70 border border-slate-800">
                    <div className="text-xs text-slate-400">Prerequisite</div>
                    <div className="text-sm font-bold text-[#00F0FF] font-mono mt-0.5">Zero Experience</div>
                  </div>
                </div>

                {/* Cashfree URL Config Display / Copy Utility */}
                <div className="mt-6 p-3 rounded-xl bg-[#030508]/90 border border-slate-800 text-xs">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="font-mono text-[11px] text-[#00F0FF]">Checkout Destination URL:</span>
                    <button 
                      onClick={handleCopyCheckoutUrl}
                      className="text-[10px] text-slate-300 hover:text-white px-2 py-0.5 rounded bg-slate-800 border border-slate-700 transition-colors"
                    >
                      {copiedUrl ? 'Copied!' : 'Copy URL'}
                    </button>
                  </div>
                  <div className="font-mono text-[11px] text-slate-300 truncate">
                    {CASHFREE_CHECKOUT_URL}
                  </div>
                </div>
              </div>

              {/* Price card on right */}
              <div className="md:col-span-5 flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-[#030508]/90 border border-slate-800">
                <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Special Cohort Pass</div>
                
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-slate-500 text-lg line-through font-semibold">₹3,999</span>
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#00F0FF]">₹199</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 mt-1">Limited-time workshop offer</span>

                <a 
                  href={CASHFREE_CHECKOUT_URL}
                  onClick={handleCtaClick}
                  className="mt-6 w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#00F0FF] via-sky-400 to-[#8B5CF6] hover:from-cyan-300 hover:to-violet-400 text-[#030508] font-black text-center text-base tracking-wide uppercase shadow-[0_0_35px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] focus:outline-none"
                >
                  RESERVE MY SEAT — ₹199
                </a>

                <p className="mt-3 text-[11px] text-slate-400">
                  You'll be redirected to secure payment checkout.
                </p>

                <div className="mt-4 flex items-center justify-center gap-3 text-slate-400 text-[10px] font-mono">
                  <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-emerald-400" /> UPI</span>
                  <span>•</span>
                  <span>Cards</span>
                  <span>•</span>
                  <span>NetBanking</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="relative z-10 py-16 lg:py-24 border-t border-slate-900 bg-[#070A10]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Frequently Asked Questions</span>
            <h2 className="font-black text-3xl sm:text-5xl text-white mt-2">
              Got Questions? We Have Answers.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Quick clarification on everything before you reserve your seat.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="rounded-xl border border-slate-800 bg-[#0D111A]/80 backdrop-blur-md overflow-hidden transition-all duration-200">
                  <button 
                    type="button" 
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between text-base font-bold text-white focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#00F0FF] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION WITH TOBO MASCOT */}
      <section className="relative z-10 py-20 lg:py-28 border-t border-slate-900 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          
          <div className="relative inline-block mb-6">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
              <div className="absolute inset-0 rounded-full shadow-[0_0_60px_20px_rgba(0,240,255,0.25)] scale-75 -z-10"></div>
              <img 
                src={TOBO_MASCOT_SRC} 
                alt="Tobo the 3D Octopus - Final CTA Hephy Academy" 
                className="w-full h-full object-contain filter drop-shadow-[0_12px_30px_rgba(0,240,255,0.45)]"
                onError={(e) => { e.target.src = 'https://placehold.co/240x240/030508/00F0FF?text=Tobo'; }}
              />
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#030508] border border-cyan-500/40 text-[11px] font-mono text-[#00F0FF]">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping"></span>
              <span>Tobo is ready to guide you</span>
            </div>
          </div>

          <h2 className="font-black text-3xl sm:text-5xl lg:text-6xl text-white">
            Your 3D Journey Starts Here.
          </h2>
          
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mt-4 leading-relaxed">
            One workshop. One project. A completely new way to see design.
          </p>

          <div className="mt-8 flex items-baseline justify-center gap-3">
            <span className="text-slate-500 text-xl line-through font-semibold">₹3,999</span>
            <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#00F0FF]">₹199</span>
          </div>

          <div className="mt-8 max-w-md mx-auto">
            <a 
              href={CASHFREE_CHECKOUT_URL}
              onClick={handleCtaClick}
              className="block w-full py-4 sm:py-5 px-8 rounded-2xl bg-gradient-to-r from-[#00F0FF] via-sky-400 to-[#8B5CF6] hover:from-cyan-300 hover:to-violet-400 text-[#030508] font-black text-lg sm:text-xl tracking-wide uppercase shadow-[0_0_40px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
            >
              RESERVE MY SEAT — ₹199
            </a>
            <p className="mt-3 text-xs text-slate-400">
              Limited seats • Live online experience
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-900 bg-[#030508] py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F0FF] to-[#8B5CF6] p-[1px]">
              <div className="w-full h-full bg-[#030508] rounded-[7px] flex items-center justify-center font-bold text-[#00F0FF] text-sm">
                H
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white">Hephy Academy</span>
              <span className="text-[10px] text-slate-400">hephy.design • Creative Tech Education</span>
            </div>
          </div>

          <div className="text-center sm:text-right text-[11px] text-slate-400">
            <p>© 2026 Hephy Academy. All rights reserved.</p>
            <p className="mt-1 text-slate-400">Crafted for creators stepping from 2D into the 3D + AI dimension.</p>
          </div>
        </div>
      </footer>

      {/* FIXED MOBILE CTA BAR */}
      <aside aria-label="Mobile Registration Bar" className="fixed bottom-0 inset-x-0 z-50 p-3 bg-[#030508]/95 backdrop-blur-xl border-t border-slate-800 flex items-center justify-between sm:hidden shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold tracking-tight text-white uppercase">3D + AI WORKSHOP — ₹199</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-slate-400 line-through text-xs">₹3,999</span>
            <span className="text-[#00F0FF] font-black text-sm">₹199</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-semibold">95% OFF</span>
          </div>
        </div>
        
        <a 
          href={CASHFREE_CHECKOUT_URL}
          onClick={handleCtaClick}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6] text-[#030508] font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.4)]"
        >
          JOIN NOW
        </a>
      </aside>

    </div>
  );
}
