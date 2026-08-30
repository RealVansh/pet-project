import { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getWhatsAppLink } from "@/lib/utils";
import { Search, ShieldCheck, Stethoscope, Handshake, HeartHandshake, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pet Sales | How We Source & Deliver Puppies | Professional Pet Care",
  description: "Learn about our transparent, trust-first process for sourcing healthy puppies and ensuring a smooth handover to your family.",
};

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Sourcing & Selection",
    description: "We carefully identify and evaluate breeders based on their practices, environment, and the health history of their dogs. We do not work with puppy mills or mass breeders.",
    // Client can update this with their specific sourcing details
  },
  {
    num: "02",
    icon: Stethoscope,
    title: "Health Screening",
    description: "Every puppy undergoes a thorough health check before being made available. Vaccination records, deworming schedules, and general health assessments are documented and shared with you.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Breed Verification",
    description: "We verify the breed lineage and provide you with all available documentation so you know exactly what to expect in terms of temperament, size, and care requirements.",
  },
  {
    num: "04",
    icon: Handshake,
    title: "Meet & Consultation",
    description: "Before any commitment, we arrange a consultation where you can meet the puppy, ask questions about care, and ensure the breed is the right fit for your family and lifestyle.",
  },
  {
    num: "05",
    icon: HeartHandshake,
    title: "Handover & Aftercare",
    description: "We provide a complete handover kit including vaccination records, dietary guidelines, and care instructions. Our team remains available for post-adoption guidance and support.",
  },
];

const breeds = ["Labrador Retriever", "Golden Retriever", "German Shepherd"];

export default function PuppiesPage() {
  return (
    <main className="min-h-screen bg-pearl">
      {/* Page Hero Banner */}
      <section className="bg-forest-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Pet Sales</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Bringing Home a <span className="text-brass-500">New Best Friend</span>
          </h1>
          <p className="text-taupe-500 text-lg max-w-2xl mx-auto">
            A transparent, trust-first process from sourcing to handover — because your family deserves to know exactly where your puppy comes from.
          </p>
        </div>
      </section>

      {/* Intro */}
      <AnimatedSection className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
            Our <span className="text-brass-500">Process</span>
          </h2>
          <div className="w-16 h-px bg-brass-400 mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed text-taupe-600 font-light">
            We believe getting a puppy should never be a gamble. Every puppy we make available goes through a structured process designed to protect the animal's wellbeing and give you complete peace of mind.
          </p>
        </div>
      </AnimatedSection>

      {/* Process Steps */}
      <section className="py-24 lg:py-32 bg-pearl">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brass-400 via-brass-500 to-brass-300 hidden md:block"></div>

            <div className="space-y-16 lg:space-y-24">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isEven = idx % 2 === 0;

                return (
                  <AnimatedSection key={step.num} delay={idx * 0.1}>
                    <div className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                      {/* Content */}
                      <div className={`flex-1 ${isEven ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                        <span className="text-brass-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Step {step.num}</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-forest-900 mb-4">{step.title}</h3>
                        <p className="text-taupe-600 leading-relaxed text-lg font-light">{step.description}</p>
                      </div>

                      {/* Center icon node */}
                      <div className="relative z-10 flex-shrink-0 order-first lg:order-none">
                        <div className="w-16 h-16 bg-white border-2 border-brass-400 rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 text-brass-600" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="flex-1 hidden lg:block"></div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Available Breeds */}
      <AnimatedSection className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Breeds We Work With</p>
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-12">
            Currently Available <span className="text-brass-500">Breeds</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {breeds.map((breed) => (
              <div
                key={breed}
                className="px-8 py-4 bg-oatmeal border border-taupe-200 rounded-2xl text-forest-900 font-medium text-lg hover:border-brass-300 transition-colors"
              >
                {breed}
              </div>
            ))}
          </div>
          <p className="text-taupe-500 text-sm max-w-lg mx-auto">
            Availability changes frequently. Contact us to check current availability and discuss which breed is right for your family.
          </p>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-forest-900">
        <AnimatedSection className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Ready to Find Your </span>
            <span className="text-brass-500">New Companion?</span>
          </h2>
          <p className="text-taupe-500 text-lg mb-10 max-w-2xl mx-auto font-light">
            Speak with our team to discuss breed suitability, availability, and to understand our process in more detail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={getWhatsAppLink("Hi, I'm interested in getting a puppy. Could you tell me about current availability and your process?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brass-500 hover:bg-brass-600 text-forest-900 font-semibold rounded-full transition-all duration-300 hover:shadow-[0_4px_16px_rgba(214,163,101,0.3)]"
            >
              Enquire on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+919952074007"
              className="px-10 py-4 border border-taupe-600 hover:border-brass-500 text-white hover:text-brass-500 font-medium rounded-full transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
