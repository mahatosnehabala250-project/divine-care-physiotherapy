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
  },
  {
    icon: Activity,
    number: "02",
    title: "Personalized Treatment",
    hinglish: "Aapke liye special plan banayenge",
    description: "Har patient alag hai, toh har treatment plan bhi alag hai. Physiotherapy, Acupuncture, Hijama — jo aapko chahiye, wahi lagayenge.",
    color: "amber",
  },
  {
    icon: PartyPopper,
    number: "03",
    title: "Pain-Free Life",
    hinglish: "Dard se azaadi, zindagi wapas!",
    description: "Treatment ke baad aap wapas woh sab kuch kar paayenge jo dard ne rook rakha tha — bachchon ke saath khelna, kaam karna, aur life enjoy karna.",
    color: "teal",
  },
];

export default function TreatmentPlan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="mt-3 text-teal-600 max-w-xl mx-auto">
            Recovery mushkil nahi hai — bas sahi plan chahiye. Dr. Vikas ke saath, aapka raasta clear hai.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-teal-200 via-amber-200 to-teal-200" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative text-center"
            >
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
              <p className="text-teal-600 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
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
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl px-10 h-14 text-base shadow-xl hover:shadow-2xl transition-all">
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Your Recovery Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </a>
          <p className="mt-3 text-sm text-teal-500">Free consultation • No obligation • Immediate response</p>
        </motion.div>
      </div>
    </section>
  );
}
