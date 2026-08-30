import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getWhatsAppLink } from '@/lib/utils';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dog Training | Premium Services',
  description: 'Professional obedience and behavioral training for dogs of all ages and breeds.',
};

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-pearl">
      {/* Page Hero Banner */}
      <section className="bg-forest-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Behavior & Obedience</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Dog <span className="text-brass-500">Training</span>
          </h1>
          <p className="text-taupe-500 text-lg max-w-2xl mx-auto">
            Professional, rewards-based training for a well-mannered and happy companion.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 font-heading">
              Training <span className="text-brass-500">Programs</span>
            </h2>
            <div className="w-16 h-px bg-brass-400 mx-auto mt-8 mb-6"></div>
            <p className="text-taupe-600 text-lg max-w-2xl mx-auto">Choose the right level of training for your dog's age and experience.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic */}
            <AnimatedSection delay={100} className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-taupe-200 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-forest-900 mb-2 font-heading">Basic Training</h3>
              <p className="text-taupe-500 mb-8 h-12">Perfect for puppies and beginners.</p>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Basic commands (Sit, Stay, Down)', 'Leash walking fundamentals', 'Potty training tips', 'Socialization basics'].map((item, i) => (
                  <li key={i} className="flex items-start text-stone-700">
                    <Check className="w-5 h-5 text-brass-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={getWhatsAppLink("Hello! I'd like to book Basic Training for my dog.")} target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center text-sm font-semibold uppercase tracking-wider text-forest-900 border-2 border-forest-900 hover:bg-forest-900 hover:text-white rounded-full transition-colors">Enquire Now</a>
            </AnimatedSection>

            {/* Advanced (Featured) */}
            <AnimatedSection delay={200} className="bg-forest-900 rounded-3xl p-10 shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brass-500/30 flex flex-col h-full relative overflow-hidden transform scale-105 z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brass-500/10 rounded-full blur-3xl"></div>
              <p className="text-brass-400 text-xs font-bold tracking-widest uppercase mb-4">Most Popular</p>
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">Advanced Training</h3>
              <p className="text-taupe-500 mb-8 h-12">For graduates of basic training needing refinement.</p>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Off-leash reliability', 'Advanced commands & tricks', 'Behavioral modification', 'Distraction proofing'].map((item, i) => (
                  <li key={i} className="flex items-start text-taupe-200">
                    <Check className="w-5 h-5 text-brass-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={getWhatsAppLink("Hello! I'm interested in the Advanced Training program.")} target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center text-sm font-semibold uppercase tracking-wider text-forest-900 bg-brass-400 hover:bg-brass-300 rounded-full transition-colors">Enquire Now</a>
            </AnimatedSection>

            {/* Show */}
            <AnimatedSection delay={300} className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-taupe-200 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-forest-900 mb-2 font-heading">Show Training</h3>
              <p className="text-taupe-500 mb-8 h-12">Specialized training for the show ring.</p>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Gait and movement', 'Stacking techniques', 'Ring etiquette', 'Confidence building'].map((item, i) => (
                  <li key={i} className="flex items-start text-stone-700">
                    <Check className="w-5 h-5 text-brass-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={getWhatsAppLink("Hello! I'd like more details about Show Training.")} target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center text-sm font-semibold uppercase tracking-wider text-forest-900 border-2 border-forest-900 hover:bg-forest-900 hover:text-white rounded-full transition-colors">Enquire Now</a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
