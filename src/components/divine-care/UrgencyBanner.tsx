"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, MessageCircle, Clock } from "lucide-react";

export default function UrgencyBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 py-4 sm:py-5 relative">
        {/* Animated background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'
          }} />
          {/* Subtle moving glow */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white text-center">
            <div className="flex items-center gap-2.5">
              <motion.span
                animate={{ scale: [1, 1.3, 1], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex"
              >
                <AlertTriangle className="h-5 w-5 text-amber-300 drop-shadow-sm" />
              </motion.span>
              <div className="flex items-center gap-2">
                <p className="font-bold text-sm sm:text-base">
                  <span className="text-amber-200">Warning:</span> Har din ka delay aapka dard badhata hai!
                </p>
                <span className="hidden sm:inline-flex items-center gap-1 text-amber-200 text-xs bg-white/10 px-2 py-0.5 rounded-full">
                  <Clock className="h-3 w-3" />
                  Limited Slots
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <a href="tel:9431757875">
                <Button size="sm" className="bg-white text-rose-700 hover:bg-rose-50 font-bold rounded-xl h-9 shadow-lg border-0 hover:scale-105 transition-all">
                  <Phone className="h-3.5 w-3.5 mr-1.5" />
                  Call: 9431757875
                </Button>
              </a>
              <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl h-9 shadow-lg border-0 hover:scale-105 transition-all">
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
