"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, TrendingUp, Calendar } from "lucide-react";

export default function LivePatientCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Users,
      value: 23,
      suffix: "",
      label: "Patients Treated This Month",
      color: "teal",
      description: "Aur badh raha hai!",
    },
    {
      icon: TrendingUp,
      value: 94,
      suffix: "%",
      label: "Success Rate Without Surgery",
      color: "amber",
      description: "90%+ patients bina surgery ke theek hote hain",
    },
    {
      icon: Calendar,
      value: 7,
      suffix: "",
      label: "Avg. Days to First Relief",
      color: "teal",
      description: "Pehle session se hi fark mehsoos hota hai",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-teal-800 via-teal-700 to-teal-800 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-600/30 rounded-full blur-[80px] animate-float" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[80px]" style={{ animationDelay: "1.5s" }} />
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
            Live Treatment Data
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Har Mahine <span className="animated-text-gradient">Results</span> Bolte Hain
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-dark rounded-2xl p-6 text-center"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                stat.color === "teal" ? "bg-teal-500/30" : "bg-amber-500/30"
              }`}>
                <stat.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-1">
                <AnimatedNumber target={stat.value} isInView={isInView} />
                <span className="text-amber-400">{stat.suffix}</span>
              </div>
              <p className="text-white font-medium text-sm mb-1">{stat.label}</p>
              <p className="text-teal-200/60 text-xs">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ target, isInView }: { target: number; isInView: boolean }) {
  const [count, setCount] = useState(target);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
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

  return <span>{isInView ? count : target}</span>;
}
