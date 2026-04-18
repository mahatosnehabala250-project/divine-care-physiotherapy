"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, MessageCircle, Heart, Clock,
  Instagram, Facebook, Youtube, ArrowUp, ExternalLink,
  Star, Send, ChevronUp
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Conditions", href: "#conditions" },
  { label: "Pain Quiz", href: "#pain-quiz" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

const conditions = [
  "Knee Pain",
  "Neck Pain",
  "Shoulder Pain",
  "Back Pain",
  "Stroke Rehab",
  "Disc Bulge",
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/divinecarejsr" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/divinecarejsr" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@divinecarejsr" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919431757875" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const subscribeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (subscribeTimerRef.current) clearTimeout(subscribeTimerRef.current);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      if (subscribeTimerRef.current) clearTimeout(subscribeTimerRef.current);
      subscribeTimerRef.current = setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-teal-900 text-teal-100 mt-auto relative overflow-hidden">
      {/* Decorative top gradient wave */}
      <div className="h-2 bg-gradient-to-r from-teal-400 via-amber-400 to-teal-400" />
      {/* Subtle diagonal pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.08) 30px, rgba(255,255,255,0.08) 31px)'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="pt-10 pb-8 border-b border-teal-800/50">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2">
              Health Tips Aur Offers Seedha Inbox Mein
            </h3>
            <p className="text-teal-300/70 text-sm mb-4">
              Free health tips, exercise videos, aur special discounts — sab seedha aapke inbox mein!
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2.5 rounded-xl bg-teal-800/60 border border-teal-600/40 text-white placeholder:text-teal-400/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 flex items-center gap-1.5 flex-shrink-0"
              >
                <Send className="h-4 w-4" />
                Subscribe
              </button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm mt-2 font-medium"
              >
                ✅ Thank you! Aapko health tips milenge soon.
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Main Footer Grid */}
        <div className="pt-10 pb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <div>
                  <p className="font-bold text-white text-lg leading-tight">Divine Care</p>
                  <p className="text-xs text-teal-300">Physiotherapy • Acupuncture • Hijama</p>
                </div>
              </div>
              <p className="text-sm text-teal-300 leading-relaxed mb-4">
                Jamshedpur ka unique clinic jahan Physiotherapy, Acupuncture aur Hijama teeno treatments ek saath available hain. Bina surgery ke, bina side effects ke — dard se azaadi.
              </p>

              {/* GMB Rating Badge */}
              <div className="flex items-center gap-2 bg-teal-800/50 border border-teal-600/30 rounded-xl px-3 py-2.5 mb-4 w-fit">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white font-bold text-sm">4.9</span>
                <span className="text-teal-300/70 text-xs">/5 on Google</span>
              </div>

              {/* Social Links - Enhanced */}
              <div className="flex items-center gap-3 mb-4">
                {socialLinks.map((social) => (
                  <div key={social.label} className="relative group">
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="w-10 h-10 rounded-xl bg-teal-800 hover:bg-gradient-to-br hover:from-teal-500 hover:to-teal-600 flex items-center justify-center text-teal-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 group-hover:animate-bounce"
                      aria-label={social.label}
                      style={{ animationDuration: "0.6s", animationIterationCount: "1" }}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-teal-700 text-white text-[10px] font-medium px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {social.label}
                      <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-teal-700" />
                    </span>
                  </div>
                ))}
              </div>

              {/* WhatsApp quick link */}
              <a
                href="https://wa.me/919431757875"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp: 9431757875
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4 text-base relative">
                Quick Links
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
              </h4>
              <nav className="space-y-2.5">
                {quickLinks.map((link) => (
                  <a
                    key={link.href + link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-teal-300 hover:text-white hover:pl-1 transition-all duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-600 group-hover:bg-amber-400 transition-colors" />
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Conditions */}
            <div>
              <h4 className="font-bold text-white mb-4 text-base relative">
                Conditions We Treat
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
              </h4>
              <div className="space-y-2.5">
                {conditions.map((condition) => (
                  <a
                    key={condition}
                    href="#conditions"
                    className="flex items-center gap-2 text-sm text-teal-300 hover:text-white hover:pl-1 transition-all duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-600 group-hover:bg-amber-400 transition-colors" />
                    {condition}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4 text-base relative">
                Contact Info
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
              </h4>
              <div className="space-y-3">
                <a href="tel:9431757875" className="flex items-start gap-2.5 text-sm text-teal-300 hover:text-white transition-colors group">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-amber-400 transition-colors" />
                  <span>9431757875 / 7903415819</span>
                </a>
                <a href="tel:06572230781" className="flex items-start gap-2.5 text-sm text-teal-300 hover:text-white transition-colors group">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-amber-400 transition-colors" />
                  <span>06572230781 (Office)</span>
                </a>
                <a href="mailto:divinecarejsr1@gmail.com" className="flex items-start gap-2.5 text-sm text-teal-300 hover:text-white transition-colors group">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-amber-400 transition-colors" />
                  <span>divinecarejsr1@gmail.com</span>
                </a>
                <a
                  href="https://www.google.com/maps/place/Divine+Care-+Best+physiotherapy+%7CAcupuncture+(acupressure)%7Chijama+(cupping+therapy)+in+jamshedpur/@22.8065061,86.2048079,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-teal-300 hover:text-white transition-colors group"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-amber-400 transition-colors" />
                  <span>4th Floor, Sulata Mala Complex, Pennar Road, Near Laxmi Vilash Bank, Sakchi, Jamshedpur – 831001</span>
                  <ExternalLink className="h-3 w-3 mt-1 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="flex items-start gap-2.5 text-sm text-teal-300">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Mon-Sat: 9:00 AM – 8:00 PM</span>
                </div>
              </div>
              
              {/* Mini CTA */}
              <div className="mt-5 p-3 bg-teal-800/50 rounded-xl border border-teal-700/50">
                <a href="tel:9431757875" className="flex items-center justify-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors">
                  <Phone className="h-4 w-4" />
                  Free Consultation: Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative">
          {/* Gradient line above copyright */}
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent mb-6" />
          
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
            <p className="text-sm text-teal-400">
              © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Divine Care Physiotherapy Acupuncture & Hijama Centre. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-sm text-teal-400 hover:text-teal-200 transition-all duration-200 group"
                aria-label="Back to top"
              >
                <span className="w-7 h-7 rounded-full bg-teal-800 group-hover:bg-teal-600 flex items-center justify-center transition-all duration-200 group-hover:-translate-y-0.5">
                  <ChevronUp className="h-4 w-4" />
                </span>
                Back to top
              </button>
              <p className="text-sm text-teal-300 flex items-center gap-1.5 font-medium">
                Made with <Heart className="h-4 w-4 text-red-400 fill-red-400 inline" /> in Jamshedpur
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
