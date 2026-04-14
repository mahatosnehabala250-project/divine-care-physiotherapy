"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Activity, PartyPopper, ArrowRight, MessageCircle } from "lucide-react";

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

export default function TreatmentPlan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-white via-teal-50/30 to-white relative" ref={ref}>
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none section-dots opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[88px] left-[22%] right-[22%] h-[3px]">
            <div className="w-full h-full bg-gradient-to-r from-teal-300 via-amber-300 to-teal-300 rounded-full" />
            {/* Animated dots on the line */}
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full shadow-lg"
              style={{ left: "0%" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl border-2 border-teal-100 p-8 text-center card-hover-lift hover:border-teal-200">
                {/* Step Number Circle */}
                <div className="relative inline-flex mb-6">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${
                    step.color === "teal"
                      ? "bg-gradient-to-br from-teal-500 to-teal-700"
                      : "bg-gradient-to-br from-amber-400 to-amber-600"
                  }`}>
                    <step.icon className="h-9 w-9 text-white" />
                  </div>
                  <span className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md ${
                    step.color === "teal"
                      ? "bg-teal-800 text-white"
                      : "bg-amber-700 text-white"
                  }`}>
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-teal-900 mb-1">{step.title}</h3>
                <p className="text-amber-600 font-medium text-sm mb-3">{step.hinglish}</p>
                <p className="text-teal-600 text-sm leading-relaxed mb-5">{step.description}</p>

                {/* Feature pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {step.features.map((feature) => (
                    <span key={feature} className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                      step.color === "teal"
                        ? "bg-teal-50 text-teal-700 border border-teal-100"
                        : "bg-amber-50 text-amber-700 border border-amber-100"
                    }`}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
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
          <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-2xl px-10 h-14 text-base shadow-xl shadow-teal-600/20 hover:shadow-2xl hover:shadow-teal-600/30 transition-all duration-300 hover:scale-[1.02]">
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Your Recovery Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </a>
          <p className="mt-4 text-sm text-teal-500">Free consultation • No obligation • Immediate response</p>
        </motion.div>
      </div>
    </section>
  );
}
