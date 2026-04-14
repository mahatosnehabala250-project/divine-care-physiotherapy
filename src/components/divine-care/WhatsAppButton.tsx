"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-teal-800 text-sm font-medium px-4 py-2.5 rounded-xl shadow-lg border border-teal-100 whitespace-nowrap"
          >
            <span className="text-green-500 mr-1">💬</span> Chat on WhatsApp!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse Ring Background */}
      <div className="relative">
        {/* Outer pulse ring */}
        <span className="absolute inset-0 w-14 h-14 rounded-full bg-green-400/30 animate-ping" style={{ animationDuration: '2s' }} />
        {/* Inner pulse ring */}
        <span className="absolute inset-0 w-14 h-14 rounded-full bg-green-400/20 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />

        <a
          href="https://wa.me/9431757875"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-green-500/40"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
}
