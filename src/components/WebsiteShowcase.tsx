import React, { useState } from 'react';
import { ArrowUpRight, Maximize2, Monitor, Smartphone } from 'lucide-react';
import {
  LightboxImage,
  PROJECT_LINKS,
  WEBSITE_SHOWCASE_MEDIA,
} from '../data/caseStudyData';
import { ScrollReveal } from './MotionPrimitives';

interface WebsiteShowcaseProps {
  onOpenLightbox: (image: LightboxImage) => void;
}

type ShowcaseKey = 'all' | 'hero' | 'about' | 'menu' | 'gallery' | 'location';
type MenuScreenshotTab = 'coffee' | 'pastry';

const FILTER_TABS: { key: ShowcaseKey; label: string }[] = [
  { key: 'all', label: 'All Sections' },
  { key: 'hero', label: 'Hero' },
  { key: 'about', label: 'About' },
  { key: 'menu', label: 'Menu' },
  { key: 'gallery', label: 'Gallery' },
  { key: 'location', label: 'Location & CTA' },
];

export function WebsiteShowcase({ onOpenLightbox }: WebsiteShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<ShowcaseKey>('all');
  const [activeMenuTab, setActiveMenuTab] = useState<MenuScreenshotTab>('coffee');

  const isVisible = (key: Exclude<ShowcaseKey, 'all'>) =>
    activeFilter === 'all' || activeFilter === key;

  const activeMenuMedia =
    activeMenuTab === 'coffee'
      ? WEBSITE_SHOWCASE_MEDIA.menuCoffee
      : WEBSITE_SHOWCASE_MEDIA.menuPastry;

  return (
    <section id="website" className="py-20 sm:py-28 bg-[#F7F3E9] border-b border-[#183F35]/10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-14">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6B5230]">
              07 · Website Showcase
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#183F35]">
              “Designed to feel like the brand.”
            </h2>
            <p className="text-sm text-[#292B28]/82 leading-relaxed">
              Desktop interface documentation across every core section of the live site, paired with the existing mobile hero capture. Additional mobile section captures will be added in a subsequent update.
            </p>
          </div>

          <a
            href={PROJECT_LINKS.liveWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 self-start lg:self-auto px-5 py-2.5 rounded-md bg-[#183F35] text-[#F7F3E9] text-xs font-medium tracking-wide uppercase hover:bg-[#22392C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
          >
            <span>Open Live Website</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
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
                    : 'bg-[#E8DFD0]/60 text-[#292B28]/85 hover:bg-[#E8DFD0] hover:text-[#183F35]'
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
                    01. Hero &amp; Navigation
                  </h3>
                  <p className="text-sm text-[#292B28]/85 mt-1 max-w-2xl">
                    Single-row navigation pairs with the forest-green hero ground, editorial headline, arched pour-over photography, and primary ordering CTA.
                  </p>
                </div>
                <span className="font-mono text-xs font-medium text-[#6B5230] shrink-0">
                  Desktop + Mobile Captures
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Desktop Real Capture */}
                <div className="lg:col-span-8 rounded-xl border border-[#183F35]/20 bg-[#22392C] p-3">
                  <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-[#F7F3E9]/80">
                    <span className="inline-flex items-center gap-1.5">
                      <Monitor className="w-3.5 h-3.5 text-[#B99A5D]" aria-hidden="true" />
                      <span>Desktop · Hero &amp; Header</span>
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox({
                          src: WEBSITE_SHOWCASE_MEDIA.hero.desktop,
                          alt: WEBSITE_SHOWCASE_MEDIA.hero.desktopAlt,
                          caption: '01. Hero Section — Desktop Capture',
                          sourceLabel: 'Genuine Desktop Screenshot',
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#B99A5D] hover:text-[#F7F3E9] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A5D]"
                    >
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Tap to zoom</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox({
                        src: WEBSITE_SHOWCASE_MEDIA.hero.desktop,
                        alt: WEBSITE_SHOWCASE_MEDIA.hero.desktopAlt,
                        caption: '01. Hero Section — Desktop Capture',
                        sourceLabel: 'Genuine Desktop Screenshot',
                      })
                    }
                    className="group block w-full overflow-hidden rounded-lg bg-[#183F35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A5D]"
                  >
                    <img
                      src={WEBSITE_SHOWCASE_MEDIA.hero.desktop}
                      alt={WEBSITE_SHOWCASE_MEDIA.hero.desktopAlt}
                      width={WEBSITE_SHOWCASE_MEDIA.hero.desktopWidth}
                      height={WEBSITE_SHOWCASE_MEDIA.hero.desktopHeight}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                  </button>
                </div>

                {/* Mobile Real Capture */}
                {WEBSITE_SHOWCASE_MEDIA.hero.mobile && (
                  <div className="lg:col-span-4 rounded-xl border border-[#183F35]/20 bg-[#22392C] p-3">
                    <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-[#F7F3E9]/80">
                      <span className="inline-flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-[#B99A5D]" aria-hidden="true" />
                        <span>Mobile · Responsive Stack</span>
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onOpenLightbox({
                            src: WEBSITE_SHOWCASE_MEDIA.hero.mobile!,
                            alt: WEBSITE_SHOWCASE_MEDIA.hero.mobileAlt || 'Kopi Ruang mobile hero',
                            caption: '01. Hero Section — Mobile Capture',
                            sourceLabel: 'Genuine Mobile Screenshot',
                          })
                        }
                        className="inline-flex items-center gap-1 text-[#B99A5D] hover:text-[#F7F3E9] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A5D]"
                      >
                        <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Expand</span>
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox({
                          src: WEBSITE_SHOWCASE_MEDIA.hero.mobile!,
                          alt: WEBSITE_SHOWCASE_MEDIA.hero.mobileAlt || 'Kopi Ruang mobile hero',
                          caption: '01. Hero Section — Mobile Capture',
                          sourceLabel: 'Genuine Mobile Screenshot',
                        })
                      }
                      className="group block w-full max-w-[260px] mx-auto aspect-[9/16] overflow-hidden rounded-lg bg-[#183F35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A5D]"
                    >
                      <img
                        src={WEBSITE_SHOWCASE_MEDIA.hero.mobile}
                        alt={WEBSITE_SHOWCASE_MEDIA.hero.mobileAlt}
                        width={WEBSITE_SHOWCASE_MEDIA.hero.mobileWidth}
                        height={WEBSITE_SHOWCASE_MEDIA.hero.mobileHeight}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-[50%_22%] transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </button>
                  </div>
                )}
              </div>
            </ScrollReveal>
          )}

          {/* 02 — ABOUT SECTION (GENUINE DESKTOP CAPTURE) */}
          {isVisible('about') && (
            <ScrollReveal className="space-y-6 pt-8 border-t border-[#183F35]/10">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                    02. About Section (Tentang Kami)
                  </h3>
                  <p className="text-sm text-[#292B28]/85 mt-1 max-w-2xl">
                    Shifts to warm cream to introduce the café’s story alongside an arched AI-generated interior view and fictional concept highlights (200+, 4.8★, 100%).
                  </p>
                </div>
                <span className="font-mono text-xs font-medium text-[#6B5230] shrink-0">
                  Desktop Capture
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-8 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/55 p-3">
                  <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-[#183F35]/85">
                    <span className="inline-flex items-center gap-1.5">
                      <Monitor className="w-3.5 h-3.5 text-[#183F35]" aria-hidden="true" />
                      <span>Desktop · Tentang Kami</span>
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox({
                          src: WEBSITE_SHOWCASE_MEDIA.about.desktop,
                          alt: WEBSITE_SHOWCASE_MEDIA.about.desktopAlt,
                          caption: '02. About Section (Tentang Kami) — Desktop Capture',
                          sourceLabel: 'Genuine Desktop Screenshot',
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#183F35] hover:text-[#6B5230] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
                    >
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Tap to zoom</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox({
                        src: WEBSITE_SHOWCASE_MEDIA.about.desktop,
                        alt: WEBSITE_SHOWCASE_MEDIA.about.desktopAlt,
                        caption: '02. About Section (Tentang Kami) — Desktop Capture',
                        sourceLabel: 'Genuine Desktop Screenshot',
                      })
                    }
                    className="group block w-full overflow-hidden rounded-lg bg-[#F7F3E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
                  >
                    <img
                      src={WEBSITE_SHOWCASE_MEDIA.about.desktop}
                      alt={WEBSITE_SHOWCASE_MEDIA.about.desktopAlt}
                      width={WEBSITE_SHOWCASE_MEDIA.about.desktopWidth}
                      height={WEBSITE_SHOWCASE_MEDIA.about.desktopHeight}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                  </button>
                </div>

                <div className="lg:col-span-4 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/45 p-6 flex flex-col justify-between gap-6">
                  <div className="space-y-3.5">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6B5230]">
                      UX Design Decision
                    </p>
                    <h4 className="font-serif text-xl text-[#183F35] leading-snug">
                      Editorial pacing &amp; brand storytelling
                    </h4>
                    <p className="text-sm text-[#292B28]/88 leading-relaxed">
                      Transitioning from dark forest green into warm cream separates brand positioning from café storytelling without heavy section dividers.
                    </p>
                    <p className="text-sm text-[#292B28]/85 leading-relaxed">
                      The arched AI-generated interior photograph illustrates seating layout for remote workers while concise stat markers below the copy remain scannable (fictional concept data).
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#183F35]/12 flex items-center justify-between text-xs text-[#292B28]/82">
                    <span>Desktop documented</span>
                    <a
                      href={`${PROJECT_LINKS.liveWebsite}#tentang`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-[#183F35] hover:text-[#6B5230] underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
                    >
                      <span>Live section</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* 03 — MENU (GENUINE DESKTOP SCREENSHOTS: COFFEE & PASTRY TABS) */}
          {isVisible('menu') && (
            <ScrollReveal className="space-y-6 pt-8 border-t border-[#183F35]/10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                    03. Menu (Racikan Favorit Kopi Ruang)
                  </h3>
                  <p className="text-sm text-[#292B28]/85 mt-1 max-w-2xl">
                    Interactive category tabs organize 12 menu items—each paired with its own AI-curated photo—across Coffee, Signature Drinks, and Pastry with crisp price hierarchy.
                  </p>
                </div>

                {/* Toggle between uploaded Coffee & Pastry desktop screenshots */}
                <div
                  role="group"
                  aria-label="Select menu screenshot category"
                  className="inline-flex items-center gap-1 p-1 rounded-lg bg-[#E8DFD0] border border-[#183F35]/12 shrink-0 self-start sm:self-auto"
                >
                  <button
                    type="button"
                    onClick={() => setActiveMenuTab('coffee')}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35] ${
                      activeMenuTab === 'coffee'
                        ? 'bg-[#183F35] text-[#F7F3E9]'
                        : 'text-[#183F35]/85 hover:text-[#183F35]'
                    }`}
                  >
                    Coffee Tab
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMenuTab('pastry')}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35] ${
                      activeMenuTab === 'pastry'
                        ? 'bg-[#183F35] text-[#F7F3E9]'
                        : 'text-[#183F35]/85 hover:text-[#183F35]'
                    }`}
                  >
                    Pastry Tab
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-8 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/55 p-3">
                  <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-[#183F35]/85">
                    <span className="inline-flex items-center gap-1.5">
                      <Monitor className="w-3.5 h-3.5 text-[#183F35]" aria-hidden="true" />
                      <span>
                        Desktop · Menu ({activeMenuTab === 'coffee' ? 'Coffee' : 'Pastry'})
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox({
                          src: activeMenuMedia.desktop,
                          alt: activeMenuMedia.desktopAlt,
                          caption: `03. Menu — ${activeMenuTab === 'coffee' ? 'Coffee' : 'Pastry'} Tab (Desktop Capture)`,
                          sourceLabel: 'Genuine Desktop Screenshot',
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#183F35] hover:text-[#6B5230] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
                    >
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Tap to zoom</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox({
                        src: activeMenuMedia.desktop,
                        alt: activeMenuMedia.desktopAlt,
                        caption: `03. Menu — ${activeMenuTab === 'coffee' ? 'Coffee' : 'Pastry'} Tab (Desktop Capture)`,
                        sourceLabel: 'Genuine Desktop Screenshot',
                      })
                    }
                    className="group block w-full overflow-hidden rounded-lg bg-[#F7F3E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
                  >
                    <img
                      src={activeMenuMedia.desktop}
                      alt={activeMenuMedia.desktopAlt}
                      width={activeMenuMedia.desktopWidth}
                      height={activeMenuMedia.desktopHeight}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                  </button>
                </div>

                <div className="lg:col-span-4 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/45 p-6 flex flex-col justify-between gap-6">
                  <div className="space-y-3.5">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6B5230]">
                      UX Design Decision
                    </p>
                    <h4 className="font-serif text-xl text-[#183F35] leading-snug">
                      Scannable categories &amp; clear price contrast
                    </h4>
                    <p className="text-sm text-[#292B28]/88 leading-relaxed">
                      Grouping the 12 offerings behind category tabs prevents a long vertical menu wall, letting coffee enthusiasts and casual guests switch between Coffee, Signature Drinks, and Pastry effortlessly.
                    </p>
                    <p className="text-sm text-[#292B28]/85 leading-relaxed">
                      Right-aligned fictional IDR pricing sits inline with each item title, and price text contrast was deepened from 4.35:1 to 5.38:1 (WCAG AA) during QA refinement.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#183F35]/12 flex items-center justify-between text-xs text-[#292B28]/82">
                    <span>Coffee &amp; Pastry captures</span>
                    <a
                      href={`${PROJECT_LINKS.liveWebsite}#menu`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-[#183F35] hover:text-[#6B5230] underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
                    >
                      <span>Live section</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* 04 — GALLERY (GENUINE DESKTOP SCREENSHOT) */}
          {isVisible('gallery') && (
            <ScrollReveal className="space-y-6 pt-8 border-t border-[#183F35]/10">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                    04. Gallery (Suasana — Ruang yang Bikin Betah)
                  </h3>
                  <p className="text-sm text-[#292B28]/85 mt-1 max-w-2xl">
                    Returns to deep forest green to spotlight three distinct café zones—Interior Café, Sudut Kerja Fokus, and Bar Seduh—supporting visual atmosphere discovery.
                  </p>
                </div>
                <span className="font-mono text-xs font-medium text-[#6B5230] shrink-0">
                  Desktop Capture
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-8 rounded-xl border border-[#183F35]/20 bg-[#22392C] p-3">
                  <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-[#F7F3E9]/80">
                    <span className="inline-flex items-center gap-1.5">
                      <Monitor className="w-3.5 h-3.5 text-[#B99A5D]" aria-hidden="true" />
                      <span>Desktop · Suasana Gallery</span>
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox({
                          src: WEBSITE_SHOWCASE_MEDIA.gallery.desktop,
                          alt: WEBSITE_SHOWCASE_MEDIA.gallery.desktopAlt,
                          caption: '04. Gallery (Suasana) — Desktop Capture',
                          sourceLabel: 'Genuine Desktop Screenshot',
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#B99A5D] hover:text-[#F7F3E9] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A5D]"
                    >
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Tap to zoom</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox({
                        src: WEBSITE_SHOWCASE_MEDIA.gallery.desktop,
                        alt: WEBSITE_SHOWCASE_MEDIA.gallery.desktopAlt,
                        caption: '04. Gallery (Suasana) — Desktop Capture',
                        sourceLabel: 'Genuine Desktop Screenshot',
                      })
                    }
                    className="group block w-full overflow-hidden rounded-lg bg-[#183F35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A5D]"
                  >
                    <img
                      src={WEBSITE_SHOWCASE_MEDIA.gallery.desktop}
                      alt={WEBSITE_SHOWCASE_MEDIA.gallery.desktopAlt}
                      width={WEBSITE_SHOWCASE_MEDIA.gallery.desktopWidth}
                      height={WEBSITE_SHOWCASE_MEDIA.gallery.desktopHeight}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                  </button>
                </div>

                <div className="lg:col-span-4 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/45 p-6 flex flex-col justify-between gap-6">
                  <div className="space-y-3.5">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6B5230]">
                      UX Design Decision
                    </p>
                    <h4 className="font-serif text-xl text-[#183F35] leading-snug">
                      Communicating space before visitors arrive
                    </h4>
                    <p className="text-sm text-[#292B28]/88 leading-relaxed">
                      Mixing arched and softly rounded tile geometries breaks grid monotony while spotlighting functional zones: communal seating, a laptop-ready focus corner, and the espresso/manual brew bar.
                    </p>
                    <p className="text-sm text-[#292B28]/85 leading-relaxed">
                      Dark scrim gradients preserve caption legibility over bright daylight AI interiors, and a clear prompt invites click-to-zoom inspection.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#183F35]/12 flex items-center justify-between text-xs text-[#292B28]/82">
                    <span>Desktop documented</span>
                    <a
                      href={`${PROJECT_LINKS.liveWebsite}#galeri`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-[#183F35] hover:text-[#6B5230] underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
                    >
                      <span>Live section</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* 05 — LOCATION & WHATSAPP CTA (GENUINE DESKTOP SCREENSHOT) */}
          {isVisible('location') && (
            <ScrollReveal className="space-y-6 pt-8 border-t border-[#183F35]/10">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                    05. Location &amp; WhatsApp CTA
                  </h3>
                  <p className="text-sm text-[#292B28]/85 mt-1 max-w-2xl">
                    Pairs an interactive map visual with illustrative operational status, fictional address and opening hours, directions, and a direct WhatsApp ordering handoff.
                  </p>
                </div>
                <span className="font-mono text-xs font-medium text-[#6B5230] shrink-0">
                  Desktop Capture
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-8 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/55 p-3">
                  <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-[#183F35]/85">
                    <span className="inline-flex items-center gap-1.5">
                      <Monitor className="w-3.5 h-3.5 text-[#183F35]" aria-hidden="true" />
                      <span>Desktop · Location &amp; Contact Card</span>
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox({
                          src: WEBSITE_SHOWCASE_MEDIA.location.desktop,
                          alt: WEBSITE_SHOWCASE_MEDIA.location.desktopAlt,
                          caption: '05. Location & WhatsApp CTA — Desktop Capture',
                          sourceLabel: 'Genuine Desktop Screenshot',
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#183F35] hover:text-[#6B5230] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
                    >
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Tap to zoom</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox({
                        src: WEBSITE_SHOWCASE_MEDIA.location.desktop,
                        alt: WEBSITE_SHOWCASE_MEDIA.location.desktopAlt,
                        caption: '05. Location & WhatsApp CTA — Desktop Capture',
                        sourceLabel: 'Genuine Desktop Screenshot',
                      })
                    }
                    className="group block w-full overflow-hidden rounded-lg bg-[#F7F3E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
                  >
                    <img
                      src={WEBSITE_SHOWCASE_MEDIA.location.desktop}
                      alt={WEBSITE_SHOWCASE_MEDIA.location.desktopAlt}
                      width={WEBSITE_SHOWCASE_MEDIA.location.desktopWidth}
                      height={WEBSITE_SHOWCASE_MEDIA.location.desktopHeight}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                  </button>
                </div>

                <div className="lg:col-span-4 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/45 p-6 flex flex-col justify-between gap-6">
                  <div className="space-y-3.5">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6B5230]">
                      UX Design Decision
                    </p>
                    <h4 className="font-serif text-xl text-[#183F35] leading-snug">
                      Lowering friction between visit &amp; order
                    </h4>
                    <p className="text-sm text-[#292B28]/88 leading-relaxed">
                      Placing operational status (“Buka sekarang · Tutup pukul 22.00”) at the top of the card immediately answers whether the café is open, followed by weekday/weekend hours and street address.
                    </p>
                    <p className="text-sm text-[#292B28]/85 leading-relaxed">
                      Two distinct actions—Petunjuk Arah (Google Maps) and Chat WhatsApp—support both in-person visits and quick conversational pre-orders without checkout complexity.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#183F35]/12 flex items-center justify-between text-xs text-[#292B28]/82">
                    <span>Desktop documented</span>
                    <a
                      href={`${PROJECT_LINKS.liveWebsite}#lokasi`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-[#183F35] hover:text-[#6B5230] underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
                    >
                      <span>Live section</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
