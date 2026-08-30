import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getWhatsAppLink } from '@/lib/utils';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pet Grooming | Premium Services',
  description: 'Gentle, professional grooming services to keep your pet looking and feeling their absolute best.',
};

export default function GroomingPage() {
  const inclusions = [
    'Deep Cleansing Bath & Conditioning',
    'Breed-Specific Haircuts & Styling',
    'Nail Trimming & Filing',
    'Ear Cleaning & Plucking',
    'Paw Pad & Sanitary Trim',
    'Blow Dry & Brush Out'
  ];

  return (
    <main className="min-h-screen bg-pearl">
      {/* Page Hero Banner */}
      <section className="bg-forest-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Spa & Styling</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Pet <span className="text-brass-500">Grooming</span>
          </h1>
          <p className="text-taupe-500 text-lg max-w-2xl mx-auto">
            Gentle, professional care for a flawless finish.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <AnimatedSection className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 mb-8 font-heading">
            A <span className="text-brass-500">Patience-First</span> Approach
          </h2>
          <div className="w-16 h-px bg-brass-400 mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed text-taupe-600 mb-6">
            Grooming shouldn't be stressful. We take our time with every pet, ensuring they feel calm and comfortable throughout the entire process. Our trained professionals handle even the most nervous pets with care and expertise.
          </p>
        </div>
      </AnimatedSection>

      {/* Offerings Section */}
      <section className="py-24 lg:py-32 bg-pearl">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="bg-white rounded-3xl p-10 lg:p-16 shadow-lg border border-taupe-200 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-forest-900 mb-6 font-heading">The Full Signature Groom</h3>
              <p className="text-taupe-600 mb-8 leading-relaxed text-lg">
                Our comprehensive grooming package covers everything your pet needs to look and feel pristine, using only premium, pet-safe products.
              </p>
              <ul className="space-y-4">
                {inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-center text-stone-700">
                    <div className="w-6 h-6 rounded-full bg-sage-50 flex items-center justify-center mr-4 flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-brass-600" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
               <div className="bg-forest-900 rounded-3xl p-10 text-center w-full max-w-sm relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                 <div className="absolute inset-0 bg-brass-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                 <h4 className="text-brass-400 font-bold tracking-widest uppercase text-sm mb-4">Book an Appointment</h4>
                 <p className="text-white text-xl font-heading mb-8">Give your pet the spa day they deserve.</p>
                 <a 
                    href={getWhatsAppLink("Hello! I'd like to book a grooming appointment.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-semibold uppercase tracking-wider text-forest-900 bg-brass-400 hover:bg-brass-300 rounded-full transition-all duration-300"
                  >
                    Book via WhatsApp
                  </a>
               </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
