import React, { useState } from 'react';
import { ArrowUpRight, ImagePlus, Maximize2, Monitor, Smartphone } from 'lucide-react';
import { LightboxImage, PROJECT_LINKS, UPLOADED_SCREENSHOTS } from '../data/caseStudyData';
import { ScrollReveal } from './MotionPrimitives';

interface WebsiteShowcaseProps {
  onOpenLightbox: (image: LightboxImage) => void;
}

type ShowcaseKey = 'all' | 'hero' | 'about' | 'menu' | 'gallery' | 'location';

const FILTER_TABS: { key: ShowcaseKey; label: string }[] = [
  { key: 'all', label: 'All Sections' },
  { key: 'hero', label: 'Hero' },
  { key: 'about', label: 'About & Why Us' },
  { key: 'menu', label: 'Menu' },
  { key: 'gallery', label: 'Gallery' },
  { key: 'location', label: 'Location & CTA' },
];

function PlaceholderViewport({
  viewport,
  sectionTitle,
  replacementHint,
  liveAnchor,
}: {
  viewport: 'Desktop' | 'Mobile';
  sectionTitle: string;
  replacementHint: string;
  liveAnchor: string;
}) {
  const isDesktop = viewport === 'Desktop';
  return (
    <div
      className={`rounded-xl border border-dashed border-[#183F35]/30 bg-[#E8DFD0]/45 flex flex-col justify-between p-6 ${
        isDesktop ? 'aspect-[16/10]' : 'aspect-[9/16] max-w-[280px] mx-auto w-full'
      }`}
    >
      <div className="flex items-center justify-between gap-2 text-xs text-[#183F35]/70">
        <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-wider">
          {isDesktop ? <Monitor className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
          {viewport} View
        </span>
        <span className="font-mono text-[11px] text-[#B99A5D]">Screenshot Slot</span>
      </div>

      <div className="my-auto py-6 text-center space-y-2.5">
        <div className="w-10 h-10 mx-auto rounded-full border border-[#183F35]/20 bg-[#F7F3E9] flex items-center justify-center text-[#183F35]">
          <ImagePlus className="w-4 h-4" />
        </div>
        <p className="font-serif text-lg text-[#183F35]">{sectionTitle}</p>
        <p className="text-xs text-[#292B28]/70 max-w-xs mx-auto leading-relaxed">
          {replacementHint}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <a
          href={`${PROJECT_LINKS.liveWebsite}${liveAnchor}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#183F35] hover:text-[#B99A5D] underline underline-offset-4 transition-colors"
        >
          <span>Inspect live section</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

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
          {/* 01 — HERO (REAL SCREENSHOTS) */}
          {isVisible('hero') && (
            <ScrollReveal className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                    01. Hero Section
                  </h3>
                  <p className="text-sm text-[#292B28]/80 mt-1">
                    Brand introduction, main headline, warm pour-over atmosphere, and primary CTAs.
                  </p>
                </div>
                <span className="font-mono text-xs text-[#B99A5D]">
                  Uploaded Desktop &amp; Mobile Captures
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Desktop Real Capture */}
                <div className="lg:col-span-8 rounded-xl border border-[#183F35]/20 bg-[#22392C] p-3">
                  <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-[#F7F3E9]/70">
                    <span>Desktop · Above the Fold</span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox({
                          src: UPLOADED_SCREENSHOTS.desktopHeroAndAbout,
                          alt: 'Kopi Ruang live desktop hero section screenshot',
                          caption: '01. Hero Section — Desktop Capture',
                          sourceLabel: 'Uploaded Website Capture',
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#B99A5D] hover:text-[#F7F3E9]"
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
                        sourceLabel: 'Uploaded Website Capture',
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
                  <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-[#F7F3E9]/70">
                    <span>Mobile · Responsive Stack</span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox({
                          src: UPLOADED_SCREENSHOTS.mobileHero,
                          alt: 'Kopi Ruang live mobile hero section screenshot',
                          caption: '01. Hero Section — Mobile Capture',
                          sourceLabel: 'Uploaded Website Capture',
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#B99A5D] hover:text-[#F7F3E9]"
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
                        sourceLabel: 'Uploaded Website Capture',
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

          {/* 02 — ABOUT & WHY US */}
          {isVisible('about') && (
            <ScrollReveal className="space-y-6 pt-8 border-t border-[#183F35]/10">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                    02. About &amp; Why Us
                  </h3>
                  <p className="text-sm text-[#292B28]/80 mt-1">
                    Brand story, coffee quality, and café experience framed with warm cream contrast and arched interior photography.
                  </p>
                </div>
                <span className="font-mono text-xs text-[#B99A5D]">
                  Desktop Capture + Mobile Slot
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/55 p-3">
                  <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-[#183F35]/75">
                    <span>Desktop · Lower Fold (Arched Café Interior Transition)</span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox({
                          src: UPLOADED_SCREENSHOTS.desktopHeroAndAbout,
                          alt: 'Kopi Ruang About section transition with arched cafe interior photo',
                          caption: '02. About & Why Us — Desktop Capture',
                          sourceLabel: 'Uploaded Website Capture',
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#183F35] hover:text-[#B99A5D]"
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
                        caption: '02. About & Why Us — Desktop Capture',
                        sourceLabel: 'Uploaded Website Capture',
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

                <div className="lg:col-span-4">
                  <PlaceholderViewport
                    viewport="Mobile"
                    sectionTitle="About & Why Us (Mobile)"
                    replacementHint="Placeholder marked for replacement with a dedicated mobile scroll capture of the About story & Why Us pillars."
                    liveAnchor="#tentang"
                  />
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* 03 — MENU */}
          {isVisible('menu') && (
            <ScrollReveal className="space-y-6 pt-8 border-t border-[#183F35]/10">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                    03. Menu
                  </h3>
                  <p className="text-sm text-[#292B28]/80 mt-1">
                    Coffee selections and menu presentation organized with scannable tabs and accessible price contrast.
                  </p>
                </div>
                <span className="font-mono text-xs text-[#292B28]/65">
                  Marked for Replacement
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8">
                  <PlaceholderViewport
                    viewport="Desktop"
                    sectionTitle="Menu Presentation — Desktop"
                    replacementHint="Placeholder marked for replacement with actual desktop screenshot of Kopi Ruang Menu tabs, items, and pricing."
                    liveAnchor="#menu"
                  />
                </div>
                <div className="lg:col-span-4">
                  <PlaceholderViewport
                    viewport="Mobile"
                    sectionTitle="Menu Presentation — Mobile"
                    replacementHint="Placeholder marked for replacement with actual mobile screenshot of categorized Menu list."
                    liveAnchor="#menu"
                  />
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* 04 — GALLERY */}
          {isVisible('gallery') && (
            <ScrollReveal className="space-y-6 pt-8 border-t border-[#183F35]/10">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                    04. Gallery
                  </h3>
                  <p className="text-sm text-[#292B28]/80 mt-1">
                    Visual atmosphere and interior experience presented in a balanced grid with lightbox inspection.
                  </p>
                </div>
                <span className="font-mono text-xs text-[#292B28]/65">
                  Marked for Replacement
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8">
                  <PlaceholderViewport
                    viewport="Desktop"
                    sectionTitle="Gallery Grid — Desktop"
                    replacementHint="Placeholder marked for replacement with actual desktop screenshot of the refined Gallery grid and spacing."
                    liveAnchor="#galeri"
                  />
                </div>
                <div className="lg:col-span-4">
                  <PlaceholderViewport
                    viewport="Mobile"
                    sectionTitle="Gallery Grid — Mobile"
                    replacementHint="Placeholder marked for replacement with actual mobile screenshot of the Gallery strip."
                    liveAnchor="#galeri"
                  />
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* 05 — LOCATION & FINAL CTA */}
          {isVisible('location') && (
            <ScrollReveal className="space-y-6 pt-8 border-t border-[#183F35]/10">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                    05. Location &amp; Final CTA
                  </h3>
                  <p className="text-sm text-[#292B28]/80 mt-1">
                    Location details, contact information, and direct WhatsApp ordering interaction.
                  </p>
                </div>
                <span className="font-mono text-xs text-[#292B28]/65">
                  Marked for Replacement
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8">
                  <PlaceholderViewport
                    viewport="Desktop"
                    sectionTitle="Location & WhatsApp CTA — Desktop"
                    replacementHint="Placeholder marked for replacement with actual desktop screenshot of Location details and Final CTA."
                    liveAnchor="#lokasi"
                  />
                </div>
                <div className="lg:col-span-4">
                  <PlaceholderViewport
                    viewport="Mobile"
                    sectionTitle="Location & WhatsApp CTA — Mobile"
                    replacementHint="Placeholder marked for replacement with actual mobile screenshot of Location card and Order dialog."
                    liveAnchor="#lokasi"
                  />
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
