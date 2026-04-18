"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  CreditCard,
  Smartphone,
  CheckCircle2,
  MessageCircle,
  Wallet,
} from "lucide-react";

const paymentOptions = [
  {
    icon: Shield,
    title: "Cashless Insurance",
    description:
      "Hum major insurance companies ke saath work karte hain. Aapka insurance cover ho sakta hai!",
    color: "teal" as const,
  },
  {
    icon: CreditCard,
    title: "Easy EMI Options",
    description:
      "Treatment ki cost ko monthly installments mein pay karein. No-cost EMI available!",
    color: "amber" as const,
  },
  {
    icon: Smartphone,
    title: "Cash & UPI Payment",
    description:
      "Cash, UPI, debit/credit card — sab accepted hai. Hassle-free payment!",
    color: "teal" as const,
  },
];

const trustPoints = [
  "No hidden charges",
  "Transparent pricing",
  "Free consultation",
  "Receipt for insurance claim",
];

export default function HealthInsurance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="insurance"
      className="py-20 bg-gradient-to-b from-white via-teal-50/20 to-white relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-200 rounded-full blur-[140px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200 rounded-full blur-[140px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge
            variant="secondary"
            className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200 mb-4 px-3 py-1.5 text-sm font-semibold"
          >
            <Wallet className="h-4 w-4" />
            Flexible Payment
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-900">
            Ilaje <span className="text-amber-600">Affordable</span> Hai
          </h2>

          <p className="mt-3 text-teal-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Paisa na aaye raaste mein — hum samajhte hain aur solution dete hain
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left: Payment Option Cards */}
          <div className="space-y-5">
            {paymentOptions.map((option, i) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div
                  className={`rounded-2xl border-2 p-6 transition-all duration-300 ${
                    option.color === "amber"
                      ? "border-amber-200 bg-gradient-to-br from-amber-50/80 to-white hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/10"
                      : "border-teal-200 bg-gradient-to-br from-teal-50/80 to-white hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/10"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon in gradient circle */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[6deg] ${
                        option.color === "amber"
                          ? "bg-gradient-to-br from-amber-400 to-amber-600 text-white"
                          : "bg-gradient-to-br from-teal-400 to-teal-600 text-white"
                      }`}
                    >
                      <option.icon className="h-7 w-7" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-lg font-bold mb-1.5 ${
                          option.color === "amber"
                            ? "text-amber-700"
                            : "text-teal-700"
                        }`}
                      >
                        {option.title}
                      </h3>
                      <p className="text-sm text-teal-600 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Trust-Building Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="glass-card rounded-2xl overflow-hidden shadow-xl relative">
              {/* Amber gradient top bar */}
              <div className="h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" />

              {/* Subtle glow */}
              <div className="absolute -inset-1 rounded-2xl bg-amber-200/20 blur-xl -z-10 pointer-events-none" />

              <div className="p-6 sm:p-8">
                {/* Heading */}
                <h3 className="text-2xl sm:text-3xl font-bold text-teal-900 mb-3 leading-tight">
                  Pehle Treatment, Baad Mein Payment
                </h3>

                {/* Description */}
                <p className="text-teal-600 leading-relaxed mb-6">
                  Hum aapke saath hain — pehle aapka dard theek ho, payment ki
                  tension baad mein. Hum flexible plans offer karte hain.
                </p>

                {/* Green checkmark list */}
                <ul className="space-y-3 mb-8">
                  {trustPoints.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + i * 0.1,
                      }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-teal-800 font-medium text-sm sm:text-base">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/919431757875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl h-12 text-base font-bold shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Payment Options Jaanein
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
