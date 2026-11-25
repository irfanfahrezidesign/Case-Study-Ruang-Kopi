import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Copy } from 'lucide-react';
import {
  COLOR_PALETTE,
  EDITORIAL_IMAGES,
  PAGE_STRUCTURE_STEPS,
} from '../data/caseStudyData';
import { KopiRuangLogo } from './KopiRuangLogo';
import { ScrollReveal, StaggerGroup, StaggerItem } from './MotionPrimitives';

const MOOD_ATTRIBUTES = [
  'Specialty coffee',
  'Ceramic cups',
  'Coffee brewing',
  'Natural light',
  'Warm wood',
  'Cozy interiors',
  'Coffee bar atmosphere',
  'Earthy textures',
  'Minimal specialty café aesthetic',
];

export function VisualAndSystem() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeButtonDemo, setActiveButtonDemo] = useState<'default' | 'order'>('default');

  const handleCopyHex = (hex: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hex).catch(() => {});
    }
    setCopiedHex(hex);
    window.setTimeout(() => {
      setCopiedHex((prev) => (prev === hex ? null : prev));
    }, 1500);
  };

  return (
    <>
      {/* 08 — VISUAL DIRECTION */}
      <section id="visual-design" className="py-20 sm:py-28 bg-[#E8DFD0]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <ScrollReveal className="lg:col-span-6 space-y-4">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#183F35]">
                04 · Visual Direction
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#183F35]">
                “Rooted in the essence of Kopi Ruang.”
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-6 space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-[#292B28]/90 italic font-serif">
                “Warm neutrals create an inviting atmosphere, forest green establishes the brand's visual identity, and muted gold introduces a subtle sense of refinement.”
              </p>
              <p className="text-xs tracking-wide text-[#292B28]/75">
                {MOOD_ATTRIBUTES.join(' · ')}
              </p>
            </ScrollReveal>
          </div>

          {/* Editorial Asymmetrical Moodboard */}
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            <StaggerItem className="md:col-span-5">
              <div className="h-full overflow-hidden rounded-t-[200px] rounded-b-xl border border-[#183F35]/15 bg-[#F7F3E9] group">
                <img
                  src={EDITORIAL_IMAGES.moodboardInterior}
                  alt="Cozy Indonesian specialty coffee shop interior with forest green velvet seating, warm oak wood, and plaster archway"
                  referrerPolicy="no-referrer"
                  className="w-full h-full min-h-[320px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </StaggerItem>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <StaggerItem className="sm:col-span-2">
                <div className="overflow-hidden rounded-xl border border-[#183F35]/15 bg-[#F7F3E9] group">
                  <img
                    src={EDITORIAL_IMAGES.moodboardPourOver}
                    alt="Minimalist specialty coffee pour-over brewing with ceramic dripper and copper kettle in natural daylight"
                    referrerPolicy="no-referrer"
                    className="w-full aspect-[16/9] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="h-full overflow-hidden rounded-xl border border-[#183F35]/15 bg-[#F7F3E9] group">
                  <img
                    src={EDITORIAL_IMAGES.moodboardCeramic}
                    alt="Handmade matte ceramic coffee cup on warm walnut wood surface"
                    referrerPolicy="no-referrer"
                    className="w-full h-full aspect-square object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="h-full overflow-hidden rounded-xl border border-[#183F35]/15 bg-[#F7F3E9] group">
                  <img
                    src={EDITORIAL_IMAGES.moodboardCoffeeBar}
                    alt="Minimalist specialty coffee bar with forest green cabinetry, brass accents, and stoneware"
                    referrerPolicy="no-referrer"
                    className="w-full h-full aspect-[4/3] sm:aspect-square object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </StaggerItem>
            </div>
          </StaggerGroup>
        </div>
      </section>

      {/* 09 — DESIGN SYSTEM */}
      <section className="py-20 sm:py-28 bg-[#F7F3E9] border-b border-[#183F35]/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-16">
          <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#B99A5D]">
                05 · Design System
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#183F35]">
                “Consistency creates the experience.”
              </h2>
            </div>
            <p className="text-sm text-[#292B28]/75 max-w-md leading-relaxed">
              Visual foundations translated directly from the Kopi Ruang style guide into reusable tokens, typography, and architectural arch components.
            </p>
          </ScrollReveal>

          {/* 1. Color Palette Demonstration */}
          <ScrollReveal className="space-y-5">
            <div className="flex items-baseline justify-between border-b border-[#183F35]/12 pb-3">
              <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                Color Palette
              </h3>
              <span className="text-xs text-[#292B28]/65">Click any swatch to copy HEX</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {COLOR_PALETTE.map((swatch) => {
                const isCopied = copiedHex === swatch.hex;
                return (
                  <button
                    key={swatch.hex}
                    type="button"
                    onClick={() => handleCopyHex(swatch.hex)}
                    className="group text-left rounded-xl border border-[#183F35]/15 bg-white/40 p-2.5 hover:border-[#183F35]/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
                  >
                    <div
                      className="h-24 rounded-lg border border-[#183F35]/10 flex items-end justify-between p-2.5"
                      style={{ backgroundColor: swatch.hex }}
                    >
                      <span
                        className={`font-mono text-[11px] font-medium ${
                          swatch.textDark ? 'text-[#292B28]' : 'text-[#F7F3E9]'
                        }`}
                      >
                        {swatch.hex}
                      </span>
                      <span
                        className={`opacity-70 group-hover:opacity-100 transition-opacity ${
                          swatch.textDark ? 'text-[#292B28]' : 'text-[#F7F3E9]'
                        }`}
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </span>
                    </div>
                    <div className="pt-2.5 px-1 space-y-1">
                      <p className="text-xs font-semibold text-[#183F35]">{swatch.name}</p>
                      <p className="text-[11px] leading-snug text-[#292B28]/70">{swatch.role}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* 2. Typography Hierarchy & UI Components */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Typography Specimen */}
            <ScrollReveal className="lg:col-span-7 p-6 sm:p-8 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/40 space-y-7">
              <div className="flex items-baseline justify-between border-b border-[#183F35]/12 pb-3">
                <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                  Typography Hierarchy
                </h3>
                <span className="font-mono text-xs text-[#292B28]/65">Fraunces + DM Sans</span>
              </div>

              <div className="space-y-6">
                <div className="space-y-1.5">
                  <p className="font-mono text-[11px] text-[#B99A5D]">
                    DISPLAY H1 · FRAUNCES · 56–68PX / 1.05
                  </p>
                  <p className="font-serif text-3xl sm:text-4xl text-[#183F35] leading-tight">
                    Ruang untuk Fokus, Ruang untuk Bercerita.
                  </p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-[#183F35]/10">
                  <p className="font-mono text-[11px] text-[#B99A5D]">
                    SECTION H2 · FRAUNCES · 32–42PX / 1.15
                  </p>
                  <p className="font-serif text-2xl text-[#22392C]">
                    Crafted with local Indonesian specialty beans
                  </p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-[#183F35]/10">
                  <p className="font-mono text-[11px] text-[#B99A5D]">
                    BODY COPY · DM SANS · 16PX / 1.65
                  </p>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#292B28]/85 max-w-xl">
                    Clean, open geometric proportions balance the expressive curves of Fraunces, keeping menu descriptions, location hours, and contact actions effortless to scan.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Buttons, Spacing & Arch Motifs */}
            <ScrollReveal delay={0.1} className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Button Styles & UI Controls */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#183F35] text-[#F7F3E9] space-y-5">
                <div className="flex items-baseline justify-between border-b border-[#F7F3E9]/15 pb-3">
                  <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#B99A5D]">
                    Button Styles &amp; UI Elements
                  </h3>
                  <span className="font-mono text-[11px] text-[#F7F3E9]/60">Interactive States</span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveButtonDemo('order')}
                    className="px-5 py-2.5 rounded-md bg-[#B99A5D] text-[#183F35] text-sm font-semibold hover:bg-[#c8ab6f] transition-colors whitespace-nowrap"
                  >
                    Pesan Online
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveButtonDemo('default')}
                    className="px-5 py-2.5 rounded-md border border-[#B99A5D]/70 text-[#F7F3E9] text-sm font-medium hover:bg-[#F7F3E9]/10 transition-colors whitespace-nowrap"
                  >
                    Kunjungi Kami
                  </button>
                </div>

                <p className="text-xs text-[#F7F3E9]/75">
                  {activeButtonDemo === 'order'
                    ? 'Primary Muted Gold action triggers the WhatsApp order flow on the live site.'
                    : 'Secondary hairline outline guides visitors smoothly to the café location section.'}
                </p>

                <div className="pt-3 border-t border-[#F7F3E9]/15 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#F7F3E9]/80">
                  <span>WiFi Cepat</span>
                  <span>·</span>
                  <span>Biji Kopi Lokal</span>
                  <span>·</span>
                  <span>4.8★ Google</span>
                </div>
              </div>

              {/* Arch Motif & Grid Specs */}
              <div className="p-6 sm:p-7 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/45 flex items-center justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                    Arch Motif &amp; Grid
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292B28]/80 leading-relaxed">
                    12-column desktop container (1200px max) with 8px spacing scale and signature arch photography framing with thin gold offset lines.
                  </p>
                </div>

                <div className="shrink-0 p-3 rounded-lg bg-[#183F35]">
                  <KopiRuangLogo variant="light" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 10 — PAGE STRUCTURE */}
      <section className="py-20 sm:py-28 bg-[#E8DFD0]/70">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <ScrollReveal className="lg:col-span-6 space-y-4">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#183F35]">
                06 · Page Structure
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#183F35]">
                “From discovery to action.”
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="lg:col-span-6">
              <p className="text-base leading-relaxed text-[#292B28]/85">
                “A connected one-page experience designed to guide visitors from discovering the brand to exploring its offerings and taking action.”
              </p>
            </ScrollReveal>
          </div>

          {/* Alternating Forest-Green & Cream Vertical Flow Diagram */}
          <StaggerGroup className="max-w-4xl mx-auto space-y-3">
            {PAGE_STRUCTURE_STEPS.map((step, index) => {
              const isDark = step.tone === 'dark';
              return (
                <StaggerItem key={step.num}>
                  <div
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 rounded-xl border transition-transform duration-200 ${
                      isDark
                        ? 'bg-[#183F35] text-[#F7F3E9] border-[#183F35]'
                        : 'bg-[#F7F3E9] text-[#183F35] border-[#183F35]/20'
                    }`}
                  >
                    <div className="flex items-baseline gap-4 shrink-0">
                      <span className="font-mono text-xs tabular-nums text-[#B99A5D]">
                        {step.num}
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-medium tracking-wide">
                        {step.name}
                      </span>
                    </div>

                    <p
                      className={`text-sm leading-snug sm:text-right ${
                        isDark ? 'text-[#F7F3E9]/80' : 'text-[#292B28]/80'
                      }`}
                    >
                      {step.detail}
                    </p>
                  </div>

                  {index < PAGE_STRUCTURE_STEPS.length - 1 && (
                    <div className="flex justify-center py-1" aria-hidden="true">
                      <ArrowDown className="w-4 h-4 text-[#B99A5D]" />
                    </div>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
