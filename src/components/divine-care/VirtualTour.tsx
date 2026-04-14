"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Building2, Bed, Stethoscope, Sparkles, Heart,
  ChevronLeft, ChevronRight, MessageCircle, Phone,
  ShieldCheck, Thermometer, Pill, Activity
} from "lucide-react";

const areas = [
  {
    title: "Reception & Waiting Area",
    hinglish: "Aapka swagat yahan se hota hai",
    description: "Comfortable, clean, aur welcoming reception area. Aapko wait nahi karna padega — appointments pehle se scheduled hain.",
    icon: Building2,
    color: "teal",
    features: ["AC Waiting Area", "Comfortable Seating", "Water & Magazines"],
  },
  {
    title: "Treatment Rooms",
    hinglish: "Yahan healing hoti hai",
    description: "Private, well-equipped treatment rooms jahan Dr. Vikas personally aapka treatment karte hain. Complete privacy aur comfort ensured.",
    icon: Bed,
    color: "amber",
    features: ["Private Rooms", "Modern Equipment", "Hygiene Maintained"],
  },
  {
    title: "Physiotherapy Unit",
    hinglish: "Latest instruments aur techniques",
    description: "State-of-the-art physiotherapy equipment — ultrasound, TENS, laser therapy, aur manual therapy — sab international standards ke according.",
    icon: Activity,
    color: "teal",
    features: ["Ultrasound Therapy", "TENS Unit", "Laser Treatment"],
  },
  {
    title: "Acupuncture Room",
    hinglish: "Ancient wisdom + modern science",
    description: "Specialized acupuncture room with sterile, disposable needles. WHO-approved techniques for pain relief aur healing.",
    icon: Stethoscope,
    color: "amber",
    features: ["Sterile Needles", "WHO Standards", "Pain-Free Sessions"],
  },
  {
    title: "Hijama (Cupping) Area",
    hinglish: "Unique in Jamshedpur",
    description: "Jamshedpur mein yeh unique facility sirf Divine Care mein hai. International standard instruments aur trained practitioners.",
    icon: Heart,
    color: "teal",
    features: ["Sunnah Therapy", "Trained Practitioners", "Detox & Pain Relief"],
  },
];

export default function VirtualTour() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const activeArea = areas[activeIndex];

  return (
    <section
      id="virtual-tour"
      className="py-20 bg-gradient-to-b from-white via-teal-50/20 to-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl" />
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
            <Building2 className="h-4 w-4" />
            CLINIC VIRTUAL TOUR
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Apni Aankhon Se <span className="text-amber-600">Dekhein</span>
          </h2>
          <p className="mt-3 text-teal-600 max-w-2xl mx-auto leading-relaxed">
            Hamare clinic ka har corner international standards ke according designed hai. Dekhein kya kya facilities hain.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Area Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="space-y-3">
              {areas.map((area, i) => {
                const isActive = activeIndex === i;
                const AreaIcon = area.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-full text-left rounded-2xl p-4 transition-all duration-300 flex items-center gap-4 ${
                      isActive
                        ? `bg-gradient-to-r ${area.color === "teal" ? "from-teal-600 to-teal-700" : "from-amber-500 to-amber-600"} text-white shadow-lg`
                        : "bg-white border border-teal-100 hover:border-teal-300 hover:shadow-md text-teal-800"
                    }`}
                  >
                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
                      isActive ? "bg-white/20" : area.color === "teal" ? "bg-teal-100" : "bg-amber-100"
                    }`}>
                      <AreaIcon className={`h-5 w-5 ${isActive ? "text-white" : area.color === "teal" ? "text-teal-600" : "text-amber-600"}`} />
                    </div>
                    <div>
                      <p className={`font-semibold text-sm ${isActive ? "text-white" : "text-teal-900"}`}>{area.title}</p>
                      <p className={`text-xs ${isActive ? "text-white/80" : "text-teal-500"}`}>{area.hinglish}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Active Area Detail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl border border-teal-100 shadow-lg overflow-hidden">
              {/* Image area */}
              <div className="relative h-56 sm:h-72 bg-gradient-to-br from-teal-100 to-amber-50 flex items-center justify-center">
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-3xl mx-auto mb-4 flex items-center justify-center ${
                    activeArea.color === "teal" ? "bg-teal-500/20" : "bg-amber-500/20"
                  }`}>
                    <activeArea.icon className={`h-10 w-10 ${activeArea.color === "teal" ? "text-teal-600" : "text-amber-600"}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-teal-900">{activeArea.title}</h3>
                  <p className="text-teal-500 text-sm mt-1">{activeArea.hinglish}</p>
                </div>
                {/* Navigation arrows */}
                <button
                  onClick={() => setActiveIndex((prev) => (prev - 1 + areas.length) % areas.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-teal-600 hover:bg-white hover:scale-110 transition-all"
                  aria-label="Previous area"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev + 1) % areas.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-teal-600 hover:bg-white hover:scale-110 transition-all"
                  aria-label="Next area"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8">
                <p className="text-teal-700 leading-relaxed mb-6">{activeArea.description}</p>

                {/* Features */}
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {activeArea.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 bg-teal-50 rounded-xl p-3 border border-teal-100">
                      <ShieldCheck className="h-4 w-4 text-teal-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-teal-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Dots indicator */}
                <div className="flex items-center justify-center gap-2">
                  {areas.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`transition-all duration-300 rounded-full ${
                        i === activeIndex
                          ? "w-8 h-2.5 bg-teal-500"
                          : "w-2.5 h-2.5 bg-teal-200 hover:bg-teal-300"
                      }`}
                      aria-label={`Go to area ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-teal-600 mb-4">Clinic dekh kar aapko aur confidence hoga!</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl shadow-lg btn-hover-scale">
                <MessageCircle className="h-4 w-4 mr-2" />
                Visit Karne Ka Time Lein
              </Button>
            </a>
            <a href="tel:9431757875">
              <Button variant="outline" className="border-teal-300 text-teal-700 rounded-xl btn-hover-scale">
                <Phone className="h-4 w-4 mr-2" />
                Call: 9431757875
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
