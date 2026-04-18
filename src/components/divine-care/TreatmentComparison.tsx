"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck, AlertTriangle, TrendingDown, TrendingUp,
  MessageCircle, Phone, CheckCircle2, XCircle, Sparkles
} from "lucide-react";

const comparisons = [
  {
    aspect: "Cost",
    surgery: "₹2-5 Lakh+ (surgery + hospital + rehab)",
    natural: "₹5,000-15,000 (complete treatment plan)",
    winner: "natural" as const,
  },
  {
    aspect: "Recovery Time",
    surgery: "3-6 months + bed rest",
    natural: "2-8 weeks active recovery",
    winner: "natural" as const,
  },
  {
    aspect: "Risk",
    surgery: "Infection, nerve damage, failed surgery",
    natural: "Almost zero — no side effects",
    winner: "natural" as const,
  },
  {
    aspect: "Pain During Treatment",
    surgery: "Severe post-surgery pain",
    natural: "Gentle, comfortable sessions",
    winner: "natural" as const,
  },
  {
    aspect: "Hospital Stay",
    surgery: "3-7 days minimum",
    natural: "No hospital — walk-in sessions",
    winner: "natural" as const,
  },
  {
    aspect: "Success Rate",
    surgery: "60-70% (varies by condition)",
    natural: "90%+ with early treatment",
    winner: "natural" as const,
  },
  {
    aspect: "Recurrence",
    surgery: "30% chance of recurrence",
    natural: "Permanent relief with exercises",
    winner: "natural" as const,
  },
  {
    aspect: "Daily Life Impact",
    surgery: "Weeks of dependency on others",
    natural: "Continue daily activities during treatment",
    winner: "natural" as const,
  },
];

export default function TreatmentComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50/30 to-white relative" ref={ref}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 right-10 w-80 h-80 bg-amber-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-200 rounded-full blur-[120px]" />
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
            <ShieldCheck className="h-4 w-4" />
            Surgery vs Natural Treatment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Surgery <span className="text-red-500">Ya</span> Physiotherapy? — <span className="text-amber-600">Faisla</span> Aapka
          </h2>
          <p className="mt-3 text-teal-600 max-w-2xl mx-auto leading-relaxed">
            90% cases mein surgery ki zarurat NAHI padti. Dekhein kyun natural treatment behter hai — facts ke saath.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          {/* Table Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 gap-0 mb-2"
          >
            <div className="p-4 text-center">
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Aspect</span>
            </div>
            <div className="p-4 text-center bg-red-50 rounded-t-2xl border border-red-100">
              <div className="flex items-center justify-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                <span className="text-sm font-bold text-red-700 uppercase tracking-wider">Surgery</span>
              </div>
            </div>
            <div className="p-4 text-center bg-green-50 rounded-t-2xl border border-green-100">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                <span className="text-sm font-bold text-green-700 uppercase tracking-wider">Natural Treatment</span>
              </div>
            </div>
          </motion.div>

          {/* Rows */}
          {comparisons.map((item, i) => (
            <motion.div
              key={item.aspect}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid grid-cols-3 gap-0 mb-1"
            >
              <div className="p-3 sm:p-4 flex items-center bg-white rounded-l-xl border border-teal-50">
                <span className="text-sm font-semibold text-teal-900">{item.aspect}</span>
              </div>
              <div className={`p-3 sm:p-4 flex items-center gap-2 bg-white border ${
                item.winner === "natural" ? "border-red-50" : "border-teal-50"
              }`}>
                {item.winner === "natural" && <XCircle className="h-4 w-4 text-red-300 flex-shrink-0 hidden sm:block" />}
                <span className="text-xs sm:text-sm text-red-700/80">{item.surgery}</span>
              </div>
              <div className={`p-3 sm:p-4 flex items-center gap-2 bg-white rounded-r-xl border ${
                item.winner === "natural" ? "border-green-100 bg-green-50/30" : "border-teal-50"
              }`}>
                {item.winner === "natural" && <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 hidden sm:block" />}
                <span className="text-xs sm:text-sm text-green-800 font-medium">{item.natural}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="animated-gradient-border p-px rounded-3xl">
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-100 mb-4">
                <TrendingUp className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-teal-900 mb-3">
                Faisla Aapka Hai — <span className="animated-text-gradient">Lakin Facts Bhi Dekhein</span>
              </h3>
              <p className="text-teal-600 max-w-xl mx-auto mb-6 leading-relaxed">
                Dr. Vikas ke paas 500+ patients ka experience hai. Agar unka assessment kehta hai ki surgery zaruri hai, toh woh honestly bataenge. Lekin 90% cases mein — <strong>natural treatment kaam karta hai!</strong>
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://wa.me/919431757875" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-2xl px-8 h-12 shadow-xl shadow-teal-600/20 btn-hover-scale">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Free Mein Consult Karein
                  </Button>
                </a>
                <a href="tel:9431757875">
                  <Button size="lg" variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50 rounded-2xl px-8 h-12 btn-hover-scale">
                    <Phone className="h-5 w-5 mr-2" />
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
