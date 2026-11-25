import React, { useState } from 'react';
import { LightboxImage } from './data/caseStudyData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OverviewAndChallenge } from './components/OverviewAndChallenge';
import { VisualAndSystem } from './components/VisualAndSystem';
import { WebsiteShowcase } from './components/WebsiteShowcase';
import { ProcessAndResults } from './components/ProcessAndResults';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#F7F3E9] text-[#292B28]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-md focus:bg-[#183F35] focus:text-[#F7F3E9] focus:text-sm focus:font-medium focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-[#B99A5D]"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <HeroSection onOpenLightbox={setLightboxImage} />
        <OverviewAndChallenge />
        <VisualAndSystem />
        <WebsiteShowcase onOpenLightbox={setLightboxImage} />
        <ProcessAndResults />
      </main>

      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}
