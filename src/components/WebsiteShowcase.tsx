import React, { useState } from 'react';
import { ArrowUpRight, Maximize2, Monitor, Smartphone } from 'lucide-react';
import { LightboxImage, PROJECT_LINKS, UPLOADED_SCREENSHOTS } from '../data/caseStudyData';
import { ScrollReveal, StaggerGroup, StaggerItem } from './MotionPrimitives';

interface WebsiteShowcaseProps {
  onOpenLightbox: (image: LightboxImage) => void;
}

type ShowcaseKey = 'all' | 'hero' | 'about' | 'journey';

const FILTER_TABS: { key: ShowcaseKey; label: string }[] = [
  { key: 'all', label: 'All Views' },
  { key: 'hero', label: 'Hero (Desktop & Mobile)' },
  { key: 'about', label: 'About Transition' },
  { key: 'journey', label: 'Journey & Conversion' },
];

const JOURNEY_MODULES = [
  {
    num: '01',
    title: 'Sticky Navigation & Direct Ordering',
    anchor: '#top',
    uxRole: 'Orientation & Conversion Shortcut',
    rationale:
      'A single-row bar links directly to Tentang, Keunggulan, Menu, Galeri, and Lokasi while keeping Pesan Online visible at all times—reducing scroll fatigue for returning visitors.',
  },
  {
    num: '02',
    title: 'Categorized Menu & Price Contrast',
    anchor: '#menu',
    uxRole: 'Offering Discovery',
    rationale:
      'Keyboard-accessible category tabs separate signature coffee, non-coffee, and light bites so visitors can scan prices comfortably (refined from 4.35:1 to 5.38:1 contrast).',
  },
  {
    num: '03',
    title: 'Gallery & Illustrative Social Proof',
    anchor: '#galeri',
    uxRole: 'Atmosphere & Concept Credibility',
    rationale:
      'Balanced interior photography pairs with a lightbox viewer to convey seating comfort, alongside illustrative review cards modeling how guest feedback supports trust.',
  },
  {
    num: '04',
    title: 'Location & WhatsApp CTA Dialog',
    anchor: '#lokasi',
    uxRole: 'Visit Planning & Order Handoff',
    rationale:
      'Address details, opening hours, and map access sit directly above the final WhatsApp ordering prompt, turning online interest into either a café visit or a lightweight order.',
  },
];

export function WebsiteShowcase({ onOpenLightbox }: WebsiteShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<ShowcaseKey>('all');

  const isVisible = (key: Exclude<ShowcaseKey, 'all'>) =>
    activeFilter === 'all' || activeFilter === key;

  return (
    <section id="website" className="py-20 sm:py-28 bg-[#F7F3E9] border-b border-[#183F35]/10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-14">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#B99A5D]">
              07 · Website Showcase
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#183F35]">
              “Designed to feel like the brand.”
            </h2>
          </div>

          <a
            href={PROJECT_LINKS.liveWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 self-start lg:self-auto px-5 py-2.5 rounded-md bg-[#183F35] text-[#F7F3E9] text-xs font-medium tracking-wide uppercase hover:bg-[#22392C] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Open Live Website</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </ScrollReveal>

        {/* Interactive Showcase Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter website showcase sections"
          className="flex flex-wrap items-center gap-2 border-b border-[#183F35]/12 pb-4"
        >
          {FILTER_TABS.map((tab) => {
            const active = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35] ${
                  active
                    ? 'bg-[#183F35] text-[#F7F3E9]'
                    : 'bg-[#E8DFD0]/60 text-[#292B28]/80 hover:bg-[#E8DFD0] hover:text-[#183F35]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-16">
          {/* 01 — HERO (GENUINE DESKTOP & MOBILE SCREENSHOTS) */}
          {isVisible('hero') && (
            <ScrollReveal className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                    01. Hero &amp; First Impression
                  </h3>
                  <p className="text-sm text-[#292B28]/80 mt-1 max-w-2xl">
                    Establishes the brand atmosphere immediately above the fold with forest-green contrast, dual actions (Pesan Online and Kunjungi Kami), and practical café highlights.
                  </p>
                </div>
                <span className="font-mono text-xs text-[#B99A5D] shrink-0">
                  Live Deployment Captures
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Desktop Real Capture */}
                <div className="lg:col-span-8 rounded-xl border border-[#183F35]/20 bg-[#22392C] p-3">
                  <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-[#F7F3E9]/75">
                    <span className="inline-flex items-center gap-1.5">
                      <Monitor className="w-3.5 h-3.5 text-[#B99A5D]" aria-hidden="true" />
                      <span>Desktop · Above the Fold</span>
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox({
                          src: UPLOADED_SCREENSHOTS.desktopHeroAndAbout,
                          alt: 'Kopi Ruang live desktop hero section screenshot',
                          caption: '01. Hero Section — Desktop Capture',
                          sourceLabel: 'Live Website Capture',
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#B99A5D] hover:text-[#F7F3E9] transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Expand</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox({
                        src: UPLOADED_SCREENSHOTS.desktopHeroAndAbout,
                        alt: 'Kopi Ruang live desktop hero section screenshot',
                        caption: '01. Hero Section — Desktop Capture',
                        sourceLabel: 'Live Website Capture',
                      })
                    }
                    className="group block w-full aspect-[16/11] overflow-hidden rounded-lg bg-[#183F35]"
                  >
                    <img
                      src={UPLOADED_SCREENSHOTS.desktopHeroAndAbout}
                      alt="Kopi Ruang desktop hero view with navigation, headline, Pesan Online button, and arched pour-over photography"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-[50%_12%] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </button>
                </div>

                {/* Mobile Real Capture */}
                <div className="lg:col-span-4 rounded-xl border border-[#183F35]/20 bg-[#22392C] p-3">
                  <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-[#F7F3E9]/75">
                    <span className="inline-flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-[#B99A5D]" aria-hidden="true" />
                      <span>Mobile · Responsive Stack</span>
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox({
                          src: UPLOADED_SCREENSHOTS.mobileHero,
                          alt: 'Kopi Ruang live mobile hero section screenshot',
                          caption: '01. Hero Section — Mobile Capture',
                          sourceLabel: 'Live Website Capture',
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#B99A5D] hover:text-[#F7F3E9] transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Expand</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox({
                        src: UPLOADED_SCREENSHOTS.mobileHero,
                        alt: 'Kopi Ruang live mobile hero section screenshot',
                        caption: '01. Hero Section — Mobile Capture',
                        sourceLabel: 'Live Website Capture',
                      })
                    }
                    className="group block w-full max-w-[270px] mx-auto aspect-[9/16] overflow-hidden rounded-lg bg-[#183F35]"
                  >
                    <img
                      src={UPLOADED_SCREENSHOTS.mobileHero}
                      alt="Kopi Ruang mobile hero view showing brand mark, Pesan Online CTA, hamburger menu, and stacked highlights"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-[50%_22%] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* 02 — ABOUT TRANSITION (GENUINE DESKTOP CAPTURE + DESIGN DECISION NOTES) */}
          {isVisible('about') && (
            <ScrollReveal className="space-y-6 pt-8 border-t border-[#183F35]/10">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                    02. Brand Space Transition — About Section
                  </h3>
                  <p className="text-sm text-[#292B28]/80 mt-1 max-w-2xl">
                    Shifts from deep forest green into warm cream, echoing the café’s interior warmth while carrying the signature arch motif across sections.
                  </p>
                </div>
                <span className="font-mono text-xs text-[#B99A5D] shrink-0">
                  Live Desktop Capture
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-8 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/55 p-3">
                  <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-[#183F35]/75">
                    <span>Desktop · Lower Fold (Arched Café Interior Transition)</span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox({
                          src: UPLOADED_SCREENSHOTS.desktopHeroAndAbout,
                          alt: 'Kopi Ruang About section transition with arched cafe interior photo',
                          caption: '02. About Section — Desktop Capture',
                          sourceLabel: 'Live Website Capture',
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#183F35] hover:text-[#B99A5D] transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Expand</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox({
                        src: UPLOADED_SCREENSHOTS.desktopHeroAndAbout,
                        alt: 'Kopi Ruang About section transition with arched cafe interior photo',
                        caption: '02. About Section — Desktop Capture',
                        sourceLabel: 'Live Website Capture',
                      })
                    }
                    className="group block w-full aspect-[16/10] overflow-hidden rounded-lg bg-[#F7F3E9]"
                  >
                    <img
                      src={UPLOADED_SCREENSHOTS.desktopHeroAndAbout}
                      alt="Kopi Ruang cream About section displaying arched cafe interior with velvet green seating and wooden tables"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-[50%_94%] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </button>
                </div>

                <div className="lg:col-span-4 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/45 p-6 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#B99A5D]">
                      Design Decision Notes
                    </p>
                    <h4 className="font-serif text-xl text-[#183F35] leading-snug">
                      Pacing visual weight between sections
                    </h4>
                    <p className="text-sm text-[#292B28]/85 leading-relaxed">
                      Alternating the dark hero ground (#183F35) with the warm cream About canvas (#F7F3E9) creates a clear chapter break without adding extra dividers.
                    </p>
                    <p className="text-sm text-[#292B28]/80 leading-relaxed">
                      Repeating the arch silhouette around interior photography ties the UI back to the Kopi Ruang emblem and physical doorway geometry.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#183F35]/12 text-xs text-[#292B28]/75 space-y-2">
                    <p>
                      Note: Mobile-specific captures for lower sections are not yet included in this case study asset set.
                    </p>
                    <a
                      href={`${PROJECT_LINKS.liveWebsite}#tentang`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-[#183F35] hover:text-[#B99A5D] underline underline-offset-4 transition-colors"
                    >
                      <span>View About on live site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* 03 — VISITOR JOURNEY & CONVERSION ARCHITECTURE */}
          {isVisible('journey') && (
            <ScrollReveal className="space-y-6 pt-8 border-t border-[#183F35]/10">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                    03. Visitor Journey &amp; Conversion Architecture
                  </h3>
                  <p className="text-sm text-[#292B28]/80 mt-1 max-w-2xl">
                    How the remaining sections on the live one-page site—Menu, Gallery, Location, and the WhatsApp CTA—guide visitors from exploration to action.
                  </p>
                </div>
                <span className="font-mono text-xs text-[#292B28]/70 shrink-0">
                  Live Site Sections
                </span>
              </div>

              <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {JOURNEY_MODULES.map((mod) => (
                  <StaggerItem
                    key={mod.num}
                    className="p-6 sm:p-7 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/40 flex flex-col justify-between gap-5"
                  >
                    <div className="space-y-3">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-mono text-xs text-[#B99A5D] tabular-nums">
                          {mod.num} · {mod.uxRole}
                        </span>
                      </div>
                      <h4 className="font-serif text-xl text-[#183F35]">{mod.title}</h4>
                      <p className="text-sm text-[#292B28]/85 leading-relaxed">
                        {mod.rationale}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#183F35]/10">
                      <a
                        href={`${PROJECT_LINKS.liveWebsite}${mod.anchor}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#183F35] hover:text-[#B99A5D] underline underline-offset-4 transition-colors"
                      >
                        <span>Inspect live section</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
