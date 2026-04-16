"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Activity, PartyPopper, ArrowRight, MessageCircle, Plus } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Consult & Assess",
    hinglish: "Pehle baat karein, dard samjhein",
    description: "Dr. Vikas personally aapka assessment karenge — aapka dard kahan hai, kitna hai, kab se hai, aur kya affect kar raha hai. Yeh FREE consultation hai.",
    color: "teal",
    features: ["Free Consultation", "Personal Assessment", "Pain Mapping"],
  },
  {
    icon: Activity,
    number: "02",
    title: "Personalized Treatment",
    hinglish: "Aapke liye special plan banayenge",
    description: "Har patient alag hai, toh har treatment plan bhi alag hai. Physiotherapy, Acupuncture, Hijama — jo aapko chahiye, wahi lagayenge.",
    color: "amber",
    features: ["Custom Plan", "Combined Therapies", "Expert Team"],
  },
  {
    icon: PartyPopper,
    number: "03",
    title: "Pain-Free Life",
    hinglish: "Dard se azaadi, zindagi wapas!",
    description: "Treatment ke baad aap wapas woh sab kuch kar paayenge jo dard ne rook rakha tha — bachchon ke saath khelna, kaam karna, aur life enjoy karna.",
    color: "teal",
    features: ["Lasting Relief", "Better Mobility", "Happy Life"],
  },
];

// Floating medical cross positions (predefined to avoid hydration mismatch)
const floatingCrosses = [
  { left: "5%", top: "15%", size: 28, opacity: 0.04, delay: 0, duration: 18 },
  { left: "88%", top: "22%", size: 22, opacity: 0.05, delay: 2, duration: 22 },
  { left: "12%", top: "65%", size: 20, opacity: 0.03, delay: 4, duration: 20 },
  { left: "92%", top: "70%", size: 26, opacity: 0.04, delay: 1, duration: 24 },
  { left: "50%", top: "8%", size: 18, opacity: 0.035, delay: 3, duration: 19 },
  { left: "30%", top: "80%", size: 24, opacity: 0.04, delay: 5, duration: 21 },
  { left: "70%", top: "45%", size: 16, opacity: 0.03, delay: 2.5, duration: 17 },
];

// Diamond marker component for the connecting line
function DiamondMarker({ color }: { color: "teal" | "amber" }) {
  return (
    <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 ${
      color === "teal" ? "bg-teal-400" : "bg-amber-400"
    } shadow-sm`} />
  );
}

export default function TreatmentPlan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 3D tilt state for each card
  const [tiltStyles, setTiltStyles] = useState<
    { rotateX: number; rotateY: number; glareX: number; glareY: number }[]
  >([
    { rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 },
    { rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 },
    { rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 },
  ]);

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, index: number) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      setTiltStyles((prev) => {
        const next = [...prev];
        next[index] = { rotateX, rotateY, glareX, glareY };
        return next;
      });
    },
    []
  );

  const handleMouseLeave = useCallback((index: number) => {
    setHoveredCard(null);
    setTiltStyles((prev) => {
      const next = [...prev];
      next[index] = { rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 };
      return next;
    });
  }, []);

  return (
    <section
      id="plan"
      className="py-20 bg-gradient-to-b from-white via-teal-50/30 to-white relative overflow-hidden"
      ref={ref}
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none section-dots opacity-50" />

      {/* Floating medical cross icons (decorative) */}
      {floatingCrosses.map((cross, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: cross.left, top: cross.top }}
          initial={{ opacity: 0, y: 10 }}
          animate={
            isInView
              ? { opacity: cross.opacity, y: [10, -10, 10] }
              : {}
          }
          transition={{
            opacity: { duration: 1, delay: cross.delay * 0.3 },
            y: {
              duration: cross.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: cross.delay,
            },
          }}
        >
          <Plus
            className="text-teal-700"
            style={{ width: cross.size, height: cross.size, strokeWidth: 2.5 }}
          />
        </motion.div>
      ))}

      {/* Radial gradient glow behind center step card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-amber-200/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <ClipboardCheck className="h-4 w-4" />
            The Plan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Aapka Recovery <span className="text-amber-600">3 Simple Steps</span> Mein
          </h2>
          <p className="mt-3 text-teal-600 max-w-xl mx-auto leading-relaxed">
            Recovery mushkil nahi hai — bas sahi plan chahiye. Dr. Vikas ke saath, aapka raasta clear hai.
          </p>
        </motion.div>

        {/* ─── Animated Step Progress Indicator ─── */}
        <div className="max-w-md mx-auto mb-14">
          <div className="relative flex items-center justify-between">
            {/* Background track */}
            <div className="absolute top-3 left-6 right-6 h-1 bg-teal-100 rounded-full overflow-hidden">
              {/* Animated fill */}
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-teal-400 via-amber-400 to-teal-500"
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
              />
            </div>

            {/* Step dots with labels */}
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col items-center relative z-10">
                <motion.div
                  initial={{ scale: 0, backgroundColor: "#d1d5db" }}
                  animate={
                    isInView
                      ? { scale: 1, backgroundColor: ["#d1d5db", i === 0 ? "#14b8a6" : "#d1d5db"] }
                      : {}
                  }
                  transition={{
                    scale: { duration: 0.4, delay: 0.5 + i * 0.5 },
                    backgroundColor: {
                      duration: 0.5,
                      delay: 0.7 + i * 0.5,
                    },
                  }}
                  className="w-6 h-6 rounded-full border-[3px] border-white shadow-md flex items-center justify-center"
                  style={{
                    backgroundColor:
                      isInView && i === 0
                        ? "#14b8a6"
                        : isInView && i === 1
                        ? "#f59e0b"
                        : isInView && i === 2
                        ? "#14b8a6"
                        : "#d1d5db",
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 + i * 0.5, duration: 0.3 }}
                    className="text-[9px] font-bold text-white"
                  >
                    ✓
                  </motion.span>
                </motion.div>
                <span className="mt-2 text-[10px] sm:text-xs font-medium text-teal-500 tracking-wide">
                  Step {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Steps Cards ─── */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* ─── Enhanced Connecting Line (Desktop) ─── */}
          <div className="hidden md:block absolute top-[88px] left-[22%] right-[22%] h-[3px]">
            {/* Base gradient line */}
            <div className="w-full h-full bg-gradient-to-r from-teal-200 via-amber-200 to-teal-200 rounded-full relative overflow-visible">
              {/* Flowing gradient pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(20,184,166,0.6), rgba(245,158,11,0.6), transparent)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Diamond marker at 1/3 point */}
              <div className="absolute left-[33%] top-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ scale: 0, rotate: 45 }}
                  animate={isInView ? { scale: 1, rotate: 45 } : {}}
                  transition={{ delay: 1, duration: 0.4, type: "spring" }}
                >
                  <DiamondMarker color="teal" />
                </motion.div>
              </div>

              {/* Diamond marker at 2/3 point */}
              <div className="absolute left-[66%] top-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ scale: 0, rotate: 45 }}
                  animate={isInView ? { scale: 1, rotate: 45 } : {}}
                  transition={{ delay: 1.3, duration: 0.4, type: "spring" }}
                >
                  <DiamondMarker color="amber" />
                </motion.div>
              </div>

              {/* Animated flowing dot (kept from original) */}
              <motion.div
                animate={{ left: ["-5%", "105%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50 z-10"
              />
            </div>
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
              style={{ perspective: "800px" }}
            >
              {/* Glow effect behind hovered card */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredCard === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    step.color === "teal"
                      ? "radial-gradient(circle at 50% 50%, rgba(20,184,166,0.15) 0%, transparent 70%)"
                      : "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.15) 0%, transparent 70%)",
                  transform: "scale(1.08)",
                  filter: "blur(8px)",
                }}
              />

              <motion.div
                className="bg-white rounded-3xl border-2 border-teal-100 p-8 text-center relative overflow-hidden cursor-default"
                style={{
                  transformStyle: "preserve-3d",
                  rotateX: tiltStyles[i].rotateX,
                  rotateY: tiltStyles[i].rotateY,
                  transition:
                    hoveredCard === i
                      ? "none"
                      : "transform 0.4s ease-out, border-color 0.3s",
                }}
                animate={{
                  borderColor:
                    hoveredCard === i
                      ? step.color === "teal"
                        ? "#99f6e4"
                        : "#fde68a"
                      : "#ccfbf1",
                }}
              >
                {/* Glare effect on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-3xl"
                  animate={{
                    background: hoveredCard === i
                      ? `radial-gradient(circle at ${tiltStyles[i].glareX}% ${tiltStyles[i].glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
                      : "transparent",
                  }}
                  transition={{ duration: 0.1 }}
                />

                {/* Decorative corner gradient */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 ${
                    step.color === "teal" ? "bg-teal-500" : "bg-amber-500"
                  }`}
                />

                {/* Step Number Circle — lifts on hover */}
                <div className="relative inline-flex mb-6">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${
                      step.color === "teal"
                        ? "bg-gradient-to-br from-teal-500 to-teal-700"
                        : "bg-gradient-to-br from-amber-400 to-amber-600"
                    }`}
                    animate={{
                      y: hoveredCard === i ? -8 : 0,
                      scale: hoveredCard === i ? 1.05 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <step.icon className="h-9 w-9 text-white" />
                  </motion.div>
                  <span
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md breathing-glow ${
                      step.color === "teal"
                        ? "bg-teal-800 text-white"
                        : "bg-amber-700 text-white"
                    }`}
                    style={
                      step.color === "teal"
                        ? { animationDelay: "0.5s" }
                        : { animationDelay: "1.5s" }
                    }
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-teal-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-amber-600 font-medium text-sm mb-3">
                  {step.hinglish}
                </p>
                <p className="text-teal-600 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {step.features.map((feature) => (
                    <span
                      key={feature}
                      className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                        step.color === "teal"
                          ? "bg-teal-50 text-teal-700 border border-teal-100"
                          : "bg-amber-50 text-amber-700 border border-amber-100"
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 text-center"
        >
          <a
            href="https://wa.me/9431757875"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-2xl px-10 h-14 text-base shadow-xl shadow-teal-600/20 hover:shadow-2xl hover:shadow-teal-600/30 transition-all duration-300 btn-hover-scale"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Your Recovery Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </a>
          <p className="mt-4 text-sm text-teal-500">
            Free consultation • No obligation • Immediate response
          </p>

          {/* ─── Success Guarantee Banner ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm"
          >
            <motion.span
              className="text-emerald-600 font-semibold text-sm"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✓
            </motion.span>
            <span className="text-emerald-700 text-sm font-medium">
              {"100% Satisfaction Guarantee —"} <span className="font-semibold text-emerald-800">Agar fark nahi mehsoos hota, pehla session FREE</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
