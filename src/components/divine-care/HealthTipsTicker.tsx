"use client";

import { Sparkles, Heart, Shield, Zap, Leaf } from "lucide-react";

const tips = [
  { icon: Heart, text: "Har 30 minute mein ek baar uthein aur stretch karein — back pain se bachaav", color: "text-rose-500" },
  { icon: Shield, text: "90% back pain cases mein surgery zaruri NAHI hoti — try physiotherapy first!", color: "text-teal-500" },
  { icon: Zap, text: "Acupuncture se body ke natural painkillers (endorphins) release hote hain", color: "text-amber-500" },
  { icon: Leaf, text: "Hijama se blood circulation improve aur toxins naturally remove hote hain", color: "text-green-500" },
  { icon: Sparkles, text: "Pehli consultation FREE hai at Divine Care — aaj hi appointment book karein!", color: "text-teal-600" },
  { icon: Heart, text: "Ghutne ka dard? Quad strengthening exercises se 70% relief milta hai", color: "text-rose-500" },
  { icon: Shield, text: "Stroke recovery possible hai — early rehabilitation se results best milte hain", color: "text-teal-500" },
  { icon: Zap, text: "Neck pain ke liye posture correction sabse effective treatment hai", color: "text-amber-500" },
];

export default function HealthTipsTicker() {
  return (
    <div className="bg-gradient-to-r from-teal-50 to-amber-50 border-y border-teal-100 py-3 overflow-hidden w-full">
      <div className="flex items-center">
        {/* Static label */}
        <div className="flex-shrink-0 flex items-center gap-2 px-4 bg-teal-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 rounded-r-full z-10">
          <Sparkles className="h-3.5 w-3.5" />
          Health Tips
        </div>

        {/* Scrolling content */}
        <div className="overflow-hidden flex-1 relative">
          <div className="flex animate-marquee whitespace-nowrap [media(prefers-reduced-motion:reduce)]:animate-none">
            {[...tips, ...tips].map((tip, i) => (
              <div key={i} className="inline-flex items-center gap-2 mx-8 text-sm text-teal-700">
                <tip.icon className={`h-4 w-4 flex-shrink-0 ${tip.color}`} />
                <span className="font-medium">{tip.text}</span>
                <span className="text-teal-300 mx-4">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
