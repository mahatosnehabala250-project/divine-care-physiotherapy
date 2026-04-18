"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Building2, Bed, Stethoscope, Sparkles, Heart,
  ChevronLeft, ChevronRight, MessageCircle, Phone,
  ShieldCheck, Thermometer, Pill, Activity,
  DoorOpen, Snowflake, BadgeCheck, Accessibility
} from "lucide-react";

const areas = [
  {
    title: "Reception & Waiting Area",
    hinglish: "Aapka swagat yahan se hota hai",
    description: "Comfortable, clean, aur welcoming reception area. Aapko wait nahi karna padega — appointments pehle se scheduled hain.",
    icon: Building2,
    color: "teal",
    gradientFrom: "from-teal-200",
    gradientTo: "to-teal-100",
    features: ["AC Waiting Area", "Comfortable Seating", "Water & Magazines"],
  },
  {
    title: "Treatment Rooms",
    hinglish: "Yahan healing hoti hai",
    description: "Private, well-equipped treatment rooms jahan Dr. Vikas personally aapka treatment karte hain. Complete privacy aur comfort ensured.",
    icon: Bed,
    color: "amber",
    gradientFrom: "from-amber-200",
    gradientTo: "to-amber-100",
    features: ["Private Rooms", "Modern Equipment", "Hygiene Maintained"],
  },
  {
    title: "Physiotherapy Unit",
    hinglish: "Latest instruments aur techniques",
    description: "State-of-the-art physiotherapy equipment — ultrasound, TENS, laser therapy, aur manual therapy — sab international standards ke according.",
    icon: Activity,
    color: "teal",
    gradientFrom: "from-emerald-200",
    gradientTo: "to-teal-100",
    features: ["Ultrasound Therapy", "TENS Unit", "Laser Treatment"],
  },
  {
    title: "Acupuncture Room",
    hinglish: "Ancient wisdom + modern science",
    description: "Specialized acupuncture room with sterile, disposable needles. WHO-approved techniques for pain relief aur healing.",
    icon: Stethoscope,
    color: "amber",
    gradientFrom: "from-orange-200",
    gradientTo: "to-amber-100",
    features: ["Sterile Needles", "WHO Standards", "Pain-Free Sessions"],
  },
  {
    title: "Hijama (Cupping) Area",
    hinglish: "Unique in Jamshedpur",
    description: "Jamshedpur mein yeh unique facility sirf Divine Care mein hai. International standard instruments aur trained practitioners.",
    icon: Heart,
    color: "teal",
    gradientFrom: "from-rose-200",
    gradientTo: "to-teal-100",
    features: ["Sunnah Therapy", "Trained Practitioners", "Detox & Pain Relief"],
  },
];

const facilityStats = [
  { icon: DoorOpen, label: "5 Treatment Rooms" },
  { icon: Snowflake, label: "AC Facility" },
  { icon: BadgeCheck, label: "Hygiene Certified" },
  { icon: Accessibility, label: "Wheelchair Accessible" },
];

// Pre-computed particle positions to guarantee identical server & client rendering
// (Math.sin / Math.random produce different float precision on Node.js vs browser)
const TEAL_PARTICLES = [
  { id: 0, x: 12.5, y: 18.3, size: 4.2, duration: 7, delay: 0.5 },
  { id: 1, x: 45.8, y: 72.1, size: 5.1, duration: 6, delay: 1.2 },
  { id: 2, x: 78.4, y: 35.6, size: 3.8, duration: 8, delay: 0.8 },
  { id: 3, x: 23.1, y: 89.2, size: 6.0, duration: 5, delay: 2.1 },
  { id: 4, x: 56.7, y: 14.5, size: 4.5, duration: 9, delay: 0.3 },
  { id: 5, x: 89.3, y: 63.8, size: 3.2, duration: 7, delay: 1.5 },
  { id: 6, x: 34.2, y: 47.9, size: 5.8, duration: 6, delay: 2.4 },
  { id: 7, x: 67.5, y: 81.3, size: 4.0, duration: 8, delay: 0.9 },
  { id: 8, x: 8.9, y: 55.2, size: 5.3, duration: 5, delay: 1.8 },
  { id: 9, x: 91.6, y: 22.7, size: 3.6, duration: 9, delay: 0.6 },
  { id: 10, x: 42.3, y: 68.4, size: 4.8, duration: 7, delay: 2.0 },
  { id: 11, x: 73.8, y: 9.1, size: 5.6, duration: 6, delay: 1.1 },
];

const AMBER_PARTICLES = [
  { id: 0, x: 18.7, y: 24.5, size: 5.4, duration: 6, delay: 1.0 },
  { id: 1, x: 52.3, y: 67.8, size: 3.9, duration: 8, delay: 0.4 },
  { id: 2, x: 85.1, y: 41.2, size: 4.7, duration: 7, delay: 1.7 },
  { id: 3, x: 15.4, y: 83.6, size: 5.2, duration: 5, delay: 2.3 },
  { id: 4, x: 61.2, y: 11.9, size: 3.5, duration: 9, delay: 0.7 },
  { id: 5, x: 93.7, y: 58.4, size: 6.1, duration: 6, delay: 1.4 },
  { id: 6, x: 28.9, y: 42.3, size: 4.3, duration: 8, delay: 2.5 },
  { id: 7, x: 72.6, y: 76.8, size: 5.7, duration: 7, delay: 0.2 },
  { id: 8, x: 5.3, y: 51.7, size: 3.8, duration: 5, delay: 1.9 },
  { id: 9, x: 87.4, y: 16.2, size: 4.6, duration: 9, delay: 1.3 },
  { id: 10, x: 38.1, y: 64.9, size: 5.0, duration: 6, delay: 0.8 },
  { id: 11, x: 69.7, y: 5.4, size: 3.3, duration: 8, delay: 2.2 },
];

// Floating particle component
function FloatingParticles({ color }: { color: string }) {
  const particles = color === "teal" ? TEAL_PARTICLES : AMBER_PARTICLES;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${color === "teal" ? "bg-teal-400/30" : "bg-amber-400/30"}`}
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px` }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, -10, 5, 0],
            opacity: [0.3, 0.7, 0.3, 0.6, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function VirtualTour() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(0);
  const [detailHovered, setDetailHovered] = useState(false);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeArea = areas[activeIndex];

  // Handle user interaction — pause then resume after 10s
  const handleInteraction = useCallback(() => {
    setIsPaused(true);
    setLastInteraction(Date.now());
    setProgress(0);
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
  }, []);

  // Auto-play timer ref for cleanup
  const autoPlayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Start auto-play — called via ref callback to avoid setState-in-effect lint
  const startAutoPlay = useCallback(() => {
    setProgress(0);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((prevIdx) => (prevIdx + 1) % areas.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);
  }, []);

  // Schedule auto-play start or resume check via setTimeout (no setState in effect)
  useEffect(() => {
    if (!isPaused) {
      // Use setTimeout to defer startAutoPlay outside the effect body
      autoPlayTimerRef.current = setTimeout(() => startAutoPlay(), 0);
      return () => {
        if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      };
    }

    // Paused — check if 10s have passed since last interaction
    const resumeCheck = setInterval(() => {
      if (Date.now() - lastInteraction >= 10000) {
        setIsPaused(false);
        setLastInteraction(0);
      }
    }, 1000);

    return () => clearInterval(resumeCheck);
  }, [isPaused, lastInteraction, startAutoPlay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  // Pause on hover of detail panel
  const handleDetailMouseEnter = useCallback(() => {
    setDetailHovered(true);
    handleInteraction();
  }, [handleInteraction]);

  const handleDetailMouseLeave = useCallback(() => {
    setDetailHovered(false);
  }, []);

  // Navigation handler
  const navigateTo = useCallback((index: number) => {
    setActiveIndex(index);
    handleInteraction();
  }, [handleInteraction]);

  const navigateNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % areas.length);
    handleInteraction();
  }, [handleInteraction]);

  const navigatePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + areas.length) % areas.length);
    handleInteraction();
  }, [handleInteraction]);

  return (
    <section
      id="virtual-tour"
      className="py-20 bg-gradient-to-b from-white via-teal-50/20 to-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <Building2 className="h-4 w-4" />
            CLINIC VIRTUAL TOUR
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Apni Aankhon Se <span className="text-amber-600">Dekhein</span>
          </h2>
          <p className="mt-3 text-teal-600 max-w-2xl mx-auto leading-relaxed">
            Hamare clinic ka har corner international standards ke according designed hai. Dekhein kya kya facilities hain.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Area Selector Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <div className="space-y-3">
              {areas.map((area, i) => {
                const isActive = activeIndex === i;
                const AreaIcon = area.icon;
                return (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    onClick={() => navigateTo(i)}
                    className={`relative w-full text-left rounded-2xl p-4 transition-all duration-300 flex items-center gap-4 overflow-hidden ${
                      isActive
                        ? `bg-gradient-to-r ${area.color === "teal" ? "from-teal-600 to-teal-700" : "from-amber-500 to-amber-600"} text-white shadow-lg`
                        : "bg-white border border-teal-100 hover:border-teal-300 hover:shadow-md text-teal-800"
                    }`}
                  >
                    {/* Active indicator line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-white/80 rounded-r-full"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}

                    {/* Number badge */}
                    <span className={`flex-shrink-0 text-[10px] font-bold leading-none rounded-full w-6 h-6 flex items-center justify-center ${
                      isActive ? "bg-white/25 text-white" : area.color === "teal" ? "bg-teal-100 text-teal-600" : "bg-amber-100 text-amber-600"
                    }`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? "bg-white/20" : area.color === "teal" ? "bg-teal-100" : "bg-amber-100"
                    }`}>
                      <AreaIcon className={`h-4 w-4 ${isActive ? "text-white" : area.color === "teal" ? "text-teal-600" : "text-amber-600"}`} />
                    </div>
                    <div>
                      <p className={`font-semibold text-sm ${isActive ? "text-white" : "text-teal-900"}`}>{area.title}</p>
                      <p className={`text-xs ${isActive ? "text-white/80" : "text-teal-500"}`}>{area.hinglish}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Active Area Detail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div
              className="bg-white rounded-3xl border border-teal-100 shadow-lg overflow-hidden"
              onMouseEnter={handleDetailMouseEnter}
              onMouseLeave={handleDetailMouseLeave}
            >
              {/* Progress bar */}
              <div className="h-1 bg-teal-100/60 relative overflow-hidden">
                <motion.div
                  className={`h-full ${activeArea.color === "teal" ? "bg-teal-500" : "bg-amber-500"}`}
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* Image area with animated gradient */}
                  <div className={`relative h-56 sm:h-72 bg-gradient-to-br ${activeArea.gradientFrom} ${activeArea.gradientTo} flex items-center justify-center overflow-hidden`}>
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      animate={{
                        background: activeArea.color === "teal"
                          ? [
                              "linear-gradient(135deg, rgba(20,184,166,0.3) 0%, rgba(245,158,11,0.1) 100%)",
                              "linear-gradient(135deg, rgba(20,184,166,0.1) 0%, rgba(245,158,11,0.3) 100%)",
                              "linear-gradient(135deg, rgba(20,184,166,0.3) 0%, rgba(245,158,11,0.1) 100%)",
                            ]
                          : [
                              "linear-gradient(135deg, rgba(245,158,11,0.3) 0%, rgba(20,184,166,0.1) 100%)",
                              "linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(20,184,166,0.3) 100%)",
                              "linear-gradient(135deg, rgba(245,158,11,0.3) 0%, rgba(20,184,166,0.1) 100%)",
                            ],
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Floating particles */}
                    <FloatingParticles color={activeArea.color} />

                    {/* Pulse ring behind icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <motion.div
                        className={`w-28 h-28 rounded-full ${activeArea.color === "teal" ? "bg-teal-400/15" : "bg-amber-400/15"}`}
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                      />
                      <motion.div
                        className={`absolute w-24 h-24 rounded-full ${activeArea.color === "teal" ? "bg-teal-400/20" : "bg-amber-400/20"}`}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.4, 0, 0.4],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                      />
                    </div>

                    {/* Center content with scale+fade */}
                    <motion.div
                      className="text-center relative z-10"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <div className={`w-20 h-20 rounded-3xl mx-auto mb-4 flex items-center justify-center ${
                        activeArea.color === "teal" ? "bg-teal-500/20" : "bg-amber-500/20"
                      }`}>
                        <activeArea.icon className={`h-10 w-10 ${activeArea.color === "teal" ? "text-teal-600" : "text-amber-600"}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-teal-900">{activeArea.title}</h3>
                      <p className="text-teal-500 text-sm mt-1">{activeArea.hinglish}</p>
                    </motion.div>

                    {/* Navigation arrows */}
                    <button
                      onClick={navigatePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-teal-600 hover:bg-white hover:scale-110 transition-all"
                      aria-label="Previous area"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={navigateNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-teal-600 hover:bg-white hover:scale-110 transition-all"
                      aria-label="Next area"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="p-6 sm:p-8">
                    <p className="text-teal-700 leading-relaxed mb-6">{activeArea.description}</p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-3 gap-3 mb-6">
                      {activeArea.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 bg-teal-50 rounded-xl p-3 border border-teal-100">
                          <ShieldCheck className="h-4 w-4 text-teal-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-teal-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Dots indicator */}
                    <div className="flex items-center justify-center gap-2">
                      {areas.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => navigateTo(i)}
                          className={`transition-all duration-300 rounded-full ${
                            i === activeIndex
                              ? "w-8 h-2.5 bg-teal-500"
                              : "w-2.5 h-2.5 bg-teal-200 hover:bg-teal-300"
                          }`}
                          aria-label={`Go to area ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Facility Stats */}
              <div className="border-t border-teal-100 px-6 sm:px-8 py-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  {facilityStats.map((stat, i) => {
                    const StatIcon = stat.icon;
                    return (
                      <div key={i} className="flex items-center gap-2">
                        <StatIcon className="h-4 w-4 text-teal-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-teal-600 whitespace-nowrap">{stat.label}</span>
                        {i < facilityStats.length - 1 && (
                          <div className="w-px h-4 bg-teal-200 ml-2 hidden sm:block" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-teal-600 mb-4">Clinic dekh kar aapko aur confidence hoga!</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://wa.me/919431757875" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl shadow-lg btn-hover-scale">
                <MessageCircle className="h-4 w-4 mr-2" />
                Visit Karne Ka Time Lein
              </Button>
            </a>
            <a href="tel:9431757875">
              <Button variant="outline" className="border-teal-300 text-teal-700 rounded-xl btn-hover-scale">
                <Phone className="h-4 w-4 mr-2" />
                Call: 9431757875
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
