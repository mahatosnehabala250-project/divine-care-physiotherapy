"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
  { icon: Award, value: 500, suffix: "+", label: "Successful Treatments", color: "teal", description: "Chronic pain se azaadi", maxValue: 1000 },
  { icon: Users, value: 10, suffix: "+", label: "Expert Team Members", color: "amber", description: "Har specialty ke liye", maxValue: 20 },
  { icon: HeartPulse, value: 6, suffix: "", label: "Conditions Treated", color: "teal", description: "Comprehensive care", maxValue: 10 },
  { icon: Clock, value: 8, suffix: "+", label: "Years of Experience", color: "amber", description: "Trusted expertise", maxValue: 10 },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for background blur circles
  const blurY1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const blurY2 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const blurX1 = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const blurX2 = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section className="py-16 bg-gradient-to-r from-teal-800 via-teal-900 to-teal-800 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Parallax blur circles */}
        <motion.div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]"
          style={{ y: blurY1, x: blurX1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-teal-400/10 rounded-full blur-[80px]"
          style={{ y: blurY2, x: blurX2 }}
        />
        {/* Static corner circles */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        {/* Diagonal line pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.1) 30px, rgba(255,255,255,0.1) 31px)',
        }} />
        {/* Medical cross watermark SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02]"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="medical-cross" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <g transform="translate(100, 100)" fill="white">
                <rect x="-8" y="-30" width="16" height="60" rx="3" />
                <rect x="-30" y="-8" width="60" height="16" rx="3" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medical-cross)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const progressPercent = Math.round((stat.value / stat.maxValue) * 100);
            return (
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
                    <div className="text-3xl sm:text-4xl font-extrabold mb-1 tracking-tight animate-gradient-text">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      {/* Pulse dot */}
                      <span className={`relative flex h-2 w-2 ${stat.color === "teal" ? "text-teal-400" : "text-amber-400"}`}>
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${stat.color === "teal" ? "bg-teal-400" : "bg-amber-400"} opacity-75`} />
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${stat.color === "teal" ? "bg-teal-300" : "bg-amber-300"}`} />
                      </span>
                      <p className="text-white/90 font-medium text-sm">{stat.label}</p>
                    </div>
                    <p className="text-teal-300/40 text-xs italic mt-1">{stat.description}</p>

                    {/* Progress bar */}
                    <div className="mt-3 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          stat.color === "teal"
                            ? "bg-gradient-to-r from-teal-400 to-teal-300"
                            : "bg-gradient-to-r from-amber-400 to-amber-300"
                        }`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${progressPercent}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.8 + i * 0.15, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
