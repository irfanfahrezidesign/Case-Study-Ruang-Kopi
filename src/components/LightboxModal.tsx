import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { LightboxImage } from '../data/caseStudyData';

interface LightboxModalProps {
  image: LightboxImage | null;
  onClose: () => void;
}

export function LightboxModal({ image, onClose }: LightboxModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!image) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key === 'Tab') {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#183F35]/95 p-4 sm:p-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-center justify-between gap-4 pb-3 text-[#F7F3E9]">
          <div className="min-w-0">
            {image.sourceLabel && (
              <p className="text-xs tracking-[0.14em] uppercase text-[#B99A5D]">
                {image.sourceLabel}
              </p>
            )}
            <p className="text-sm sm:text-base font-medium truncate">{image.caption}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close image preview"
            className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#F7F3E9]/25 text-[#F7F3E9] hover:bg-[#F7F3E9]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A5D] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="w-full overflow-auto rounded-lg border border-[#F7F3E9]/15 bg-[#22392C] flex items-center justify-center">
          <img
            src={image.src}
            alt={image.alt}
            referrerPolicy="no-referrer"
            className="max-h-[76vh] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
