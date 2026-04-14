"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, MessageCircle } from "lucide-react";

export default function UrgencyBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="shimmer-bg py-4 sm:py-5">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white text-center">
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-flex"
              >
                <AlertTriangle className="h-5 w-5 text-amber-300" />
              </motion.span>
              <p className="font-semibold text-sm sm:text-base">
                <span className="text-amber-200">Warning:</span> Har din ka delay aapka dard badhata hai!
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <a href="tel:9431757875">
                <Button size="sm" className="bg-white text-teal-800 hover:bg-teal-50 font-bold rounded-xl h-9 shadow-lg">
                  <Phone className="h-3.5 w-3.5 mr-1.5" />
                  Call: 9431757875
                </Button>
              </a>
              <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl h-9 shadow-lg">
                  <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
