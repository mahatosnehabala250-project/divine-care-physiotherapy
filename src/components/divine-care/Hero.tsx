"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowDown, Shield, Users, Award, Clock, Star } from "lucide-react";

export default function Hero({ onBookAppointment }: { onBookAppointment: () => void }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-clinic.png"
          alt="Divine Care Physiotherapy Clinic Interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-teal-900/90 to-teal-800/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent" />
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-amber-400/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-teal-400/5 blur-3xl"
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/25 text-amber-300 text-sm font-medium px-5 py-2.5 rounded-full backdrop-blur-sm shadow-lg shadow-amber-500/5">
              <Award className="h-4 w-4" />
              500+ Successful Treatments in Jamshedpur
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            </span>
          </motion.div>

          {/* Main Headline - StoryBrand External Problem */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight text-shadow-hero"
          >
            Kya Dard Ne Aapki 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300">
              Zindagi Rok Di
            </span> Hai?
          </motion.h1>

          {/* Sub-headline - Solution */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-teal-100/90 max-w-2xl leading-relaxed"
          >
            Physiotherapy, Acupuncture aur Hijama se paayein chronic pain se azaadi — bina surgery ke, bina side effects ke.
          </motion.p>

          {/* Internal Problem - StoryBrand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-7 space-y-3"
          >
            {[
              "Kya aap bachchon ke saath khel nahi paate?",
              "Kya surgery ka dar aapko raat jagata hai?",
              "Kya aap apne parivaar ka bojh samajhne lage hain?",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                className="flex items-center gap-3 text-teal-200/90"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <span className="text-amber-400 text-xs">✦</span>
                </span>
                <span className="text-base sm:text-lg">{text}</span>
              </motion.p>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/9431757875"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              onClick={(e) => { e.preventDefault(); onBookAppointment(); }}
            >
              <Button size="lg" className="relative bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-teal-900 font-bold rounded-2xl px-8 h-14 text-base shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 group-hover:scale-[1.02] btn-hover-scale">
                <MessageCircle className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
            </a>
            <a href="tel:9431757875" className="group">
              <Button size="lg" className="bg-teal-700/80 text-white hover:bg-teal-700 rounded-2xl px-8 h-14 text-base backdrop-blur-md border-2 border-teal-400/50 hover:border-teal-300 transition-all duration-300 group-hover:scale-[1.02] font-bold shadow-lg shadow-teal-900/30 hover:shadow-xl hover:shadow-teal-700/40">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-teal-200/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-teal-300" />
                </div>
                <span>No Surgery Required</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center">
                  <Users className="h-4 w-4 text-teal-300" />
                </div>
                <span>10+ Expert Team</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-teal-300" />
                </div>
                <span>Same Day Appointment</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <Award className="h-4 w-4 text-amber-300" />
                </div>
                <span>International Standards</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-teal-400/70 font-medium tracking-wider uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="h-5 w-5 text-teal-400/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
