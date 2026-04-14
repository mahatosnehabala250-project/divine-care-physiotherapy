"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "divine-care-cookie-consent";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay so the page loads first, then banner slides up
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem(CONSENT_KEY, "dismissed");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40"
        >
          <div className="backdrop-blur-md bg-white/95 border-t border-teal-100 shadow-2xl rounded-t-2xl">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-1.5 rounded-full text-teal-600/60 hover:text-teal-800 hover:bg-teal-50 transition-colors"
              aria-label="Close cookie consent"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="px-4 py-5 sm:px-6 sm:py-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Left side - Icon + Text */}
                <div className="flex items-start gap-3 flex-1 min-w-0 pr-6 sm:pr-0">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-teal-900">
                        Hum aapki privacy ka samman karte hain 🍪
                      </h3>
                      <Shield className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 hidden sm:block" />
                    </div>
                    <p className="text-xs text-teal-700/70 leading-relaxed">
                      Hum cookies use karte hain aapka experience better banane
                      ke liye. Aapki personal information kabhi share nahi ki
                      jaati.
                    </p>
                  </div>
                </div>

                {/* Right side - Buttons */}
                <div className="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDecline}
                    className="flex-1 sm:flex-none border-teal-200 text-teal-700 hover:bg-teal-50 hover:text-teal-900 hover:border-teal-300 text-xs h-9 px-4"
                  >
                    Abhi Nahi
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleAccept}
                    className="flex-1 sm:flex-none bg-teal-600 hover:bg-teal-700 text-white text-xs h-9 px-4 shadow-md shadow-teal-600/20"
                  >
                    Accept Karein
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
