import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { USER_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds so they can send another if needed
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-16 bg-blue-600">
      <div className="max-w-6xl mx-auto mb-16">
        <span className="text-blue-100 text-xs tracking-[4px] uppercase block mb-2 font-bold text-center lg:text-left">Get in Touch</span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 text-center lg:text-left">Contact</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8 flex flex-col justify-center">
          <div className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
               <Mail size={24} />
            </div>
            <div>
               <a href={`mailto:${USER_INFO.email}`} className="text-white font-medium hover:text-blue-100 transition-colors text-base break-all">{USER_INFO.email}</a>
               <p className="text-blue-100 text-xs mt-2">Send me an email anytime!</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
               <Phone size={24} />
            </div>
            <div>
               <a href={`tel:${USER_INFO.phone}`} className="text-white font-medium hover:text-blue-100 transition-colors text-base">{USER_INFO.phone}</a>
               <p className="text-blue-100 text-xs mt-2">Give me a call!</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
               <MapPin size={24} />
            </div>
            <div>
               <p className="text-white font-medium text-base">{USER_INFO.location}</p>
               <p className="text-blue-100 text-xs mt-2">Come visit.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 shadow-lg rounded-lg relative overflow-hidden">
          <h3 className="text-lg font-serif font-bold mb-6 text-dark">Send Message</h3>
          
          {formStatus === 'success' ? (
            <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
              <div className="w-14 h-14 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-3">
                <CheckCircle size={28} />
              </div>
              <h4 className="text-lg font-serif font-bold text-dark mb-2">Message Sent!</h4>
              <p className="text-gray-600 text-sm">Thank you for reaching out. I will get back to you soon.</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input 
                required
                type="text" 
                placeholder="Name" 
                className="w-full bg-gray-50 border border-gray-200 rounded p-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm"
              />
              <input 
                required
                type="email" 
                placeholder="Email" 
                className="w-full bg-gray-50 border border-gray-200 rounded p-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm"
              />
              <input 
                required
                type="text" 
                placeholder="Subject" 
                className="w-full bg-gray-50 border border-gray-200 rounded p-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm"
              />
              <textarea 
                required
                rows={5} 
                placeholder="Message" 
                className="w-full bg-gray-50 border border-gray-200 rounded p-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm resize-none"
              ></textarea>
              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 rounded disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  <>Sending <Loader2 size={14} className="animate-spin" /></>
                ) : (
                  <>Send Message <Send size={14} /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
