'use client';

import { SectionReveal } from '@/components/SectionReveal';
import { VButton } from '@/components/VButton';
import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

const timeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
];

const services = [
  'Brand Strategy Consultation',
  'Visual Identity Development',
  'Rebrand Assessment',
  'Digital Presence Review',
  'General Inquiry',
  'Marketing Ads',
  'Graphics and UI/UX Designing',
  'Web developer'
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const createGoogleCalendarUrl = () => {
    if (!formData.date || !formData.time) return '';
    
    const date = new Date(formData.date);
    const timeString = formData.time; // "9:00 AM"
    
    // Parse time
    const [time, modifier] = timeString.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    
    if (hours === 12) {
      hours = 0;
    }
    if (modifier === 'PM') {
      hours += 12;
    }
    
    date.setHours(hours, minutes, 0, 0);
    
    const end = new Date(date);
    end.setHours(hours + 1, minutes, 0, 0); // Assume 1 hour duration
    
    const formatGoogleDate = (d: Date) => {
      return d.toISOString().replace(/-|:|\.\d\d\d/g, '');
    };
    
    const startStr = formatGoogleDate(date);
    const endStr = formatGoogleDate(end);
    
    const title = encodeURIComponent(`Consultation with ValQuess: ${formData.service}`);
    const details = encodeURIComponent(`Service: ${formData.service}\nMessage: ${formData.message}`);
    const location = encodeURIComponent("Google Meet");
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startStr}/${endStr}&details=${details}&location=${location}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // REPLACE THIS STRING WITH YOUR COPIED GOOGLE APPS SCRIPT URL
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxUWzfGyH47EQsNh8jRs6N0wXyakeUzKCtl3EbYpG6JHa0HPOVhx7cPUxZp-dhEoPBvCg/exec";

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an error submitting your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              Book a <span className="text-gold">Consultation</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={75}>
            <p className="text-lg text-gray-300 leading-relaxed">
              Schedule a complimentary consultation to discuss your brand vision and explore how we can
              bring it to life
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CalendarIcon className="w-8 h-8 text-gold" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    Consultation Confirmed!
                  </h2>
                  <p className="text-gray-300 mb-2">
                    We have automatically scheduled the meeting and sent a Google Calendar invite to <strong>{formData.email}</strong>.
                  </p>
                  <p className="text-gold text-sm mb-6">Please check your email for the Google Meet link and responed  yes .</p>
                  
                  <div className="flex flex-col gap-4 justify-center items-center">
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: '',
                          date: '',
                          time: '',
                          message: '',
                        });
                      }}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 bg-gold text-black hover:bg-gold/90 hover:-translate-y-0.5 shadow-gold"
                    >
                      Book Another Consultation
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        <User className="inline w-4 h-4 mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-black/60 border border-gold/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        <Mail className="inline w-4 h-4 mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-black/60 border border-gold/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-black/60 border border-gold/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-black/60 border border-gold/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                        <CalendarIcon className="inline w-4 h-4 mr-2" />
                        Preferred Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full px-4 py-3 bg-black/60 border border-gold/30 rounded-md text-white hover:bg-black/60 hover:text-white justify-start text-left font-normal h-auto",
                              !formData.date && "text-muted-foreground"
                            )}
                          >
                            {formData.date ? (
                              format(new Date(formData.date), "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.date ? new Date(formData.date) : undefined}
                            onSelect={(date) => 
                              setFormData(prev => ({ ...prev, date: date ? date.toISOString() : '' }))
                            }
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0, 0, 0, 0))
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">
                        <Clock className="inline w-4 h-4 mr-2" />
                        Preferred Time
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/60 border border-gold/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      <MessageSquare className="inline w-4 h-4 mr-2" />
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-black/60 border border-gold/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                      placeholder="Tell us let your project..."
                    />
                  </div>

                  <div className="pt-4">
                    <VButton
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
                    </VButton>
                  </div>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
