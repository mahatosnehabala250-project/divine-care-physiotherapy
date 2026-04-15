"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Quote, Award, Users, Stethoscope, Phone, GraduationCap, Hospital, Shield, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function DoctorMessage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [quoteExpanded, setQuoteExpanded] = useState(true);
  const [visibleSentences, setVisibleSentences] = useState(0);

  const sentences = [
    "I welcome you to Divine Care.",
    "One of the unique clinic of its kind in Jamshedpur.",
    "Here, we have created a state of the art facilities to cater to Chronic disease.",
    "Our services are designed to international standards.",
    "We are thankful to the trust our clients have placed in us and happy that we have been able to deliver them.",
    "Our most important motto is a pleasant recuperation for the patients in an amicable environment.",
    "And We are glad that we have been able to achieve our motto with aplomb."
  ];

  // Staggered sentence reveal
  useEffect(() => {
    if (!isInView) return;
    const timers: NodeJS.Timeout[] = [];
    sentences.forEach((_, i) => {
      timers.push(setTimeout(() => {
        setVisibleSentences(prev => Math.max(prev, i + 1));
      }, 800 + i * 350));
    });
    return () => timers.forEach(t => clearTimeout(t));
  }, [isInView]);

  // Certifications data
  const certifications = [
    { label: "BPT", full: "Bachelor of Physiotherapy", icon: GraduationCap, color: "teal" },
    { label: "MIAP", full: "Member IAP", icon: Award, color: "amber" },
    { label: "Certified Acupuncturist", full: "Acupuncture Certified", icon: Stethoscope, color: "teal" },
    { label: "Hijama Specialist", full: "Cupping Therapy Expert", icon: Shield, color: "amber" },
  ];

  // Timeline data
  const timeline = [
    { year: "2016", label: "Started Practice" },
    { year: "2018", label: "Divine Care Founded" },
    { year: "2020", label: "500+ Patients Treated" },
    { year: "2024", label: "Multi-therapy Center" },
  ];

  const isLongQuote = true; // The quote is always long enough
  const shortQuoteSentences = 3;

  return (
    <section id="doctor" className="py-20 bg-gradient-to-b from-white to-teal-50/50 relative overflow-hidden" ref={ref}>
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-[100px]" />
      </div>

      {/* Stethoscope SVG watermark */}
      <Stethoscope className="absolute right-[5%] top-[30%] w-56 h-56 text-teal-200/[0.08] pointer-events-none -rotate-12" strokeWidth={0.7} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Guide Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <Stethoscope className="h-4 w-4" />
            Your Guide to Recovery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-teal-900 leading-tight">
            Aapka Dard, <span className="text-amber-600">Humara Mission</span>
          </h2>
          <p className="mt-4 text-teal-600 max-w-xl mx-auto leading-relaxed text-base sm:text-lg">
            Hum samajhte hain ki dard kitna mushkil hota hai. Dr. Vikas ke saath, aap akela nahi hain.
          </p>
        </motion.div>

        {/* Doctor Profile */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative dot frame around image with shimmer animation */}
            <div className="p-2 border-[3px] border-dotted border-teal-300/30 rounded-[1.75rem] relative overflow-hidden">
              {/* Shimmer overlay on the dotted border */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ x: "-100%" }}
                animate={isInView ? { x: "200%" } : {}}
                transition={{
                  duration: 2.5,
                  delay: 0.8,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(20,184,166,0.15) 40%, rgba(245,158,11,0.12) 60%, transparent 100%)",
                }}
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl glow-teal">
                <img
                  src="/images/doctor-portrait.png"
                  alt="Dr. Vikas Kr. Sahu - Physiotherapy Specialist"
                  className="w-full h-[480px] sm:h-[520px] object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/50 via-transparent to-transparent" />
              </div>
            </div>
            {/* Floating Badge 1 - with float animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1, y: [0, -6, 0] } : {}}
              transition={{
                opacity: { duration: 0.5, delay: 0.6 },
                scale: { duration: 0.5, delay: 0.6 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
              }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-teal-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-teal-900 text-lg">500+</p>
                  <p className="text-xs text-teal-600">Successful Treatments</p>
                </div>
              </div>
            </motion.div>
            {/* Floating Badge 2 - with float animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1, y: [0, -8, 0] } : {}}
              transition={{
                opacity: { duration: 0.5, delay: 0.7 },
                scale: { duration: 0.5, delay: 0.7 },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
              }}
              className="absolute top-4 -left-4 bg-white rounded-2xl shadow-xl p-3 border border-teal-100"
            >
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-teal-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-teal-600" />
                </div>
                <div>
                  <p className="font-bold text-teal-900 text-sm">Expert</p>
                  <p className="text-[10px] text-teal-600">Physiotherapist</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Message Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-7"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Hospital className="h-5 w-5 text-teal-500" />
                <span className="text-teal-500 font-medium text-sm">Divine Care Physiotherapy</span>
              </div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-teal-900">Dr. Vikas Kr. Sahu</h3>
                {/* Verified Badge */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200 whitespace-nowrap"
                >
                  <CheckCircle className="h-3.5 w-3.5" />
                  Verified
                </motion.span>
              </div>
              <p className="text-teal-600 font-medium mt-1 text-base">Founder & Chief Physiotherapist</p>
            </div>

            {/* Quote - Enhanced with sentence-by-sentence fade-in + Read More */}
            <div className="relative bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 border border-teal-100 shadow-sm overflow-hidden">
              {/* Large watermark quotation mark behind text */}
              <Quote className="absolute -top-2 -right-2 h-32 w-32 text-teal-100/25 rotate-6 pointer-events-none" />

              {/* Left border accent - gradient from teal to amber */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{
                background: 'linear-gradient(180deg, #0d9488, #f59e0b)'
              }} />

              <div className="absolute top-3 left-4">
                <Quote className="h-10 w-10 text-teal-200/60" />
              </div>
              <div className="pl-6 pr-2 relative z-10">
                <p className="text-teal-800 leading-[1.8] italic text-[15px]">
                  &ldquo;
                  {sentences.map((sentence, i) => {
                    const isHidden = !quoteExpanded && i >= shortQuoteSentences;
                    if (isHidden) return null;
                    return (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 4 }}
                        animate={visibleSentences > i ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline"
                      >
                        {sentence}{" "}
                      </motion.span>
                    );
                  })}
                  {quoteExpanded && <span>&rdquo;</span>}
                  {!quoteExpanded && <span>...&rdquo;</span>}
                </p>
                {/* Read More / Read Less toggle - shown on mobile, hidden on desktop */}
                {isLongQuote && (
                  <button
                    onClick={() => setQuoteExpanded(!quoteExpanded)}
                    className="mt-3 inline-flex items-center gap-1 text-teal-600 hover:text-teal-800 text-sm font-medium transition-colors lg:hidden"
                  >
                    {quoteExpanded ? (
                      <>Read Less <ChevronUp className="h-3.5 w-3.5" /></>
                    ) : (
                      <>Read More <ChevronDown className="h-3.5 w-3.5" /></>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Authority Badges - Enhanced with hover scale + glow */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-3 border border-teal-100 shadow-sm text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-100/50 hover:border-teal-200">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="h-5 w-5 text-teal-600" />
                </div>
                <p className="font-bold text-teal-900 text-lg">500+</p>
                <p className="text-[10px] text-teal-600">Treatments</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-amber-100 shadow-sm text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-100/50 hover:border-amber-200">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="h-5 w-5 text-amber-600" />
                </div>
                <p className="font-bold text-teal-900 text-lg">10+</p>
                <p className="text-[10px] text-teal-600">Expert Team</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-teal-100 shadow-sm text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-100/50 hover:border-teal-200">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <GraduationCap className="h-5 w-5 text-teal-600" />
                </div>
                <p className="font-bold text-teal-900 text-lg">8+</p>
                <p className="text-[10px] text-teal-600">Years Exp.</p>
              </div>
            </div>

            {/* Credentials / Certifications - Pill/Chip style */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-3"
            >
              <h4 className="text-sm font-semibold text-teal-800 uppercase tracking-wider flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-500" />
                Credentials & Certifications
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {certifications.map((cert, i) => {
                  const IconComp = cert.icon;
                  const isTeal = cert.color === "teal";
                  return (
                    <motion.div
                      key={cert.label}
                      initial={{ opacity: 0, scale: 0.85, y: 8 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
                      whileHover={{ scale: 1.07, y: -2 }}
                      className={`
                        inline-flex items-center gap-2 px-3.5 py-2 rounded-full border cursor-default
                        transition-shadow duration-300
                        ${isTeal
                          ? "bg-teal-50 border-teal-200 hover:shadow-md hover:shadow-teal-100/60"
                          : "bg-amber-50 border-amber-200 hover:shadow-md hover:shadow-amber-100/60"
                        }
                      `}
                    >
                      <div className={`
                        w-6 h-6 rounded-full flex items-center justify-center
                        ${isTeal ? "bg-teal-200/70" : "bg-amber-200/70"}
                      `}>
                        <IconComp className={`h-3.5 w-3.5 ${isTeal ? "text-teal-700" : "text-amber-700"}`} />
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className={`text-xs font-bold ${isTeal ? "text-teal-800" : "text-amber-800"}`}>{cert.label}</span>
                        <span className={`text-[10px] ${isTeal ? "text-teal-600" : "text-amber-600"}`}>{cert.full}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="space-y-3"
            >
              <h4 className="text-sm font-semibold text-teal-800 uppercase tracking-wider flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-teal-500" />
                Experience Journey
              </h4>
              <div className="relative py-4">
                {/* Horizontal line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-teal-200 -translate-y-1/2 rounded-full" />
                {/* Animated fill line */}
                <motion.div
                  className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-teal-500 to-amber-500 -translate-y-1/2 rounded-full"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 1.8, delay: 0.9, ease: "easeInOut" }}
                />
                {/* Milestone dots */}
                <div className="relative flex justify-between">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 1.0 + i * 0.25, type: "spring", stiffness: 180 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="relative">
                        <div className={`
                          w-4 h-4 rounded-full border-[2.5px] border-white shadow-md z-10 relative
                          ${i === timeline.length - 1 ? "bg-amber-500" : "bg-teal-500"}
                        `} />
                        {/* Pulse ring on last milestone */}
                        {i === timeline.length - 1 && (
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-amber-400"
                            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                          />
                        )}
                      </div>
                      <span className="mt-2 text-xs font-bold text-teal-800">{item.year}</span>
                      <span className="text-[10px] text-teal-600 max-w-[72px] leading-tight mt-0.5">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl px-7 h-12 shadow-lg shadow-teal-600/20 hover:shadow-xl transition-all">
                  <Phone className="h-4 w-4 mr-2" />
                  Consult Dr. Vikas Today
                </Button>
              </a>
              <a href="tel:9431757875">
                <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50 rounded-xl h-12">
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 9431757875
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
