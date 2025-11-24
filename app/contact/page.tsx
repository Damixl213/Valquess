'use client';

import { SectionReveal } from '@/components/SectionReveal';
import { VButton } from '@/components/VButton';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="overflow-hidden">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-6">
              Get in <span className="text-gold">Touch</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={75}>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have a question or ready to start your brand transformation? We'd love to hear from you
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <SectionReveal>
                <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <a
                        href="mailto:hello@valquess.com"
                        className="text-gray-400 hover:text-gold transition-colors"
                      >
                        hello@valquess.com
                      </a>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={75}>
                <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-400 hover:text-gold transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={150}>
                <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                      <p className="text-gray-400">
                        123 Branding Avenue
                        <br />
                        Creative District
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={225}>
                <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Monday - Friday</span>
                      <span className="text-gold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Saturday</span>
                      <span className="text-gold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Sunday</span>
                      <span className="text-gold">Closed</span>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-2">
              <SectionReveal>
                <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-8">
                  <h2 className="text-2xl font-serif font-bold text-white mb-6">Send Us a Message</h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="w-10 h-10 text-gold" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-4">
                        Message Sent!
                      </h3>
                      <p className="text-gray-300">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black/60 border border-gold/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                            placeholder="Your name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black/60 border border-gold/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/60 border border-gold/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-black/60 border border-gold/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>

                      <VButton
                        type="submit"
                        variant="primary"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center space-x-2"
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        <Send className="w-5 h-5" />
                      </VButton>
                    </form>
                  )}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg overflow-hidden h-96">
              <div className="w-full h-full bg-gradient-to-br from-primary-purple/20 to-purple-900/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                  <p className="text-gray-400">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
