'use client';

import { SectionReveal } from '@/components/SectionReveal';
import { VButton } from '@/components/VButton';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

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

    try {
      // Replace these with your actual EmailJS credentials
      // Get them from https://dashboard.emailjs.com/
      const SERVICE_ID = 'service_7xw0zaq';
      const TEMPLATE_ID = 'template_71ikdx2';
      const PUBLIC_KEY = 'n1SZJ3fTXUe6FEz6H';

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'valquessbranding@gmail.com', // The email address receiving the message
          subject: formData.subject,
          message: formData.message,
          to_name: "ValQuess Team",
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      // Show the actual error message from EmailJS
      const errorMessage = (error as any)?.text || (error as any)?.message || 'Unknown error';
      alert(`Failed to send message: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
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
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
              Get in <span className="text-gold">Touch</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={75}>
            <p className="text-lg text-gray-300 leading-relaxed">
              Have a question or ready to start your brand transformation? We'd love to hear from you
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-4">
              <SectionReveal>
                <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">Email</h3>
                      <a
                        href="mailto:valquessbranding@gmail.com"
                        className="text-sm text-gray-400 hover:text-gold transition-colors"
                      >
                       valquessbranding@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={75}>
                <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">Phone</h3>
                      <a
                        href="tel:+15551234567"
                        className="text-sm text-gray-400 hover:text-gold transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={150}>
                <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">Location</h3>
                      <p className="text-sm text-gray-400">
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
                <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-5">
                  <h3 className="text-base font-semibold text-white mb-2">Office Hours</h3>
                  <div className="space-y-2 text-xs">
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
                <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-6">
                  <h2 className="text-xl font-serif font-bold text-white mb-4">Send Us a Message</h2>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-gold" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-sm text-gray-300">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-black/60 border border-gold/30 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                            placeholder="Your name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-black/60 border border-gold/30 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-xs font-medium text-gray-300 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-black/60 border border-gold/30 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-3 py-2 bg-black/60 border border-gold/30 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>

                      <VButton
                        type="submit"
                        variant="primary"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center space-x-2 py-2"
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        <Send className="w-4 h-4" />
                      </VButton>
                    </form>
                  )}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg overflow-hidden h-80 relative">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253665.59229742002!2d3.222161454296857!3d6.581480123583235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1767022031088!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                allowFullScreen={true}  
             
                referrerPolicy="no-referrer-when-downgrade"
                title="ValQuess Location"
                className="absolute inset-0"
              ></iframe>
              {/* Overlay to ensure map matches dark theme better */}
              <div className="absolute inset-0 bg-primary-purple/10 pointer-events-none mix-blend-overlay"></div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
