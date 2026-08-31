"use client";

import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { X } from 'lucide-react';

export default function CertificateGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((num) => (
          <AnimatedSection key={num} delay={num * 100} className="relative group cursor-pointer">
            {/* Premium Frame Effect */}
            <div 
              className="bg-white p-3 rounded-2xl shadow-md border border-taupe-200 group-hover:border-brass-400 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2"
              onClick={() => setSelectedImage(`/Certification/cert ${num}.png`)}
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-sage-50 border border-taupe-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`/Certification/cert ${num}.png`}
                  alt={`Naveen Kumar Professional Certification ${num}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/10 transition-colors duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-forest-900/80 text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    View
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-900/95 backdrop-blur-sm p-4 sm:p-8 transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 sm:top-10 sm:right-10 p-3 bg-white/10 hover:bg-brass-500 text-white rounded-full transition-colors z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          
          <div 
            className="relative w-full max-w-5xl h-full flex items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={selectedImage} 
              alt="Expanded Certification" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
