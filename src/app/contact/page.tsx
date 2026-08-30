import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getWhatsAppLink } from '@/lib/utils';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Premium Pet Care',
  description: 'Get in touch with us for premium pet care services, grooming, and training inquiries.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-pearl">
      {/* Page Hero Banner */}
      <section className="bg-forest-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Reach Out</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get In <span className="text-brass-500">Touch</span>
          </h1>
          <p className="text-taupe-500 text-lg max-w-2xl mx-auto">
            We are here to assist you with any inquiries regarding our premium pet care services.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Contact Info */}
            <AnimatedSection className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 font-heading mb-8">Contact Information</h2>
              
              <div className="flex items-start">
                <div className="w-14 h-14 bg-white shadow-sm border border-taupe-200 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <MessageCircle className="w-6 h-6 text-brass-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-900 mb-2">WhatsApp</h3>
                  <p className="text-taupe-600 mb-3">Fastest way to reach us for bookings and inquiries.</p>
                  <a href={getWhatsAppLink("Hello! I have an inquiry.")} target="_blank" rel="noopener noreferrer" className="text-brass-600 font-semibold hover:text-brass-500 transition-colors">
                    +91 99520 74007
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-taupe-200"></div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white shadow-sm border border-taupe-200 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <Phone className="w-6 h-6 text-brass-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-900 mb-2">Phone</h3>
                  <p className="text-taupe-600 mb-3">Call us directly during working hours.</p>
                  <a href="tel:+919952074007" className="text-forest-900 font-semibold hover:text-brass-500 transition-colors">
                    +91 99520 74007
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-taupe-200"></div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white shadow-sm border border-taupe-200 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <Clock className="w-6 h-6 text-brass-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-900 mb-2">Business Hours</h3>
                  <p className="text-taupe-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-taupe-600">Sunday: Closed</p>
                </div>
              </div>

              <div className="w-full h-px bg-taupe-200"></div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white shadow-sm border border-taupe-200 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <MapPin className="w-6 h-6 text-brass-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-900 mb-2">Location</h3>
                  <p className="text-taupe-600">Premium Pet Services Studio<br/>Available by appointment.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Simple Form / CTA */}
            <AnimatedSection delay={200} className="bg-white p-10 lg:p-14 rounded-3xl shadow-xl border border-taupe-200">
              <h2 className="text-3xl font-bold text-forest-900 font-heading mb-8">Send an Enquiry</h2>
              <p className="text-taupe-600 mb-10 leading-relaxed">
                For the fastest response, we recommend sending us a message directly on WhatsApp with your specific requirements.
              </p>
              
              <div className="space-y-6">
                <a 
                  href={getWhatsAppLink("Hello! I'd like to book a grooming session.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-6 rounded-2xl border border-taupe-200 hover:border-brass-500 hover:bg-sage-50/50 transition-all group"
                >
                  <span className="font-semibold text-forest-900">Book Grooming</span>
                  <span className="text-brass-500 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                
                <a 
                  href={getWhatsAppLink("Hello! I'm interested in your training programs.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-6 rounded-2xl border border-taupe-200 hover:border-brass-500 hover:bg-sage-50/50 transition-all group"
                >
                  <span className="font-semibold text-forest-900">Enquire About Training</span>
                  <span className="text-brass-500 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a 
                  href={getWhatsAppLink("Hello! I have a general inquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-5 rounded-full bg-forest-900 text-white font-semibold uppercase tracking-wider text-sm hover:bg-forest-800 transition-colors mt-8"
                >
                  Message on WhatsApp
                </a>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </main>
  );
}
