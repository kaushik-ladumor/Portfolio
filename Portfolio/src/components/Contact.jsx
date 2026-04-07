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
  <div className="reveal flex items-center gap-6 p-6 rounded-3xl bg-slate-800/40 border border-slate-700/50 hover:border-orange-500/30 transition-all group">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
      <Icon size={24} />
    </div>
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-100">{value}</p>
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
        setToast({ message: "Check console for details!", type: "error" });
        console.error("EmailJS Error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="relative w-full py-10 px-4 sm:px-8 lg:px-16 bg-slate-900 overflow-hidden">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="mx-auto max-w-7xl">
        <div className="reveal flex items-center justify-center gap-4 mb-20 text-center">
          <div className="h-0.5 w-16 bg-orange-500"></div>
          <h2 className="text-4xl font-bold text-white tracking-tight">Stay Connected</h2>
          <div className="h-0.5 w-16 bg-orange-500"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-6">
            <h3 className="reveal text-2xl font-bold text-slate-100 mb-8 max-w-sm">
              Ready to create something amazing together?
              <span className="block text-orange-400 mt-2">Let's talk!</span>
            </h3>

            <InfoCard icon={Mail} label="Email Me" value={personalInfo.email} />
            <InfoCard icon={Phone} label="Call Me" value={personalInfo.phone} />
            <InfoCard icon={MapPin} label="Location" value={personalInfo.location} />
          </div>

          {/* Form Side */}
          <div className="reveal bg-slate-800/40 p-8 sm:p-10 rounded-4xl border border-slate-700/50 hover:shadow-2xl hover:shadow-orange-500/5 transition-all">
            <form ref={formRef} onSubmit={sendEmail} noValidate className="space-y-6">
              <input type="hidden" name="title" value="New Portfolio Message" />
              <input type="hidden" name="to_email" value={personalInfo.email} />
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Kaushik Ladumor"
                  className={`w-full bg-slate-900 border rounded-2xl px-6 py-4 text-slate-50 outline-none transition-all ${errors.name ? 'border-orange-500/50 focus:border-orange-500 bg-orange-500/5' : 'border-slate-700/50 focus:border-orange-500'
                    }`}
                />
                {errors.name && (
                  <p className="flex items-center gap-1.5 text-[10px] font-bold text-orange-400 uppercase tracking-wider mt-1 ml-1">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="kaushik.ladumor04@gmail.com"
                  className={`w-full bg-slate-900 border rounded-2xl px-6 py-4 text-slate-50 outline-none transition-all ${errors.email ? 'border-orange-500/50 focus:border-orange-500 bg-orange-500/5' : 'border-slate-700/50 focus:border-orange-500'
                    }`}
                />
                {errors.email && (
                  <p className="flex items-center gap-1.5 text-[10px] font-bold text-orange-400 uppercase tracking-wider mt-1 ml-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  className={`w-full bg-slate-900 border rounded-2xl px-6 py-4 text-slate-50 outline-none transition-all resize-none ${errors.message ? 'border-orange-500/50 focus:border-orange-500 bg-orange-500/5' : 'border-slate-700/50 focus:border-orange-500'
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
                className={`w-full group mt-4 relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-8 py-4 font-bold transition-all duration-300 transform active:scale-95 ${loading ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-orange-500 text-slate-900 hover:scale-105 shadow-xl shadow-orange-500/20'
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
