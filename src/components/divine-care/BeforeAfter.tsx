"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, ArrowRight, MessageCircle, Phone, CheckCircle2, Sparkles, Activity, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const results = [
  {
    condition: "Knee Pain",
    before: "Ghutne ka dard, seedhi chadna mushkil, chalna limited",
    after: "6 sessions mein pain-free, seedhi chad sakte hain, normal walk",
    improvement: 90,
    sessions: "6",
    icon: "🦵",
  },
  {
    condition: "Back Pain",
    before: "3 saal se chronic pain, neend nahi aati, jhukna mushkil",
    after: "4 sessions mein relief, poori neend, normal movement",
    improvement: 85,
    sessions: "4",
    icon: "🔙",
  },
  {
    condition: "Neck Pain",
    before: "Gardan mein stiffness, sir ghoomna, poora din pareshan",
    after: "3 sessions mein flexibility wapas, no more dizziness",
    improvement: 80,
    sessions: "3",
    icon: "🧘",
  },
  {
    condition: "Stroke Rehab",
    before: "Aadha body paralyzed, dependent on others",
    after: "3 months mein walking independently, self-care possible",
    improvement: 75,
    sessions: "3 mo",
    icon: "💪",
  },
];

// Circular progress ring component
function ProgressRing({ percentage, isInView }: { percentage: number; isInView: boolean }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-16 h-16 flex-shrink-0">
      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
        {/* Background circle */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-gray-200"
        />
        {/* Progress circle */}
        <motion.circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-xs font-bold text-teal-700"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          {percentage}%
        </motion.span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="results"
      className="py-20 bg-gradient-to-b from-white to-teal-50/30 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl" />
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
            <TrendingUp className="h-4 w-4" />
            TREATMENT RESULTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            {"Before & After — Real"} <span className="text-amber-600">Results</span>
          </h2>
          <p className="mt-3 text-teal-600 max-w-2xl mx-auto leading-relaxed">
            Dekhein kaise Dr. Vikas ke treatment se patients ki zindagi badli —
            numbers bolte hain.
          </p>
        </motion.div>

        {/* Result Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item, i) => (
            <motion.div
              key={item.condition}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-hover-lift"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 bg-white overflow-hidden relative">
                {/* Top gradient bar */}
                <div className="h-1.5 bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-400" />

                {/* Header with icon + condition + progress ring */}
                <div className="px-5 pt-5 pb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span>
                    <Badge className="bg-teal-100 text-teal-700 border-teal-200 text-xs font-semibold shadow-sm">
                      {item.condition}
                    </Badge>
                  </div>
                  <ProgressRing percentage={item.improvement} isInView={isInView} />
                </div>

                {/* Before Section - Muted/Desaturated */}
                <div className="px-5 pt-2 pb-3">
                  <div className="bg-gradient-to-br from-gray-50 to-rose-50/50 border-l-4 border-rose-300 rounded-lg p-3 relative overflow-hidden">
                    {/* Muted overlay for "before" feel */}
                    <div className="absolute inset-0 bg-gray-100/30" />
                    <div className="relative z-10">
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        BEFORE
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.before}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated Divider */}
                <div className="px-5 py-1">
                  <div className="relative h-6 flex items-center justify-center">
                    {/* Gradient divider line */}
                    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-rose-200 via-amber-300 to-emerald-200" />
                    {/* Arrow with animation */}
                    <motion.div
                      animate={{
                        y: hoveredCard === i ? [0, -3, 0] : [0, 2, 0],
                        scale: hoveredCard === i ? 1.15 : 1,
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative z-10 w-7 h-7 rounded-full bg-gradient-to-b from-rose-400 to-emerald-400 flex items-center justify-center shadow-lg"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-white rotate-90" />
                    </motion.div>
                  </div>
                </div>

                {/* After Section - Vibrant/Warm */}
                <div className="px-5 pt-1 pb-5">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-l-4 border-emerald-400 rounded-lg p-3 relative overflow-hidden">
                    {/* Vibrant glow for "after" feel */}
                    <div className="absolute -inset-1 bg-emerald-100/20 rounded-lg blur-sm" />
                    <div className="relative z-10">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        AFTER
                      </p>
                      <p className="text-sm text-emerald-700 leading-relaxed font-medium">
                        {item.after}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Improvement Badge - Floating */}
                <AnimatePresence>
                  {isInView && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: 1.5 + i * 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="absolute top-8 right-3"
                    >
                      <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg shadow-amber-400/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {item.improvement}% Better!
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Session count footer */}
                <div className="px-5 pb-4">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-teal-500 font-medium bg-teal-50/50 rounded-lg py-1.5">
                    <span className="text-teal-700 font-bold">{item.sessions}</span>
                    <span>sessions mein results</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { value: "90%+", label: "Average Improvement", icon: TrendingUp },
            { value: "4.2", label: "Avg Sessions Needed", icon: Activity },
            { value: "500+", label: "Successful Cases", icon: CheckCircle2 },
            { value: "Zero", label: "Side Effects", icon: ShieldCheck },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center bg-white/80 backdrop-blur-sm border border-teal-100 rounded-xl p-4 shadow-sm"
            >
              <stat.icon className="h-4 w-4 text-amber-500 mx-auto mb-1.5" />
              <p className="text-xl font-bold text-teal-800">{stat.value}</p>
              <p className="text-[11px] text-teal-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-14"
        >
          <div className="bg-gradient-to-r from-teal-800 to-teal-700 rounded-2xl p-8 sm:p-10 text-center shadow-xl relative overflow-hidden">
            {/* Decorative pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Kya aap bhi aise results chahte hain?
              </h3>
              <p className="text-teal-200 mb-6 max-w-lg mx-auto">
                Aaj hi free consultation lein aur apni pain-free zindagi ki
                shuruwat karein.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/919431757875"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-amber-500 hover:bg-amber-600 text-teal-900 font-bold rounded-xl shadow-lg transition-all hover:scale-105">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Free Consultation
                  </Button>
                </a>
                <a href="tel:9431757875">
                  <Button
                    variant="outline"
                    className="border-teal-400 text-teal-100 hover:bg-teal-600 rounded-xl transition-all hover:scale-105"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call: 9431757875
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
