"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowDown, Shield, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-clinic.png"
          alt="Divine Care Physiotherapy Clinic Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/85 to-teal-700/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent" />
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
            <span className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-200 text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
              <Award className="h-4 w-4" />
              500+ Successful Treatments in Jamshedpur
            </span>
          </motion.div>

          {/* Main Headline - StoryBrand External Problem */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Kya Dard Ne Aapki{" "}
            <span className="text-amber-400">Zindagi Rok Di</span>{" "}
            Hai?
          </motion.h1>

          {/* Sub-headline - Solution */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-lg sm:text-xl text-teal-100 max-w-2xl leading-relaxed"
          >
            Physiotherapy, Acupuncture aur Hijama se paayein chronic pain se azaadi — bina surgery ke, bina side effects ke.
          </motion.p>

          {/* Internal Problem - StoryBrand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 space-y-2 text-teal-200"
          >
            <p className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">✦</span>
              Kya aap bachchon ke saath khel nahi paate?
            </p>
            <p className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">✦</span>
              Kya surgery ka dar aapko raat jagata hai?
            </p>
            <p className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">✦</span>
              Kya aap apne parivaar ka bojh samajhne lage hain?
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/9431757875"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-teal-900 font-bold rounded-xl px-8 h-14 text-base shadow-xl hover:shadow-2xl transition-all duration-300">
                <MessageCircle className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
            </a>
            <a href="tel:9431757875">
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 rounded-xl px-8 h-14 text-base backdrop-blur-sm">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10 flex flex-wrap gap-6 text-sm text-teal-200"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-amber-400" />
              <span>No Surgery Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-amber-400" />
              <span>10+ Expert Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-400" />
              <span>International Standards</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-teal-300"
        >
          <span className="text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
