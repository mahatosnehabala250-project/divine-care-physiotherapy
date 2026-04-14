"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Users, HeartPulse, Clock } from "lucide-react";

function AnimatedCounter({ target, suffix = "", isInView }: { target: number; suffix?: string; isInView: boolean }) {
  const [count, setCount] = useState(target);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {isInView ? count : target}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Award, value: 500, suffix: "+", label: "Successful Treatments", color: "teal", description: "Chronic pain se azaadi" },
  { icon: Users, value: 10, suffix: "+", label: "Expert Team Members", color: "amber", description: "Har specialty ke liye" },
  { icon: HeartPulse, value: 6, suffix: "", label: "Conditions Treated", color: "teal", description: "Comprehensive care" },
  { icon: Clock, value: 8, suffix: "+", label: "Years of Experience", color: "amber", description: "Trusted expertise" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-gradient-to-r from-teal-800 via-teal-900 to-teal-800 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-teal-400/10 rounded-full blur-[80px]" />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.1) 30px, rgba(255,255,255,0.1) 31px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="relative rounded-2xl p-6 sm:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/[0.12] hover:scale-[1.02] hover:border-white/20">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
                }} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110 ${
                    stat.color === "teal" ? "bg-teal-400/20 shadow-lg shadow-teal-500/10" : "bg-amber-400/20 shadow-lg shadow-amber-500/10"
                  }`}>
                    <stat.icon className={`h-7 w-7 sm:h-8 sm:w-8 ${stat.color === "teal" ? "text-teal-300" : "text-amber-300"}`} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </div>
                  <p className="text-white/90 font-medium text-sm mb-1">{stat.label}</p>
                  <p className="text-teal-300/40 text-xs italic">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
