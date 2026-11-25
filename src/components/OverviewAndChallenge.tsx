import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EDITORIAL_IMAGES } from '../data/caseStudyData';
import { ScrollReveal, StaggerGroup, StaggerItem, SubtleParallax } from './MotionPrimitives';

const PROJECT_OBJECTIVES = [
  'Communicate the brand identity.',
  'Create a welcoming online atmosphere.',
  'Showcase coffee and menu offerings.',
  'Introduce the café experience.',
  'Make location and contact information easy to find.',
  'Encourage visitors to explore or make contact.',
];

const CHALLENGE_OBJECTIVES = [
  {
    num: '01',
    title: 'CREATE AN ATMOSPHERE',
    description:
      "Communicate the café's character and welcoming environment through visual design and AI-curated photography.",
  },
  {
    num: '02',
    title: 'MAKE INFORMATION EASY TO FIND',
    description:
      'Organize menu, café information, gallery, and location into a clear experience.',
  },
  {
    num: '03',
    title: 'TURN DISCOVERY INTO ACTION',
    description:
      'Guide visitors toward exploring the menu, visiting the café, or contacting the business.',
  },
];

const AUDIENCE_MAPPINGS = [
  {
    audience: 'STUDENTS & REMOTE WORKERS',
    assumptionNote: 'Design Assumption · Unvalidated',
    need: 'Likely prioritize workspace comfort, reliable connectivity, and straightforward directions before choosing a café.',
    supportLabel: 'Design Response in Website',
    supportContent:
      'Hero highlights (WiFi Cepat) answer practicality above the fold, Gallery conveys seating atmosphere, and Location consolidates hours and directions.',
    sections: ['01 Hero', '05 Gallery', '07 Location'],
  },
  {
    audience: 'YOUNG PROFESSIONALS',
    assumptionNote: 'Design Assumption · Unvalidated',
    need: 'Likely scan quickly for brand quality, offerings, and an effortless way to pre-order or coordinate a visit.',
    supportLabel: 'Design Response in Website',
    supportContent:
      'Sticky anchor navigation enables one-click jumping across sections, while the persistent Pesan Online CTA opens a direct WhatsApp ordering flow.',
    sections: ['02 About', '03 Why Us', '08 Final CTA'],
  },
  {
    audience: 'COFFEE ENTHUSIASTS',
    assumptionNote: 'Design Assumption · Unvalidated',
    need: 'Likely look for bean provenance, brewing craft cues, and clear menu categorization with transparent pricing.',
    supportLabel: 'Design Response in Website',
    supportContent:
      'Editorial pour-over photography establishes craft credibility, supported by categorized Menu tabs across 12 items and illustrative concept social proof in Reviews.',
    sections: ['03 Why Us', '04 Menu', '06 Reviews (Illustrative)'],
  },
];

export function OverviewAndChallenge() {
  return (
    <>
      {/* 05 — PROJECT OVERVIEW */}
      <section id="overview" className="py-20 sm:py-28 bg-[#F7F3E9]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <ScrollReveal className="lg:col-span-5 space-y-6">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6B5230]">
                01 · The Project
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#183F35]">
                “A coffee shop experience, translated into the digital space.”
              </h2>
              <p className="text-base leading-relaxed text-[#292B28]/88">
                Kopi Ruang is a fictional specialty coffee shop concept built from a Protolabs brief. Because there is no real-world client, all business data—including menu prices, street address, contact details, customer counts, ratings, and testimonials—is entirely fictional and created solely to simulate a realistic café profile.
              </p>
              <p className="text-sm leading-relaxed text-[#292B28]/80">
                The imagery across both the website and this case study was generated with AI and curated to match the brand’s visual tone, while the front-end code was built with assistance from Google AI Studio.
              </p>
            </ScrollReveal>

            <div className="lg:col-span-7 space-y-10">
              <ScrollReveal delay={0.1}>
                <div className="relative overflow-hidden rounded-t-[180px] rounded-b-xl border border-[#183F35]/15 bg-[#E8DFD0]">
                  <SubtleParallax offset={14}>
                    <img
                      src={EDITORIAL_IMAGES.overviewCraft}
                      alt="AI-generated editorial photography of specialty Indonesian coffee pour-over carafe and ceramic cups on travertine and linen"
                      width={1376}
                      height={768}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[16/9] object-cover scale-[1.04]"
                    />
                  </SubtleParallax>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="space-y-4">
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#183F35]">
                  Project Objectives
                </p>
                <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 border-t border-[#183F35]/12 pt-5">
                  {PROJECT_OBJECTIVES.map((objective, idx) => (
                    <StaggerItem key={objective} className="flex items-baseline gap-3 py-1">
                      <span className="font-mono text-xs font-medium text-[#6B5230] tabular-nums shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="text-sm sm:text-[15px] text-[#292B28]/90 leading-snug">
                        {objective}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — THE CHALLENGE */}
      <section id="challenge" className="py-20 sm:py-28 bg-[#183F35] text-[#F7F3E9]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <ScrollReveal className="lg:col-span-7 space-y-5">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#B99A5D]">
                02 · The Challenge
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-[#F7F3E9]">
                “Good coffee deserves a digital experience that feels just as inviting.”
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-5">
              <p className="text-base leading-relaxed text-[#F7F3E9]/82">
                Design a one-page company profile website that captures the warmth and quality of a specialty coffee café while structuring navigation, menu discovery, location details, and WhatsApp ordering into a friction-free flow.
              </p>
            </ScrollReveal>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 border-t border-[#F7F3E9]/15">
            {CHALLENGE_OBJECTIVES.map((item, index) => (
              <StaggerItem
                key={item.num}
                className={`pt-8 pb-4 md:py-10 ${
                  index < CHALLENGE_OBJECTIVES.length - 1
                    ? 'md:pr-8 md:border-r md:border-[#F7F3E9]/15'
                    : ''
                } ${index > 0 ? 'md:pl-8 border-t md:border-t-0 border-[#F7F3E9]/15' : ''}`}
              >
                <span className="font-serif text-3xl text-[#B99A5D] tabular-nums block mb-4">
                  {item.num}
                </span>
                <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#F7F3E9] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#F7F3E9]/78">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 07 — GOALS & USERS */}
      <section className="py-20 sm:py-28 bg-[#F7F3E9] border-b border-[#183F35]/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
          <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6B5230]">
                03 · Design Assumptions &amp; Intended Visitor Journey
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#183F35]">
                “One experience. Three audiences.”
              </h2>
            </div>
            <p className="text-sm text-[#292B28]/80 max-w-md leading-relaxed">
              Because this is a concept project, these audience profiles are <strong className="font-medium text-[#183F35]">design assumptions</strong>—not research-validated personas—used to hypothesize how navigation, menu, location, and WhatsApp CTAs serve different visitor intents.
            </p>
          </ScrollReveal>

          <StaggerGroup className="space-y-4">
            {AUDIENCE_MAPPINGS.map((row) => (
              <StaggerItem
                key={row.audience}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8 rounded-xl bg-[#E8DFD0]/55 border border-[#183F35]/12"
              >
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                      {row.audience}
                    </p>
                    <span className="font-mono text-[11px] text-[#292B28]/80">
                      {row.assumptionNote}
                    </span>
                  </div>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#292B28]/88">
                    {row.need}
                  </p>
                </div>

                <div className="lg:col-span-2 flex items-center justify-start lg:justify-center">
                  <div className="inline-flex items-center gap-2 text-[#6B5230]">
                    <span className="hidden lg:block w-12 h-px bg-[#6B5230]/50" aria-hidden="true" />
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    <span className="lg:hidden text-xs uppercase tracking-[0.14em] font-medium">
                      Design Response
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-2.5 lg:pl-4 lg:border-l lg:border-[#183F35]/12">
                  <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6B5230]">
                    {row.supportLabel}
                  </p>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#183F35] font-medium">
                    {row.supportContent}
                  </p>
                  <p className="text-xs text-[#292B28]/80 font-mono">
                    {row.sections.join(' · ')}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
