"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  CheckCircle2,
  Star,
  Crown,
  Heart,
  ArrowRight,
  MessageCircle,
  Phone,
  ChevronDown,
  X,
} from "lucide-react";

interface PackageFeature {
  text: string;
  highlighted?: boolean;
}

interface PackageTier {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: PackageFeature[];
  highlight: boolean;
  premium: boolean;
  cta: string;
  icon: typeof Star;
  accentColor: string;
  badgeText?: string;
}

const tiers: PackageTier[] = [
  {
    name: "Basic Relief",
    price: "₹499",
    period: "/session",
    tagline: "Shuru karein, dard se chhutkaara paayein",
    features: [
      { text: "Initial Consultation Free" },
      { text: "Single Session Treatment" },
      { text: "Pain Assessment" },
      { text: "Basic Physiotherapy" },
      { text: "1 Follow-up Session Free", highlighted: true },
    ],
    highlight: false,
    premium: false,
    cta: "Consult Free",
    icon: Heart,
    accentColor: "teal",
    badgeText: undefined,
  },
  {
    name: "Complete Recovery",
    price: "₹2,499",
    period: "/week",
    tagline: "Complete recovery plan — poora dard khatam",
    features: [
      { text: "Detailed Assessment & Plan" },
      { text: "5 Sessions/Week" },
      { text: "Physiotherapy + Acupuncture", highlighted: true },
      { text: "Personalized Exercise Plan" },
      { text: "Weekly Progress Review" },
      { text: "Free Hijama Session", highlighted: true },
      { text: "WhatsApp Support" },
    ],
    highlight: true,
    premium: false,
    cta: "Start Recovery",
    icon: Star,
    accentColor: "amber",
    badgeText: "Most Popular",
  },
  {
    name: "Premium Care",
    price: "₹7,999",
    period: "/month",
    tagline: "Full recovery package — koi compromise nahi",
    features: [
      { text: "Comprehensive Assessment" },
      { text: "Unlimited Sessions", highlighted: true },
      { text: "All Treatments Included (Physio + Acupuncture + Hijama)", highlighted: true },
      { text: "Personal Diet & Exercise Plan" },
      { text: "Daily Progress Tracking" },
      { text: "Priority Appointment" },
      { text: "Emergency Support 24/7", highlighted: true },
      { text: "Family Discount" },
    ],
    highlight: false,
    premium: true,
    cta: "Get Premium",
    icon: Crown,
    accentColor: "teal",
    badgeText: undefined,
  },
];

/* ---- Comparison table data ---- */
const comparisonFeatures = [
  { label: "Consultation", basic: "Free (Initial Only)", complete: "Detailed Assessment", premium: "Comprehensive Assessment" },
  { label: "Sessions", basic: "1 per visit", complete: "5 per week", premium: "Unlimited" },
  { label: "Physiotherapy", basic: "✓", complete: "✓", premium: "✓" },
  { label: "Acupuncture", basic: "—", complete: "✓", premium: "✓" },
  { label: "Hijama (Cupping)", basic: "—", complete: "1 Free Session", premium: "Included" },
  { label: "Exercise Plan", basic: "Basic", complete: "Personalized", premium: "Diet + Exercise" },
  { label: "Progress Tracking", basic: "—", complete: "Weekly Review", premium: "Daily Tracking" },
  { label: "WhatsApp Support", basic: "—", complete: "✓", premium: "✓" },
  { label: "Priority Appointment", basic: "—", complete: "—", premium: "✓" },
  { label: "Emergency 24/7", basic: "—", complete: "—", premium: "✓" },
  { label: "Family Discount", basic: "—", complete: "—", premium: "✓" },
  { label: "Follow-up Sessions", basic: "1 Free", complete: "Included", premium: "Included" },
];

export default function TreatmentPackages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section
      id="packages"
      className="py-20 bg-gradient-to-b from-white via-teal-50/30 to-white relative"
      ref={ref}
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-[140px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-[140px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
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
            <Sparkles className="h-4 w-4" />
            Transparent Pricing
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-900">
            Treatment <span className="text-amber-600">Packages</span>
          </h2>

          <p className="mt-3 text-teal-600 max-w-xl mx-auto leading-relaxed text-lg">
            Affordable pricing — kyunki health sabka adhikaar hai
          </p>
        </motion.div>

        {/* ── Pricing Cards ── */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative ${tier.highlight ? "md:scale-105 z-10" : ""}`}
            >
              {/* Amber gradient border wrapper for highlighted card */}
              {tier.highlight && (
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 opacity-90 z-0" />
              )}

              {/* Premium subtle border for premium card */}
              {tier.premium && (
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-teal-300 via-amber-300 to-teal-400 opacity-40 z-0" />
              )}

              <div
                className={`relative z-10 h-full rounded-2xl overflow-hidden transition-all duration-300 ${
                  tier.highlight
                    ? "bg-white shadow-2xl shadow-amber-500/20"
                    : tier.premium
                    ? "glass-card shadow-xl"
                    : "glass-card shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Most Popular badge */}
                {tier.badgeText && (
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-2 text-sm font-bold tracking-wide">
                    <span className="inline-flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-current" />
                      {tier.badgeText}
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md ${
                      tier.highlight
                        ? "bg-gradient-to-br from-amber-400 to-amber-600 text-white"
                        : tier.premium
                        ? "bg-gradient-to-br from-teal-500 to-teal-700 text-white"
                        : "bg-teal-100 text-teal-600"
                    }`}
                  >
                    <tier.icon className="h-7 w-7" />
                  </div>

                  {/* Tier Name */}
                  <h3 className="text-xl font-bold text-teal-900 mb-1">
                    {tier.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-teal-500 mb-5 leading-relaxed">
                    {tier.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-teal-600">
                      {tier.price}
                    </span>
                    <span className="text-teal-500 text-base ml-1">
                      {tier.period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li
                        key={feature.text}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2
                          className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                            feature.highlighted
                              ? "text-amber-500"
                              : "text-teal-500"
                          }`}
                        />
                        <span
                          className={`text-sm leading-snug ${
                            feature.highlighted
                              ? "text-teal-900 font-semibold"
                              : "text-teal-700"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
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
                      className={`w-full rounded-xl h-12 text-base font-bold shadow-lg transition-all duration-300 btn-hover-scale ${
                        tier.highlight
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 glow-cta"
                          : tier.premium
                          ? "bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/30 glow-cta"
                          : "bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-50 hover:border-teal-600"
                      }`}
                    >
                      {tier.cta}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Glow effect behind the highlighted card */}
              {tier.highlight && (
                <div className="absolute -inset-4 rounded-3xl bg-amber-400/10 blur-2xl -z-10 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Disclaimer Note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-teal-500 mt-8 leading-relaxed"
        >
          {"* Prices may vary based on condition."} <span className="font-semibold text-teal-600">Pehli consultation FREE hai.</span>
        </motion.p>

        {/* ── Compare Plans Toggle ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <Button
            variant="outline"
            onClick={() => setShowComparison((prev) => !prev)}
            className="border-teal-300 text-teal-600 hover:bg-teal-50 hover:border-teal-400 rounded-xl px-6 btn-hover-scale transition-all duration-300"
          >
            {showComparison ? (
              <>
                <X className="h-4 w-4 mr-2" />
                Hide Comparison
              </>
            ) : (
              <>
                <ChevronDown
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    showComparison ? "rotate-180" : ""
                  }`}
                />
                Compare Plans
              </>
            )}
          </Button>
        </motion.div>

        {/* ── Comparison Table ── */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden mt-8"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-teal-100 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    {/* Table Head */}
                    <thead>
                      <tr className="bg-gradient-to-r from-teal-50 to-amber-50 border-b border-teal-100">
                        <th className="text-left py-4 px-4 sm:px-6 font-bold text-teal-800 min-w-[160px]">
                          Feature
                        </th>
                        <th className="text-center py-4 px-3 sm:px-5 font-bold text-teal-800 min-w-[120px]">
                          Basic Relief
                        </th>
                        <th className="text-center py-4 px-3 sm:px-5 font-bold text-amber-700 min-w-[140px] bg-amber-50/50">
                          <span className="inline-flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                            Complete Recovery
                          </span>
                        </th>
                        <th className="text-center py-4 px-3 sm:px-5 font-bold text-teal-800 min-w-[120px]">
                          Premium Care
                        </th>
                      </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                      {comparisonFeatures.map((row, idx) => (
                        <tr
                          key={row.label}
                          className={`border-b border-teal-50 transition-colors hover:bg-teal-50/40 ${
                            idx % 2 === 0 ? "bg-white" : "bg-teal-50/20"
                          }`}
                        >
                          <td className="py-3 px-4 sm:px-6 font-medium text-teal-800">
                            {row.label}
                          </td>
                          <td className="py-3 px-3 sm:px-5 text-center text-teal-600">
                            {row.basic}
                          </td>
                          <td className="py-3 px-3 sm:px-5 text-center text-teal-700 font-medium bg-amber-50/30">
                            {row.complete}
                          </td>
                          <td className="py-3 px-3 sm:px-5 text-center text-teal-600">
                            {row.premium}
                          </td>
                        </tr>
                      ))}
                      {/* Pricing row */}
                      <tr className="bg-gradient-to-r from-teal-50 to-amber-50">
                        <td className="py-4 px-4 sm:px-6 font-bold text-teal-800">
                          Price
                        </td>
                        <td className="py-4 px-3 sm:px-5 text-center font-extrabold text-teal-600">
                          ₹499<span className="font-normal text-teal-400">/session</span>
                        </td>
                        <td className="py-4 px-3 sm:px-5 text-center font-extrabold text-amber-600 bg-amber-50/50">
                          ₹2,499<span className="font-normal text-amber-400">/week</span>
                        </td>
                        <td className="py-4 px-3 sm:px-5 text-center font-extrabold text-teal-600">
                          ₹7,999<span className="font-normal text-teal-400">/month</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/919431757875"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-2xl px-8 h-14 text-base shadow-xl shadow-teal-600/20 hover:shadow-2xl hover:shadow-teal-600/30 transition-all duration-300 btn-hover-scale"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Book on WhatsApp
              </Button>
            </a>
            <a href="tel:9431757875">
              <Button
                variant="outline"
                size="lg"
                className="border-teal-300 text-teal-600 hover:bg-teal-50 rounded-2xl px-8 h-14 text-base transition-all duration-300 btn-hover-scale"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-teal-500">
            Free consultation &bull; No obligation &bull; Immediate response
          </p>
        </motion.div>
      </div>
    </section>
  );
}
