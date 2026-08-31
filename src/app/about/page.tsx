import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CheckCircle2, Heart, Shield, Star } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About Us | Premium Pet Care Services',
  description: 'Learn about our 5+ years of experience delivering The Fur Stylist services including grooming, training, and walking.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-pearl">
      {/* Page Hero Banner */}
      <section className="bg-forest-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Our Story</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-brass-500">The Fur Stylist</span>
          </h1>
          <p className="text-taupe-500 text-lg max-w-2xl mx-auto">
            Delivering exceptional care for your beloved companions with over 5 years of dedicated experience.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <AnimatedSection className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 mb-8 font-heading">
            A Passion for <span className="text-brass-500">Excellence</span>
          </h2>
          <div className="w-16 h-px bg-brass-400 mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed text-taupe-600 mb-6">
            We believe that every pet deserves the highest standard of care. Our journey began with a simple yet profound understanding: pets are family. That's why we've assembled a team of trained professionals who share an unwavering commitment to your pet's well-being and happiness.
          </p>
          <p className="text-xl leading-relaxed text-taupe-600">
            From meticulous grooming sessions to patient, rewarding training programs, our approach is always tailored, gentle, and professional. We pride ourselves on creating a serene environment where pets feel safe and loved.
          </p>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-pearl">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">The Standard</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 font-heading">
              Why Choose Us
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-taupe-200 group">
              <div className="w-14 h-14 bg-forest-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-brass-500 transition-colors">
                <Star className="w-6 h-6 text-brass-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-forest-900 mb-4 font-heading">5+ Years Experience</h3>
              <p className="text-taupe-600 leading-relaxed">
                A proven track record of delivering reliable, The Fur Stylist services that you can trust implicitly.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-taupe-200 group">
              <div className="w-14 h-14 bg-forest-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-brass-500 transition-colors">
                <Heart className="w-6 h-6 text-brass-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-forest-900 mb-4 font-heading">Patience-First Approach</h3>
              <p className="text-taupe-600 leading-relaxed">
                We take the time to understand your pet's unique personality, ensuring a stress-free and enjoyable experience every time.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-taupe-200 group">
              <div className="w-14 h-14 bg-forest-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-brass-500 transition-colors">
                <Shield className="w-6 h-6 text-brass-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-forest-900 mb-4 font-heading">Trained Professionals</h3>
              <p className="text-taupe-600 leading-relaxed">
                Our team is equipped with the knowledge and expertise required to handle pets of all breeds and temperaments securely.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection className="py-24 lg:py-32 bg-forest-900 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
          Ready to Experience the <span className="text-brass-400">Difference?</span>
        </h2>
        <p className="text-taupe-200 text-lg mb-10 max-w-2xl mx-auto">
          Contact us today to discuss how we can elevate your pet's care routine.
        </p>
        <a 
          href={getWhatsAppLink("Hello! I'd like to learn more about your services.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-forest-900 bg-brass-400 hover:bg-brass-300 rounded-full transition-all duration-300 hover:scale-105"
        >
          Message on WhatsApp
        </a>
      </AnimatedSection>
    </main>
  );
}
