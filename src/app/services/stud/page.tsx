import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getWhatsAppLink } from '@/lib/utils';
import { Heart, Info } from 'lucide-react';
import { studDogs } from '@/lib/data/stud';

export const metadata: Metadata = {
  title: 'Stud Services | Premium Pet Care',
  description: 'Connect with top-tier pedigrees for responsible and healthy breeding.',
};

export default function StudPage() {
  return (
    <main className="min-h-screen bg-pearl">
      {/* Page Hero Banner */}
      <section className="bg-forest-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Pedigree Lineage</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Stud <span className="text-brass-500">Services</span>
          </h1>
          <p className="text-taupe-500 text-lg max-w-2xl mx-auto">
            Exceptional bloodlines for responsible breeding.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {studDogs && studDogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {/* Note: In future, map through studDogs here if data gets populated */}
            </div>
          ) : (
            <AnimatedSection className="max-w-2xl mx-auto bg-white rounded-3xl p-12 lg:p-16 shadow-lg border border-taupe-200 text-center">
              <div className="w-20 h-20 bg-oatmeal rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-brass-400" />
              </div>
              <h2 className="text-3xl font-bold text-forest-900 mb-4 font-heading">Expanding Our Roster</h2>
              <p className="text-taupe-600 text-lg leading-relaxed mb-10">
                We are currently curating our exclusive selection of premier stud dogs. We adhere strictly to responsible breeding practices and health screenings. Please check back soon or contact us to be notified when our roster is updated.
              </p>
              <a 
                href={getWhatsAppLink("Hello, I would like to be notified when your stud services become available.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-forest-900 bg-brass-400 hover:bg-brass-300 rounded-full transition-colors"
              >
                Join Waitlist via WhatsApp
              </a>
            </AnimatedSection>
          )}
        </div>
      </section>
    </main>
  );
}
