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
    <div className="min-h-screen bg-[#F7F3E9] text-[#292B28]">
      <Navbar />

      <main>
        <HeroSection onOpenLightbox={setLightboxImage} />
        <OverviewAndChallenge />
        <VisualAndSystem />
        <WebsiteShowcase onOpenLightbox={setLightboxImage} />
        <ProcessAndResults onOpenLightbox={setLightboxImage} />
      </main>

      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}
