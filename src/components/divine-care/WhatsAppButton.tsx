"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white text-teal-800 text-sm font-medium px-4 py-2 rounded-xl shadow-lg border border-teal-100 whitespace-nowrap animate-fade-in">
          💬 Chat on WhatsApp!
        </div>
      )}
      <a
        href="https://wa.me/9431757875"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center whatsapp-pulse transition-all duration-200 hover:scale-110"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
