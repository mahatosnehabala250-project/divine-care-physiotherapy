"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle, ArrowRight, MessageCircle, Phone,
  Clock, TrendingDown, CalendarX, Sparkles, Timer, AlertCircle
} from "lucide-react";

export default function WhyWait() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Static "slots remaining" number (3-5 range, purely visual)
  const [slotsLeft] = useState(() => Math.floor(Math.random() * 3) + 3);

  // Sparkle positions for CTA button
  const sparkles = [
    { x: "10%", y: "20%", delay: 0 },
    { x: "30%", y: "60%", delay: 0.5 },
    { x: "60%", y: "15%", delay: 1 },
    { x: "80%", y: "50%", delay: 1.5 },
    { x: "50%", y: "80%", delay: 0.8 },
    { x: "20%", y: "75%", delay: 1.2 },
  ];

  // Pain timeline data
  const timelineStages = [
    { week: "Week 1", label: "Mild", severity: 15, color: "bg-yellow-400" },
    { week: "Week 4", label: "Moderate", severity: 40, color: "bg-orange-400" },
    { week: "Week 12", label: "Severe", severity: 70, color: "bg-red-500" },
    { week: "Week 24", label: "Chronic", severity: 95, color: "bg-red-800" },
  ];

  // Cost of waiting cards with severity data
  const costCards = [
    {
      icon: Clock,
      stat: "Har Din",
      text: "Dard badhta hai — chronic conditions 3x worse hoti hain bina treatment ke",
      severity: 60,
      warning: "⚠️",
    },
    {
      icon: TrendingDown,
      stat: "30% More",
      text: "Har mahine delay se recovery time aur cost dono badhte hain",
      severity: 75,
      warning: "⚠️",
    },
    {
      icon: CalendarX,
      stat: "6 Mahine+",
      text: "Chronic pain patients average 6 mahine tak wait karte hain — itna mat wait karein!",
      severity: 90,
      warning: "⚠️",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-amber-900" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />
      {/* Animated decorative orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [-50, 50, -50], y: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-72 h-72 bg-red-600/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [30, -30, 30], y: [20, -30, 20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-amber-600/15 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Slots Remaining Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-red-600/30 border border-red-400/40 rounded-full px-5 py-2 mb-6 backdrop-blur-sm"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-lg shadow-red-400/50"
            />
            <span className="text-white font-bold text-sm sm:text-base tracking-wide">
              Only <span className="text-amber-300 text-lg sm:text-xl">{slotsLeft}</span> Slots Left Today!
            </span>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <AlertCircle className="h-4 w-4 text-red-300" />
            </motion.span>
          </motion.div>

          {/* Warning icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400/30 mb-6"
          >
            <AlertTriangle className="h-8 w-8 text-amber-400" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-shadow-hero">
            Ab Aur <span className="animated-text-gradient">Intzaar</span> Kyun?
          </h2>

          <p className="text-amber-100/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Har din aap dard sah rahe hain, har din condition worse ho rahi hai. Kya aap apni zindagi dard mein bitana chahte hain — ya aaj hi action lena chahenge?
          </p>

          {/* Pain Worsening Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-10"
          >
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10">
              <h3 className="text-white font-bold text-base sm:text-lg mb-4 flex items-center justify-center gap-2">
                <TrendingDown className="h-5 w-5 text-red-400" />
                Pain Worsening Timeline
              </h3>

              {/* Timeline bar */}
              <div className="relative">
                {/* Gradient bar */}
                <div className="h-4 rounded-full overflow-hidden bg-white/10 mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(to right, #facc15, #fb923c, #ef4444, #7f1d1d)",
                    }}
                  />
                </div>

                {/* Stage markers */}
                <div className="flex justify-between relative">
                  {timelineStages.map((stage, i) => (
                    <motion.div
                      key={stage.week}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1 + i * 0.2 }}
                      className="flex flex-col items-center relative"
                      style={{ width: "25%" }}
                    >
                      {/* "You are here" indicator on "Severe" */}
                      {stage.label === "Severe" && (
                        <motion.div
                          animate={{ y: [0, -4, 0], opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shadow-lg shadow-red-600/40"
                        >
                          ← You are here
                        </motion.div>
                      )}
                      <div className={`w-3 h-3 rounded-full ${stage.color} border-2 border-white/30 shadow-lg mb-1.5`} />
                      <span className="text-white/90 font-semibold text-[10px] sm:text-xs">{stage.week}</span>
                      <span className="text-amber-200/70 text-[9px] sm:text-[11px]">{stage.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cost of Waiting Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {costCards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="relative group"
              >
                {/* Animated red glow border */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(239,68,68,0.0), inset 0 0 0px rgba(239,68,68,0.0)",
                      "0 0 20px rgba(239,68,68,0.3), inset 0 0 10px rgba(239,68,68,0.1)",
                      "0 0 0px rgba(239,68,68,0.0), inset 0 0 0px rgba(239,68,68,0.0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center relative overflow-hidden"
                >
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-red-500/5 to-amber-500/5" />

                  <div className="relative z-10">
                    <item.icon className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white mb-1 flex items-center justify-center gap-1.5">
                      <span>{item.warning}</span>
                      {item.stat}
                    </p>
                    <p className="text-amber-100/60 text-xs leading-relaxed mb-3">{item.text}</p>

                    {/* Severity progress bar */}
                    <div className="mt-2">
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.severity}%` } : { width: 0 }}
                          transition={{ duration: 1.2, delay: 0.8 + i * 0.2, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{
                            background: item.severity > 75
                              ? "linear-gradient(to right, #f97316, #ef4444)"
                              : item.severity > 50
                              ? "linear-gradient(to right, #facc15, #f97316)"
                              : "linear-gradient(to right, #facc15, #facc15)",
                          }}
                        />
                      </div>
                      <p className="text-[9px] text-red-300/60 mt-1 tracking-wider uppercase font-medium">
                        Severity: {item.severity > 75 ? "Critical" : item.severity > 50 ? "High" : "Moderate"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* Limited Time Offer Badge */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm"
            >
              <Timer className="h-4 w-4 text-amber-300" />
              <span className="text-amber-200 font-bold text-sm tracking-wide">Limited Time Offer</span>
              <span className="text-lg">⏰</span>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
              {/* Main CTA with sparkle animation */}
              <div className="relative">
                {/* Sparkle particles */}
                {sparkles.map((s, i) => (
                  <motion.span
                    key={i}
                    className="absolute pointer-events-none text-amber-200/80 text-xs"
                    style={{ left: s.x, top: s.y }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.2, 0.5],
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: s.delay,
                      ease: "easeInOut",
                    }}
                  >
                    ✦
                  </motion.span>
                ))}
                <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-teal-900 font-bold rounded-2xl px-10 h-16 text-base shadow-xl shadow-amber-500/30 btn-hover-scale relative overflow-hidden">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Aaj Hi Appointment Book Karein
                    <ArrowRight className="h-5 w-5 ml-2" />
                    {/* Shimmer effect */}
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                      className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                  </Button>
                </a>
              </div>

              <a href="tel:9431757875">
                <Button size="lg" className="bg-white/15 hover:bg-white/25 text-white border-2 border-white/40 hover:border-white/60 rounded-2xl px-8 h-14 backdrop-blur-sm btn-hover-scale font-bold shadow-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 9431757875
                </Button>
              </a>
            </div>
          </motion.div>
          <p className="mt-4 text-amber-200/50 text-xs">Free consultation • No obligation • Same day appointment available</p>
        </motion.div>
      </div>
    </section>
  );
}
