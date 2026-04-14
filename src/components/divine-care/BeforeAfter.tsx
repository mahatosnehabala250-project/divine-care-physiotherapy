"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const results = [
  {
    condition: "Knee Pain",
    before: "Ghutne ka dard, seedhi chadna mushkil, chalna limited",
    after: "6 sessions mein pain-free, seedhi chad sakte hain, normal walk",
  },
  {
    condition: "Back Pain",
    before: "3 saal se chronic pain, neend nahi aati, jhukna mushkil",
    after: "4 sessions mein relief, poori neend, normal movement",
  },
  {
    condition: "Neck Pain",
    before: "Gardan mein stiffness, sir ghoomna, poora din pareshan",
    after: "3 sessions mein flexibility wapas, no more dizziness",
  },
  {
    condition: "Stroke Rehab",
    before: "Aadha body paralyzed, dependent on others",
    after: "3 months mein walking independently, self-care possible",
  },
];

export default function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="results"
      className="py-20 bg-gradient-to-b from-white to-teal-50/30"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <TrendingUp className="h-4 w-4" />
            TREATMENT RESULTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Before &amp; After — Real{" "}
            <span className="text-amber-600">Results</span>
          </h2>
          <p className="mt-3 text-teal-600 max-w-2xl mx-auto leading-relaxed">
            Dekhein kaise Dr. Vikas ke treatment se patients ki zindagi badli —
            numbers bolte hain.
          </p>
        </motion.div>

        {/* Result Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item, i) => (
            <motion.div
              key={item.condition}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-hover-lift"
            >
              <div className="rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                {/* Badge */}
                <div className="px-5 pt-5">
                  <Badge className="bg-teal-100 text-teal-700 border-teal-200 text-xs font-semibold shadow-sm">
                    {item.condition}
                  </Badge>
                </div>

                {/* Before Section */}
                <div className="px-5 pt-4 pb-3">
                  <div className="bg-rose-50 border-l-4 border-rose-300 rounded-lg p-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
                      Before
                    </p>
                    <p className="text-sm text-rose-700 leading-relaxed">
                      {item.before}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center py-1">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="h-6 w-6 text-teal-500 rotate-90" />
                  </motion.div>
                </div>

                {/* After Section */}
                <div className="px-5 pt-1 pb-5">
                  <div className="bg-emerald-50 border-l-4 border-emerald-400 rounded-lg p-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
                      After
                    </p>
                    <p className="text-sm text-emerald-700 leading-relaxed">
                      {item.after}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14"
        >
          <div className="bg-gradient-to-r from-teal-800 to-teal-700 rounded-2xl p-8 sm:p-10 text-center shadow-xl relative overflow-hidden">
            {/* Decorative pattern */}
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
                Kya aap bhi aise results chahte hain?
              </h3>
              <p className="text-teal-200 mb-6 max-w-lg mx-auto">
                Aaj hi free consultation lein aur apni pain-free zindagi ki
                shuruwat karein.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/9431757875"
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
