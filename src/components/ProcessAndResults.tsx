import React from 'react';
import { ArrowUp, ArrowUpRight, CheckCircle2, Gauge } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import {
  PAGESPEED_BENCHMARKS,
  PROJECT_LINKS,
} from '../data/caseStudyData';
import { ScrollReveal, StaggerGroup, StaggerItem } from './MotionPrimitives';

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
    description: 'Develop the 9 sections in small, structured stages using Google AI Studio.',
  },
  {
    num: '04',
    title: 'REVIEW, DEPLOY & REFINE',
    description:
      'Review screenshots, resolve Vercel build issues (.npmrc legacy-peer-deps=true for esbuild/vite conflict), and refine QA.',
  },
];

const ISSUES_FIXED = [
  'Hero layout stacking on desktop',
  'Logo using a background box',
  'Third-party brand marks visible in AI-generated photos',
  'Repeated menu photos across 12 menu items',
  'Incorrect photos matched with menu items',
  'Gallery tile spacing with empty image strip',
];

const ACCESSIBILITY_IMPROVEMENTS = [
  'Improved menu price contrast from 4.35:1 to 5.38:1 (WCAG AA)',
  'Converted website images to WebP, reducing image weight from ~6.8 MB to ~0.7 MB',
  'Fixed contact list markup for screen readers',
  'Improved keyboard accessibility for tabs, lightbox, and order dialog',
];

const LIMITATIONS_AND_VALIDATION = [
  {
    num: '01',
    title: 'CONCEPT-ONLY BRAND DATA',
    text: 'Kopi Ruang is a fictional café concept from a Protolabs brief; menu prices, address, contacts, customer counts, ratings, and testimonials are fictional, and all café photos were generated with AI.',
  },
  {
    num: '02',
    title: 'UNVALIDATED USER ASSUMPTIONS',
    text: 'Visitor needs and content priorities were derived from domain assumptions rather than interviews, usability testing, or live analytics.',
  },
  {
    num: '03',
    title: 'NEXT VALIDATION STEPS',
    text: 'Re-run Google PageSpeed Insights to capture an updated Accessibility score after post-audit refinements, then conduct usability testing on Menu category tabs and the WhatsApp ordering dialog.',
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
    text: 'Working with Google AI Studio through structured prompts, iterative code generation, and deployment debugging.',
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

function ScoreGauge({
  label,
  score,
  displayValue,
}: {
  label: string;
  score: number;
  displayValue: string;
}) {
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
        <span className="absolute font-mono text-base font-semibold text-[#183F35] tabular-nums">
          {displayValue}
        </span>
      </div>
      <span className="text-xs font-medium text-[#292B28]/88">{label}</span>
    </div>
  );
}

export function ProcessAndResults() {
  const prefersReduced = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  return (
    <>
      {/* 12 — AI-ASSISTED DEVELOPMENT */}
      <section id="process" className="py-20 sm:py-28 bg-[#F7F3E9] border-b border-[#183F35]/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <ScrollReveal className="lg:col-span-6 space-y-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6B5230]">
                08 · Building With AI, Step By Step
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#183F35]">
                “From design direction to a live website.”
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-6">
              <p className="text-base leading-relaxed text-[#292B28]/88">
                “The website code was built with assistance from Google AI Studio, while café photography was generated with AI. The process involved building the site in small stages, resolving a first-build dependency conflict on Vercel (esbuild and Vite, fixed via .npmrc legacy-peer-deps=true), and refining visual defects through screenshot QA.”
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
                <span className="font-serif text-2xl text-[#6B5230] tabular-nums block">
                  {stage.num}
                </span>
                <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                  {stage.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#292B28]/85">
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
                  <p className="text-sm leading-relaxed text-[#F7F3E9]/80">
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
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6B5230]">
                09 · Accessibility &amp; Performance
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#183F35]">
                “Design is more than how it looks.”
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-6">
              <p className="text-base leading-relaxed text-[#292B28]/88">
                “The website was evaluated using Google PageSpeed Insights, and image and contrast refinements were applied. Because Accessibility has not yet been re-tested after those updates, only verified Performance, Best Practices, and SEO benchmarks are reported below.”
              </p>
            </ScrollReveal>
          </div>

          {/* Score Visualization & Placeholder Frame */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Verified Scores + Refinements */}
            <ScrollReveal className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-[#183F35]/12 pb-2.5">
                  <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                    Mobile PageSpeed Scores
                  </h3>
                  <span className="font-mono text-xs text-[#292B28]/78">
                    Google PageSpeed Insights
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {PAGESPEED_BENCHMARKS.mobile.map((item) => (
                    <ScoreGauge
                      key={item.label}
                      label={item.label}
                      score={item.score}
                      displayValue={item.displayValue}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-[#183F35]/12 pb-2.5">
                  <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                    Desktop PageSpeed Scores
                  </h3>
                  <span className="font-mono text-xs text-[#292B28]/78">
                    Google PageSpeed Insights
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {PAGESPEED_BENCHMARKS.desktop.map((item) => (
                    <ScoreGauge
                      key={item.label}
                      label={item.label}
                      score={item.score}
                      displayValue={item.displayValue}
                    />
                  ))}
                </div>
                <p className="text-xs text-[#292B28]/80 leading-relaxed">
                  Accessibility status: Not yet re-tested after post-audit refinements, so no Accessibility score is claimed here.
                </p>
              </div>

              {/* Refinements Performed */}
              <div className="p-6 sm:p-7 rounded-xl bg-[#E8DFD0]/55 border border-[#183F35]/12 space-y-4">
                <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                  Refinements Performed
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

            {/* Right: Updated PageSpeed Screenshot Placeholder Frame */}
            <ScrollReveal delay={0.12} className="lg:col-span-5 space-y-4">
              <div className="flex items-baseline justify-between border-b border-[#183F35]/12 pb-2.5">
                <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#183F35]">
                  Audit Evidence
                </h3>
                <span className="font-mono text-xs font-medium text-[#6B5230]">
                  Pending Updated Capture
                </span>
              </div>

              <div className="rounded-xl border border-dashed border-[#183F35]/30 bg-[#E8DFD0]/45 p-8 sm:p-10 min-h-[340px] flex flex-col items-center justify-center text-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#183F35]/20 bg-[#F7F3E9] flex items-center justify-center text-[#183F35]">
                  <Gauge className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="space-y-2 max-w-xs">
                  <p className="font-serif text-xl text-[#183F35] leading-snug">
                    PageSpeed Insights (mobile dan desktop), akan diperbarui
                  </p>
                  <p className="text-xs text-[#292B28]/80 leading-relaxed">
                    Updated PageSpeed Insights captures will be placed here once the Accessibility re-test is completed.
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#292B28]/80 leading-relaxed">
                Reported values represent synthetic PageSpeed Insights lab benchmarks (Mobile Performance 92–93, Desktop Performance 100, Best Practices 100, SEO 100). Real-world field user telemetry was not collected.
              </p>
            </ScrollReveal>
          </div>

          {/* LIMITATIONS & FUTURE VALIDATION */}
          <ScrollReveal className="pt-8 border-t border-[#183F35]/12 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6B5230]">
                  Scope Boundaries
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#183F35]">
                  Limitations &amp; Future Validation
                </h3>
              </div>
              <p className="text-xs text-[#292B28]/80 max-w-md">
                Transparent distinction between concept execution and empirical research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {LIMITATIONS_AND_VALIDATION.map((item) => (
                <div
                  key={item.num}
                  className="p-6 rounded-xl border border-[#183F35]/15 bg-[#E8DFD0]/35 space-y-2.5"
                >
                  <span className="font-mono text-xs font-medium text-[#6B5230] tabular-nums block">
                    {item.num}
                  </span>
                  <h4 className="font-sans text-xs font-semibold tracking-[0.14em] uppercase text-[#183F35]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#292B28]/88 leading-relaxed">
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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#183F35]">
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
                <span className="md:col-span-2 font-mono text-sm font-medium text-[#6B5230] tabular-nums">
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
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#B99A5D] text-[#183F35] text-sm font-semibold tracking-wide hover:bg-[#c8ab6f] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F3E9]"
            >
              <span>View Live Website</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-[#F7F3E9]/30 text-[#F7F3E9] text-sm font-medium tracking-wide hover:bg-[#F7F3E9]/10 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A5D]"
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-150 group-hover:-translate-y-0.5" aria-hidden="true" />
              <span>Back to Top</span>
            </button>
          </ScrollReveal>
        </div>

        {/* Minimal Footer */}
        <div className="border-t border-[#F7F3E9]/14">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F3E9]/78">
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
                className="hover:text-[#B99A5D] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A5D]"
              >
                {PROJECT_LINKS.designerEmail}
              </a>
              <a
                href={PROJECT_LINKS.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#B99A5D] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A5D]"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
