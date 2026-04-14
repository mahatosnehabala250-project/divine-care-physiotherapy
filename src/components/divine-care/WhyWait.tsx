"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle, ArrowRight, MessageCircle, Phone,
  Clock, TrendingDown, CalendarX
} from "lucide-react";

export default function WhyWait() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-amber-900" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />
      {/* Animated decorative orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [-50, 50, -50], y: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-72 h-72 bg-red-600/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [30, -30, 30], y: [20, -30, 20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-amber-600/15 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Warning icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400/30 mb-6"
          >
            <AlertTriangle className="h-8 w-8 text-amber-400" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-shadow-hero">
            Ab Aur <span className="animated-text-gradient">Intzaar</span> Kyun?
          </h2>

          <p className="text-amber-100/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Har din aap dard sah rahe hain, har din condition worse ho rahi hai. Kya aap apni zindagi dard mein bitana chahte hain — ya aaj hi action lena chahenge?
          </p>

          {/* Cost of Waiting Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                icon: Clock,
                stat: "Har Din",
                text: "Dard badhta hai — chronic conditions 3x worse hoti hain bina treatment ke",
              },
              {
                icon: TrendingDown,
                stat: "30% More",
                text: "Har mahine delay se recovery time aur cost dono badhte hain",
              },
              {
                icon: CalendarX,
                stat: "6 Mahine+",
                text: "Chronic pain patients average 6 mahine tak wait karte hain — itna mat wait karein!",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center"
              >
                <item.icon className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white mb-1">{item.stat}</p>
                <p className="text-amber-100/60 text-xs leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-teal-900 font-bold rounded-2xl px-8 h-14 text-base shadow-xl shadow-amber-500/25 btn-hover-scale">
                <MessageCircle className="h-5 w-5 mr-2" />
                Aaj Hi Appointment Book Karein
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </a>
            <a href="tel:9431757875">
              <Button size="lg" className="bg-white/15 hover:bg-white/25 text-white border-2 border-white/40 hover:border-white/60 rounded-2xl px-8 h-14 backdrop-blur-sm btn-hover-scale font-bold shadow-lg">
                <Phone className="h-5 w-5 mr-2" />
                Call: 9431757875
              </Button>
            </a>
          </div>
          <p className="mt-4 text-amber-200/50 text-xs">Free consultation • No obligation • Same day appointment available</p>
        </motion.div>
      </div>
    </section>
  );
}
