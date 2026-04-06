"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { Mail, MapPin, Globe, Share2, PhoneCall, Loader2 } from "lucide-react";

export default function Contact() {
  const { contact } = PORTFOLIO_DATA;
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_6csu39a",
        "template_8svudqi",
        form.current,
        "uOOSfYRWWXSitnd3H"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again.");
          console.error(error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-24 bg-background" id="contact">
      <Toaster position="bottom-right" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tighter mb-6">{contact.title}</h2>
            <p className="text-on-surface-variant text-lg mb-10">
              {contact.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center border border-outline-variant">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Email</p>
                  <p className="text-on-surface">{contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center border border-outline-variant">
                  <PhoneCall className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Phone</p>
                  <p className="text-on-surface">{contact.PhoneCall}</p>
                </div>
              </div>
            </div>

           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface-container p-8 rounded-3xl border border-outline-variant"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Name</label>
                  <input name="from_name" required className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-on-surface" placeholder="Mr Error" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Email</label>
                  <input name="from_email" required className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-on-surface" placeholder="error@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Subject</label>
                <input name="subject" required className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-on-surface" placeholder="Project Inquiry" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Message</label>
                <textarea name="message" required className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-on-surface resize-none" placeholder="Tell me about your project..." rows={5}></textarea>
              </div>
              <button disabled={isSubmitting} className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(167,139,250,0.3)] transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center disabled:cursor-not-allowed" type="submit">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
