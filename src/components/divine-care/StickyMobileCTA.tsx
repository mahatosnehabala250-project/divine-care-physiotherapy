"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-teal-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] fade-in-up safe-area-bottom">
      <div className="flex items-center gap-3 p-3">
        <a
          href="tel:9431757875"
          className="flex-1 flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl transition-colors shadow-md"
        >
          <Phone className="h-4 w-4" />
          <span className="text-sm">Call Now</span>
        </a>
        <a
          href="https://wa.me/9431757875"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors shadow-md"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="text-sm">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
