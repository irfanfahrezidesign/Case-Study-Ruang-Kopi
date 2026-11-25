import React from 'react';
import { ArrowDown, ArrowUpRight, Maximize2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { LightboxImage, PROJECT_LINKS, UPLOADED_SCREENSHOTS } from '../data/caseStudyData';

interface HeroSectionProps {
  onOpenLightbox: (image: LightboxImage) => void;
}

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

export function HeroSection({ onOpenLightbox }: HeroSectionProps) {
  const prefersReduced = useReducedMotion();

  const handleExploreClick = () => {
    const el = document.getElementById('overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#F7F3E9] pt-10 pb-20 sm:pt-16 sm:pb-28 border-b border-[#183F35]/10"
    >
      {/* Subtle decorative architectural arch line */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 600 720"
        fill="none"
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE_EDITORIAL }}
        className="pointer-events-none absolute -top-24 right-[-120px] w-[480px] sm:w-[620px] text-[#B99A5D]/20"
      >
        <path
          d="M60 720V300C60 167.452 167.452 60 300 60C432.548 60 540 167.452 540 300V720"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M96 720V308C96 195.334 187.334 104 300 104C412.666 104 504 195.334 504 308V720"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </motion.svg>

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT COLUMN — Editorial Typography & Project Metadata */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE_EDITORIAL }}
            className="lg:col-span-5 space-y-7"
          >
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#183F35]">
                Project 02 <span className="mx-2 text-[#B99A5D]" aria-hidden="true">·</span> UI/UX Case Study
              </p>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.25rem] leading-[0.98] tracking-tight text-[#183F35]">
                KOPI RUANG
              </h1>

              <p className="font-serif text-xl sm:text-2xl text-[#22392C]/85 italic font-normal">
                Company Profile Website
              </p>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-[#292B28]/85 max-w-xl">
              “A digital experience designed to bring the warmth of a coffee space into the online world.”
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href={PROJECT_LINKS.liveWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#183F35] text-[#F7F3E9] text-sm font-medium tracking-wide hover:bg-[#22392C] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
              >
                <span>View Live Website</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={handleExploreClick}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-[#183F35]/30 text-[#183F35] text-sm font-medium tracking-wide hover:bg-[#E8DFD0]/70 hover:border-[#183F35]/60 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
              >
                <span>Explore Case Study</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-150 group-hover:translate-y-0.5" />
              </button>
            </div>

            {/* Project Snapshot — Clean unboxed metadata */}
            <div className="pt-6 border-t border-[#183F35]/12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div className="space-y-1">
                <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#B99A5D]">
                  Project Type
                </p>
                <p className="text-[#292B28]/85 leading-relaxed">
                  Self-Initiated Fictional Concept Project
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#B99A5D]">
                  Role
                </p>
                <p className="text-[#292B28]/85 leading-relaxed">
                  Solo UI/UX Designer &amp; Front-End Prototyper
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#B99A5D]">
                  Scope
                </p>
                <p className="text-[#292B28]/85 leading-relaxed">
                  Visual Direction · Design System · Responsive UI · AI-Assisted Build &amp; Audit
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#B99A5D]">
                  Tools
                </p>
                <p className="text-[#292B28]/85 leading-relaxed">
                  Figma · Canva · Google AI Studio (Gemini) · GitHub · Vercel
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Real Desktop & Mobile Website Mockups */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: EASE_EDITORIAL }}
            className="lg:col-span-7 relative pb-8 sm:pb-12"
          >
            {/* Desktop / Laptop Mockup */}
            <div className="relative rounded-xl border border-[#183F35]/20 bg-[#22392C] p-2 sm:p-3 shadow-2xl shadow-[#183F35]/12">
              {/* Browser top bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#F7F3E9]/10 mb-2">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F7F3E9]/25" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F7F3E9]/25" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F7F3E9]/25" />
                </div>
                <span className="text-[11px] font-mono text-[#F7F3E9]/65 truncate">
                  kopi-ruang-website.vercel.app
                </span>
                <button
                  type="button"
                  onClick={() =>
                    onOpenLightbox({
                      src: UPLOADED_SCREENSHOTS.desktopHeroAndAbout,
                      alt: 'Real desktop screenshot of the Kopi Ruang company profile website',
                      caption: 'Kopi Ruang — Desktop View (Real Website Capture)',
                      sourceLabel: 'Uploaded Project Screenshot',
                    })
                  }
                  aria-label="Inspect full desktop website screenshot"
                  className="inline-flex items-center gap-1 text-[11px] text-[#B99A5D] hover:text-[#F7F3E9] transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Inspect</span>
                </button>
              </div>

              {/* Real Desktop Screenshot */}
              <button
                type="button"
                onClick={() =>
                  onOpenLightbox({
                    src: UPLOADED_SCREENSHOTS.desktopHeroAndAbout,
                    alt: 'Real desktop screenshot of the Kopi Ruang company profile website',
                    caption: 'Kopi Ruang — Desktop View (Real Website Capture)',
                    sourceLabel: 'Uploaded Project Screenshot',
                  })
                }
                className="group relative block w-full aspect-[16/11] overflow-hidden rounded-lg bg-[#183F35] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A5D]"
              >
                <img
                  src={UPLOADED_SCREENSHOTS.desktopHeroAndAbout}
                  alt="Kopi Ruang desktop website showing navigation, headline Ruang untuk Fokus Ruang untuk Bercerita, and arched pour-over coffee photography"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[50%_12%] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <span className="sr-only">Open full desktop screenshot</span>
              </button>
            </div>

            {/* Overlapping Mobile Mockup */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.26, ease: EASE_EDITORIAL }}
              className="relative sm:absolute sm:right-4 sm:bottom-0 mt-5 sm:mt-0 w-[190px] sm:w-[215px] mx-auto sm:mx-0 rounded-[24px] border-[3px] border-[#292B28] bg-[#183F35] p-1.5 shadow-2xl shadow-[#183F35]/25"
            >
              <button
                type="button"
                onClick={() =>
                  onOpenLightbox({
                    src: UPLOADED_SCREENSHOTS.mobileHero,
                    alt: 'Real mobile screenshot of the Kopi Ruang company profile website',
                    caption: 'Kopi Ruang — Mobile View (Real Website Capture)',
                    sourceLabel: 'Uploaded Project Screenshot',
                  })
                }
                className="group relative block w-full aspect-[9/17] overflow-hidden rounded-[18px] bg-[#183F35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A5D]"
              >
                <img
                  src={UPLOADED_SCREENSHOTS.mobileHero}
                  alt="Kopi Ruang mobile website showing responsive header, hero headline, Pesan Online button, and facility highlights"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[50%_22%] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <span className="sr-only">Open full mobile screenshot</span>
              </button>
            </motion.div>

            <p className="mt-4 sm:mt-3 text-xs text-[#292B28]/65">
              Captured directly from the live deployment · Click either frame to inspect full screen
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
