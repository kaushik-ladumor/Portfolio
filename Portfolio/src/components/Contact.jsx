import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Toast from './Toast';

// EmailJS placeholders (Replace these with your actual keys)
const EMAILJS_SERVICE_ID = "service_1qa65s7";
const EMAILJS_TEMPLATE_ID = "template_rlhrz1u";
const EMAILJS_PUBLIC_KEY = "mZZ0D6R9NfJKP66en";

const InfoCard = ({ icon: Icon, label, value }) => (
  <div className="reveal group flex items-center gap-4 border-b border-slate-700/70 py-4 transition-colors hover:border-orange-400/40">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-orange-400 transition-colors group-hover:bg-orange-500/10">
      <Icon size={20} />
    </div>
    <div className="min-w-0">
      <p className="text-[11px] font-medium uppercase tracking-[.12em] text-slate-500">{label}</p>
      <p className="mt-1 break-words text-sm font-medium text-slate-200">{value}</p>
    </div>
  </div>
);

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const form = formRef.current;
    if (!form.name.value.trim()) newErrors.name = "Name is required";
    if (!form.email.value.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email.value)) newErrors.email = "Invalid email address";
    if (!form.message.value.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setToast({ message: "Message Sent!", type: "success" });
        formRef.current.reset();
        setErrors({});
      })
      .catch((err) => {
        setToast({ message: "Couldn’t send your message. Please try again or email me directly.", type: "error" });
        console.error("EmailJS Error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-slate-900 px-4 py-10 sm:px-8 lg:px-16">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="mx-auto max-w-7xl">
        <div className="section-heading reveal">
          <p className="section-kicker">Have a good one in mind?</p>
          <h2 className="section-title">Let’s build it<span className="section-title-accent">.</span></h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          {/* Info Side */}
          <div>
            <h3 className="reveal mb-4 max-w-md text-lg font-medium leading-7 text-slate-300">
              I’m always open to thoughtful collaborations, interesting challenges, and new opportunities.
            </h3>

            <a href={`mailto:${personalInfo.email}`} className="block focus-visible:outline-offset-4">
              <InfoCard icon={Mail} label="Email Me" value={personalInfo.email} />
            </a>
            <a href={`tel:${personalInfo.phone}`} className="block focus-visible:outline-offset-4">
              <InfoCard icon={Phone} label="Call Me" value={personalInfo.phone} />
            </a>
            <InfoCard icon={MapPin} label="Location" value={personalInfo.location} />
          </div>

          {/* Form Side */}
          <div className="reveal rounded-2xl border border-slate-700/70 bg-slate-800/25 p-5 sm:p-7">
            <form ref={formRef} onSubmit={sendEmail} noValidate className="space-y-5">
              <input type="hidden" name="title" value="New Portfolio Message" />
              <input type="hidden" name="to_email" value={personalInfo.email} />
              
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Kaushik Ladumor"
                  className={`w-full bg-slate-900 border rounded-xl px-4 py-3 text-sm text-slate-50 outline-none transition-all ${errors.name ? 'border-orange-500/50 focus:border-orange-500 bg-orange-500/5' : 'border-slate-700/70 focus:border-orange-500'
                    }`}
                />
                {errors.name && (
                  <p className="flex items-center gap-1.5 text-[10px] font-bold text-orange-400 uppercase tracking-wider mt-1 ml-1">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="kaushik.ladumor04@gmail.com"
                  className={`w-full bg-slate-900 border rounded-xl px-4 py-3 text-sm text-slate-50 outline-none transition-all ${errors.email ? 'border-orange-500/50 focus:border-orange-500 bg-orange-500/5' : 'border-slate-700/70 focus:border-orange-500'
                    }`}
                />
                {errors.email && (
                  <p className="flex items-center gap-1.5 text-[10px] font-bold text-orange-400 uppercase tracking-wider mt-1 ml-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="4"
                  className={`w-full bg-slate-900 border rounded-xl px-4 py-3 text-sm text-slate-50 outline-none transition-all resize-y ${errors.message ? 'border-orange-500/50 focus:border-orange-500 bg-orange-500/5' : 'border-slate-700/70 focus:border-orange-500'
                    }`}
                ></textarea>
                {errors.message && (
                  <p className="flex items-center gap-1.5 text-[10px] font-bold text-orange-400 uppercase tracking-wider mt-1 ml-1">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full group mt-2 relative inline-flex items-center justify-center overflow-hidden rounded-xl px-6 py-3.5 font-bold transition-all duration-300 active:scale-[.99] ${loading ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-orange-500 text-slate-900 hover:bg-orange-400'
                  }`}
              >
                {loading ? <Loader2 className="animate-spin text-orange-400" /> : (
                  <>
                    <Send size={18} className="mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
