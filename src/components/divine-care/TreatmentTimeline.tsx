"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Calendar, Stethoscope, Activity, Heart, Star,
  Phone, MessageCircle, ArrowRight, Clock
} from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: 1,
    title: "Pehli Mulaqaat",
    subtitle: "First Visit",
    description:
      "Aap clinic aate hain, Dr. Vikas personally aapka assessment karte hain. Pain history, movement test, aur detailed examination — sab FREE!",
    duration: "30-45 min",
    color: "teal" as const,
  },
  {
    icon: Stethoscope,
    number: 2,
    title: "Diagnosis & Plan",
    subtitle: "Personalized Plan",
    description:
      "Exact problem identify hoti hai. Personalized treatment plan banta hai — Physiotherapy, Acupuncture, Hijama mein se jo aapko chahiye.",
    duration: "Same day",
    color: "amber" as const,
  },
  {
    icon: Activity,
    number: 3,
    title: "Treatment Shuru",
    subtitle: "Healing Begins",
    description:
      "Pehla session mein hi relief mehsoos hota hai. Har session 30-45 minute ka hota hai. Gentle, pain-free treatment.",
    duration: "30-45 min/session",
    color: "teal" as const,
  },
  {
    icon: Heart,
    number: 4,
    title: "Progress & Recovery",
    subtitle: "Getting Better",
    description:
      "Har session ke baad improvement dikhta hai. Dr. Vikas regularly progress monitor karte hain aur plan adjust karte hain.",
    duration: "2-8 weeks",
    color: "amber" as const,
  },
  {
    icon: Star,
    number: 5,
    title: "Pain-Free Zindagi",
    subtitle: "Freedom!",
    description:
      "Dard se azaadi! Wapas woh sab kuch jo dard ne roka tha — bachchon ke saath khelna, kaam karna, life enjoy karna.",
    duration: "Lifetime",
    color: "teal" as const,
  },
];

const colorStyles = {
  teal: {
    circle: "bg-gradient-to-br from-teal-500 to-teal-700",
    line: "bg-teal-400",
    badge: "bg-teal-50 text-teal-700 border-teal-200",
    glow: "shadow-teal-500/20",
    ring: "ring-teal-200",
  },
  amber: {
    circle: "bg-gradient-to-br from-amber-400 to-amber-600",
    line: "bg-amber-400",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    glow: "shadow-amber-500/20",
    ring: "ring-amber-200",
  },
};

export default function TreatmentTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="treatment-timeline"
      className="py-20 bg-gradient-to-b from-white to-teal-50/30 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <Activity className="h-4 w-4" />
            YOUR TREATMENT JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            {"Aapki Recovery Ka Raasta —"} <span className="text-amber-600">Step by Step</span>
          </h2>
          <p className="mt-3 text-teal-600 max-w-2xl mx-auto leading-relaxed">
            Dr. Vikas ke saath aapka har step clear hai — koi surprise nahi, koi
            confusion nahi. Dekhein kaise aapki recovery hoti hai.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          {/* Connecting Line */}
          <div className="relative max-w-5xl mx-auto mb-4">
            <div className="absolute top-10 left-[10%] right-[10%] h-1 bg-gradient-to-r from-teal-200 via-amber-200 to-teal-200 rounded-full overflow-hidden">
              <motion.div
                animate={{ left: ["-5%", "105%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto">
            {steps.map((step, i) => {
              const styles = colorStyles[step.color];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center card-hover-lift"
                >
                  {/* Circle */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-20 h-20 rounded-2xl ${styles.circle} flex items-center justify-center shadow-xl ${styles.glow} ring-4 ${styles.ring} transition-transform duration-300 hover:scale-110`}
                    >
                      <step.icon className="h-9 w-9 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <span className="text-2xl font-black text-teal-300/50">
                        {String(step.number).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-bold text-teal-900 text-base mb-0.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-teal-500 font-medium mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-teal-600 leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${styles.badge}`}
                    >
                      <Clock className="h-3 w-3" />
                      {step.duration}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden max-w-lg mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-300 via-amber-300 to-teal-300" />

            <div className="space-y-6">
              {steps.map((step, i) => {
                const styles = colorStyles[step.color];
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex gap-4 relative"
                  >
                    {/* Circle on line */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl ${styles.circle} flex items-center justify-center shadow-lg z-10`}
                    >
                      <step.icon className="h-5 w-5 text-white" />
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-teal-900">
                          {step.title}
                        </h3>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${styles.badge}`}
                        >
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-xs text-teal-500 font-medium mb-1.5">
                        {step.subtitle}
                      </p>
                      <p className="text-sm text-teal-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-teal-800 to-teal-700 rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto shadow-xl relative overflow-hidden">
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
                Aapka first step — aaj hi lein!
              </h3>
              <p className="text-teal-200 mb-6 max-w-md mx-auto">
                Free consultation se shuruwat karein. Koi obligation nahi, koi
                pressure nahi.
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
