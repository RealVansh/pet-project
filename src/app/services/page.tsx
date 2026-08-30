import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Scissors, GraduationCap, Footprints, Dog, Heart } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Our Services | Premium Pet Care',
  description: 'Explore our range of premium pet services, including grooming, training, walking, and more.',
};

export default function ServicesPage() {
  const services = [
    {
      num: '01',
      title: 'Premium Grooming',
      desc: 'Expert grooming tailored to your pet\'s breed and skin type for a flawless finish.',
      icon: Scissors,
      href: '/services/grooming',
    },
    {
      num: '02',
      title: 'Professional Training',
      desc: 'Patience-first obedience and behavioral training for a well-mannered companion.',
      icon: GraduationCap,
      href: '/services/training',
    },
    {
      num: '03',
      title: 'Pet Walking',
      desc: 'Reliable, energetic walks ensuring your pet stays active and healthy.',
      icon: Footprints,
      href: '/services/walking',
    },
    {
      num: '04',
      title: 'Stud Services',
      desc: 'Connect with top-tier pedigrees for responsible and healthy breeding.',
      icon: Dog,
      href: '/services/stud',
    },
    {
      num: '05',
      title: 'Pet Sales',
      desc: 'Thoughtfully sourced puppies with a transparent acquisition and handover process.',
      icon: Heart,
      href: '/puppies',
    },
  ];

  return (
    <main className="min-h-screen bg-pearl">
      {/* Page Hero Banner */}
      <section className="bg-forest-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">What We Do</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="text-brass-500">Services</span>
          </h1>
          <p className="text-taupe-500 text-lg max-w-2xl mx-auto">
            Comprehensive, high-end care tailored to the unique needs of your beloved companions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <AnimatedSection delay={idx * 100} key={service.num}>
                  <Link href={service.href} className="block group h-full">
                    <div className="bg-white rounded-2xl p-10 lg:p-14 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-taupe-200 border-t-4 hover:border-t-brass-500 h-full relative overflow-hidden">
                      <div className="absolute top-8 right-10 text-6xl font-black text-oatmeal group-hover:text-taupe-200 transition-colors pointer-events-none">
                        {service.num}
                      </div>
                      <div className="w-16 h-16 bg-oatmeal rounded-2xl flex items-center justify-center mb-8 group-hover:bg-forest-900 transition-colors">
                        <Icon className="w-8 h-8 text-forest-900 group-hover:text-brass-400 transition-colors" />
                      </div>
                      <h3 className="text-3xl font-bold text-forest-900 mb-4 font-heading group-hover:text-brass-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-taupe-600 text-lg leading-relaxed mb-8">
                        {service.desc}
                      </p>
                      <div className="flex items-center text-sm font-semibold uppercase tracking-wider text-forest-900 group-hover:text-brass-500 transition-colors">
                        Explore Service <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
