"use client";

import React, { useState } from 'react';
import { getWhatsAppLink } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    petDetails: '',
    services: [] as string[],
    message: ''
  });

  const availableServices = [
    'Pet Grooming',
    'Dog Training',
    'Pet Walking',
    'Stud Services'
  ];

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let text = `Hello The Fur Stylist! I would like to inquire about your door-step services.\n\n`;
    if (formData.name) text += `*My Name:* ${formData.name}\n`;
    if (formData.petDetails) text += `*Pet Details:* ${formData.petDetails}\n`;
    if (formData.services.length > 0) {
      text += `*Services Required:* ${formData.services.join(', ')}\n`;
    }
    if (formData.message) text += `\n*Additional Notes:*\n${formData.message}`;

    const link = getWhatsAppLink(text.trim());
    window.open(link, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-forest-900 mb-2">Your Name *</label>
        <input 
          required
          type="text" 
          className="w-full px-4 py-3 rounded-xl border border-taupe-200 focus:outline-none focus:border-brass-500 focus:ring-1 focus:ring-brass-500 transition-colors"
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-forest-900 mb-2">Pet Details (Name & Breed)</label>
        <input 
          type="text" 
          className="w-full px-4 py-3 rounded-xl border border-taupe-200 focus:outline-none focus:border-brass-500 focus:ring-1 focus:ring-brass-500 transition-colors"
          placeholder="Max, Golden Retriever (2 years)"
          value={formData.petDetails}
          onChange={(e) => setFormData({...formData, petDetails: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-forest-900 mb-3">Services Required</label>
        <div className="grid grid-cols-2 gap-3">
          {availableServices.map((service) => (
            <label key={service} className="flex items-center gap-3 p-3 rounded-xl border border-taupe-200 cursor-pointer hover:bg-sage-50 transition-colors">
              <input 
                type="checkbox"
                className="w-4 h-4 text-brass-500 focus:ring-brass-500 border-taupe-200 rounded"
                checked={formData.services.includes(service)}
                onChange={() => handleCheckboxChange(service)}
              />
              <span className="text-sm font-medium text-forest-900">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-forest-900 mb-2">Additional Notes / Address Area</label>
        <textarea 
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-taupe-200 focus:outline-none focus:border-brass-500 focus:ring-1 focus:ring-brass-500 transition-colors resize-none"
          placeholder="I live in Tambaram and need a grooming appointment..."
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>

      <button 
        type="submit"
        className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-forest-900 text-white font-semibold uppercase tracking-wider text-sm hover:bg-forest-800 transition-colors mt-6 shadow-lg shadow-forest-900/20"
      >
        Send via WhatsApp
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
