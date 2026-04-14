"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Users, HeartPulse, Clock } from "lucide-react";

function AnimatedCounter({ target, suffix = "", isInView }: { target: number; suffix?: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

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
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Award, value: 500, suffix: "+", label: "Successful Treatments", color: "teal" },
  { icon: Users, value: 10, suffix: "+", label: "Expert Team Members", color: "amber" },
  { icon: HeartPulse, value: 6, suffix: "", label: "Conditions Treated", color: "teal" },
  { icon: Clock, value: 8, suffix: "+", label: "Years of Experience", color: "amber" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-800 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                stat.color === "teal" ? "bg-teal-600/50" : "bg-amber-500/30"
              }`}>
                <stat.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="mt-1 text-teal-200 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
