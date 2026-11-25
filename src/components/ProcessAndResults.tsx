import React from 'react';
import { ArrowUp, ArrowUpRight, CheckCircle2, Maximize2 } from 'lucide-react';
import {
  LightboxImage,
  PAGESPEED_BENCHMARKS,
  PROJECT_LINKS,
  UPLOADED_SCREENSHOTS,
} from '../data/caseStudyData';
import { ScrollReveal, StaggerGroup, StaggerItem } from './MotionPrimitives';

interface ProcessAndResultsProps {
  onOpenLightbox: (image: LightboxImage) => void;
}

const WORKFLOW_STAGES = [
  {
    num: '01',
    title: 'DESIGN SYSTEM',
    description: 'Establish visual direction, colors, typography, and layout principles.',
  },
  {
    num: '02',
    title: 'NAVBAR & HERO',
    description: 'Build the navigation and hero section.',
  },
  {
    num: '03',
    title: 'BUILD SECTIONS',
    description: 'Develop the website in small, structured stages.',
  },
  {
    num: '04',
    title: 'REVIEW & REFINE',
    description: 'Review screenshots, identify issues, and refine the implementation.',
  },
];

const ISSUES_FIXED = [
  'Hero layout stacking on desktop',
  'Logo using a background box',
  'Repeated menu photos',
  'Loop animation issues',
  'Incorrect photos matched with menu items',
  'Gallery tile spacing and image strip refinements',
];

const ACCESSIBILITY_IMPROVEMENTS = [
  'Improved menu price contrast from 4.35:1 to 5.38:1',
  'Fixed contact list markup for screen readers',
  'Improved keyboard accessibility for tabs, lightbox, and order dialog',
  'Converted website images to WebP to reduce image weight',
];

const LIMITATIONS_AND_VALIDATION = [
  {
    num: '01',
    title: 'CONCEPT-ONLY BRAND DATA',
    text: 'Kopi Ruang is a fictional café concept; menu items, pricing, and illustrative social proof (such as the 4.8★ Google badge and sample reviews) demonstrate layout hierarchy rather than real business metrics.',
  },
  {
    num: '02',
    title: 'UNVALIDATED USER ASSUMPTIONS',
    text: 'Visitor needs and content priorities were derived from domain assumptions rather than interviews, usability testing, or live analytics.',
  },
  {
    num: '03',
    title: 'NEXT VALIDATION STEPS',
    text: 'Conduct task-based usability testing on Menu category filtering and the WhatsApp ordering dialog, check mobile readability in bright outdoor light, and validate conversion behavior with a real café partner.',
  },
];

const REFLECTION_POINTS = [
  {
    num: '01',
    title: 'VISUAL DIRECTION',
    text: 'Turning a brand concept into a consistent digital visual experience.',
  },
  {
    num: '02',
    title: 'DESIGN SYSTEM',
    text: 'Building reusable visual foundations.',
  },
  {
    num: '03',
    title: 'AI-ASSISTED DEVELOPMENT',
    text: 'Working with AI tools through structured prompts and iterative development.',
  },
  {
    num: '04',
    title: 'ITERATION',
    text: 'Reviewing screenshots, identifying problems, and refining the website.',
  },
  {
    num: '05',
    title: 'QUALITY',
    text: 'Understanding accessibility, responsiveness, and website performance.',
  },
];

function ScoreGauge({ label, score }: { label: string; score: number }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center gap-2.5 p-4 rounded-xl border border-[#183F35]/12 bg-white/50">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80" aria-hidden="true">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="#E8DFD0"
            strokeWidth="5"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="#183F35"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>
        <span className="absolute font-mono text-lg font-semibold text-[#183F35] tabular-nums">
          {score}
        </span>
      </div>
      <span className="text-xs font-medium text-[#292B28]/85">{label}</span>
    </div>
  );
}

export function ProcessAndResults({ onOpenLightbox }: ProcessAndResultsProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 12 — AI-ASSISTED DEVELOPMENT */}
      <section id="process" className="py-20 sm:py-28 bg-[#F7F3E9] border-b border-[#183F35]/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <ScrollReveal className="lg:col-span-6 space-y-4">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#B99A5D]">
                08 · Building With AI, Step By Step
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#183F35]">
                “From design direction to a live website.”
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-6">
              <p className="text-base leading-relaxed text-[#292B28]/85">
                “The website was developed with AI assistance using Google AI Studio (Gemini). The process involved building the website in small stages, reviewing screenshots, identifying inconsistencies, and refining the result through iterative feedback.”
              </p>
            </ScrollReveal>
          </div>

          {/* 4-Stage Structured Workflow Timeline */}
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WORKFLOW_STAGES.map((stage) => (
              <StaggerItem
                key={stage.num}
                className="p-6 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/45 space-y-3"
              >
                <span className="font-serif text-2xl text-[#B99A5D] tabular-nums block">
                  {stage.num}
                </span>
                <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                  {stage.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#292B28]/80">
                  {stage.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Dark Forest-Green Panel: ISSUES FOUND & FIXED */}
          <ScrollReveal>
            <div className="rounded-2xl bg-[#183F35] text-[#F7F3E9] p-7 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-3">
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#B99A5D]">
                    Iterative Refinement Log
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F3E9]">
                    ISSUES FOUND &amp; FIXED
                  </h3>
                  <p className="text-sm leading-relaxed text-[#F7F3E9]/75">
                    Visual and functional defects caught during screenshot reviews and resolved through focused follow-up prompts.
                  </p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 border-t lg:border-t-0 lg:border-l border-[#F7F3E9]/15 pt-6 lg:pt-0 lg:pl-10">
                  {ISSUES_FIXED.map((issue, idx) => (
                    <div key={issue} className="flex items-start gap-3 py-1">
                      <span className="font-mono text-xs text-[#B99A5D] tabular-nums mt-0.5 shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="text-sm sm:text-[15px] text-[#F7F3E9]/90 leading-snug">
                        {issue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 13 — ACCESSIBILITY & PERFORMANCE */}
      <section id="results" className="py-20 sm:py-28 bg-[#F7F3E9] border-b border-[#183F35]/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <ScrollReveal className="lg:col-span-6 space-y-4">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#B99A5D]">
                09 · Accessibility &amp; Performance
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#183F35]">
                “Design is more than how it looks.”
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-6">
              <p className="text-base leading-relaxed text-[#292B28]/85">
                “The website was evaluated using Google PageSpeed Insights, and several refinements were made to improve visual clarity, accessibility, and performance.”
              </p>
            </ScrollReveal>
          </div>

          {/* Score Visualization & Real Uploaded PageSpeed Screenshots */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Verified Scores Matching Screenshots + Actual Improvements */}
            <ScrollReveal className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-[#183F35]/12 pb-2.5">
                  <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                    Mobile PageSpeed Scores
                  </h3>
                  <span className="font-mono text-xs text-[#292B28]/65">
                    Google PageSpeed Insights
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {PAGESPEED_BENCHMARKS.mobile.map((item) => (
                    <ScoreGauge key={item.label} label={item.label} score={item.score} />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-[#183F35]/12 pb-2.5">
                  <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                    Desktop PageSpeed Scores
                  </h3>
                  <span className="font-mono text-xs text-[#292B28]/65">
                    Google PageSpeed Insights
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {PAGESPEED_BENCHMARKS.desktop.map((item) => (
                    <ScoreGauge key={item.label} label={item.label} score={item.score} />
                  ))}
                </div>
              </div>

              {/* Improvements Actually Performed */}
              <div className="p-6 sm:p-7 rounded-xl bg-[#E8DFD0]/55 border border-[#183F35]/12 space-y-4">
                <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                  Refinements Performed Before Final Audit
                </h3>
                <ul className="space-y-2.5">
                  {ACCESSIBILITY_IMPROVEMENTS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#292B28]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#183F35] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Right: Uploaded Real PageSpeed Insights Screenshots */}
            <ScrollReveal delay={0.12} className="lg:col-span-5 space-y-4">
              <div className="flex items-baseline justify-between border-b border-[#183F35]/12 pb-2.5">
                <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                  Captured Audit Evidence
                </h3>
                <span className="font-mono text-xs text-[#B99A5D]">Click to zoom</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() =>
                    onOpenLightbox({
                      src: UPLOADED_SCREENSHOTS.pagespeedMobile,
                      alt: 'Google PageSpeed Insights Mobile audit screenshot showing 92 Performance and 100 Accessibility, Best Practices, and SEO',
                      caption: 'PageSpeed Insights — Mobile Capture (92 / 100 / 100 / 100)',
                      sourceLabel: 'Uploaded Audit Screenshot',
                    })
                  }
                  className="group text-left rounded-xl border border-[#183F35]/15 bg-white p-2.5 hover:border-[#183F35]/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
                >
                  <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-[#F7F3E9]">
                    <img
                      src={UPLOADED_SCREENSHOTS.pagespeedMobile}
                      alt="PageSpeed Insights Mobile screenshot showing 92 Performance, 100 Accessibility, 100 Best Practices, 100 SEO"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="pt-2.5 flex items-center justify-between text-xs text-[#183F35]">
                    <span className="font-medium">Mobile (92 / 100)</span>
                    <Maximize2 className="w-3.5 h-3.5 text-[#B99A5D]" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    onOpenLightbox({
                      src: UPLOADED_SCREENSHOTS.pagespeedDesktop,
                      alt: 'Google PageSpeed Insights Desktop audit screenshot showing 100 across Performance, Accessibility, Best Practices, and SEO',
                      caption: 'PageSpeed Insights — Desktop Capture (100 / 100 / 100 / 100)',
                      sourceLabel: 'Uploaded Audit Screenshot',
                    })
                  }
                  className="group text-left rounded-xl border border-[#183F35]/15 bg-white p-2.5 hover:border-[#183F35]/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183F35]"
                >
                  <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-[#F7F3E9]">
                    <img
                      src={UPLOADED_SCREENSHOTS.pagespeedDesktop}
                      alt="PageSpeed Insights Desktop screenshot showing 100 across Performance, Accessibility, Best Practices, and SEO"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="pt-2.5 flex items-center justify-between text-xs text-[#183F35]">
                    <span className="font-medium">Desktop (100 / 100)</span>
                    <Maximize2 className="w-3.5 h-3.5 text-[#B99A5D]" />
                  </div>
                </button>
              </div>

              <p className="text-xs text-[#292B28]/75 leading-relaxed">
                Values match the captured synthetic PageSpeed Insights lab benchmarks directly (Mobile: 92 Performance, 100 Accessibility, 100 Best Practices, 100 SEO; Desktop: 100 across all four categories). Real-world field user telemetry was not collected.
              </p>
            </ScrollReveal>
          </div>

          {/* LIMITATIONS & FUTURE VALIDATION */}
          <ScrollReveal className="pt-8 border-t border-[#183F35]/12 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div className="space-y-1">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#B99A5D]">
                  Scope Boundaries
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                  Limitations &amp; Future Validation
                </h3>
              </div>
              <p className="text-xs text-[#292B28]/70 max-w-md">
                Transparent distinction between concept execution and empirical research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {LIMITATIONS_AND_VALIDATION.map((item) => (
                <div
                  key={item.num}
                  className="p-6 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/35 space-y-2.5"
                >
                  <span className="font-mono text-xs text-[#B99A5D] tabular-nums block">
                    {item.num}
                  </span>
                  <h4 className="font-sans text-xs font-semibold tracking-[0.14em] uppercase text-[#183F35]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#292B28]/85 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 14 — REFLECTION */}
      <section className="py-20 sm:py-28 bg-[#E8DFD0]/75">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
          <ScrollReveal className="max-w-2xl space-y-4">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#183F35]">
              10 · What I Learned
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#183F35]">
              “Building beyond the design canvas.”
            </h2>
          </ScrollReveal>

          <StaggerGroup className="divide-y divide-[#183F35]/14 border-y border-[#183F35]/14">
            {REFLECTION_POINTS.map((item) => (
              <StaggerItem
                key={item.num}
                className="py-6 sm:py-7 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline"
              >
                <span className="md:col-span-2 font-mono text-sm text-[#B99A5D] tabular-nums">
                  {item.num}
                </span>
                <h3 className="md:col-span-4 font-sans text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#183F35]">
                  {item.title}
                </h3>
                <p className="md:col-span-6 text-base text-[#292B28]/88 leading-relaxed">
                  {item.text}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 15 — CLOSING & FOOTER */}
      <footer className="bg-[#183F35] text-[#F7F3E9]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center space-y-8">
          <ScrollReveal className="max-w-2xl mx-auto space-y-5">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#B99A5D]">
              Closing Reflection
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl leading-[1.1] text-[#F7F3E9]">
              “From an idea to a digital experience.”
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#F7F3E9]/82">
              “Kopi Ruang became an opportunity to explore how visual design, structured content, and AI-assisted development can come together to create a meaningful web experience.”
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={PROJECT_LINKS.liveWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#B99A5D] text-[#183F35] text-sm font-semibold tracking-wide hover:bg-[#c8ab6f] transition-colors whitespace-nowrap"
            >
              <span>View Live Website</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-[#F7F3E9]/30 text-[#F7F3E9] text-sm font-medium tracking-wide hover:bg-[#F7F3E9]/10 transition-colors whitespace-nowrap"
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-150 group-hover:-translate-y-0.5" />
              <span>Back to Top</span>
            </button>
          </ScrollReveal>
        </div>

        {/* Minimal Footer */}
        <div className="border-t border-[#F7F3E9]/14">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F3E9]/72">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="font-serif text-sm text-[#F7F3E9]">Irfan Fahrezi</span>
              <span aria-hidden="true">·</span>
              <span>UI/UX Designer</span>
              <span aria-hidden="true">·</span>
              <span>Kopi Ruang Concept Case Study</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <a
                href={`mailto:${PROJECT_LINKS.designerEmail}`}
                className="hover:text-[#B99A5D] transition-colors"
              >
                {PROJECT_LINKS.designerEmail}
              </a>
              <a
                href={PROJECT_LINKS.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#B99A5D] transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
