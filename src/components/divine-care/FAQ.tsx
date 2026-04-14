"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle, MessageCircle, Phone, CheckCircle2,
  ChevronDown, ThumbsUp, Clock, ShieldCheck
} from "lucide-react";

const faqs = [
  {
    question: "Kya treatment mein dard hota hai?",
    answer: "Nahi! Hamare treatments gentle aur pain-free hain. Acupuncture mein bahut patli needles hoti hain jo almost dard nahi deti. Physiotherapy aur Hijama bhi comfortable hain. Pehle session mein thoda discomfort ho sakta hai, lekin gradually aapko relief mehsoos hoga.",
    icon: ThumbsUp,
    color: "emerald",
  },
  {
    question: "Kitne sessions mein fark dikhta hai?",
    answer: "Acute pain mein 2-3 sessions mein major relief milta hai. Chronic conditions jaise arthritis ya slip disc mein 8-12 sessions chahiye. Dr. Vikas personally aapka assessment karke exact number batayenge. Har case alag hai, lekin 90% patients ko 3 sessions mein fark lagta hai.",
    icon: Clock,
    color: "amber",
  },
  {
    question: "Kya surgery zaruri hai? Ya physiotherapy se theek ho sakta hai?",
    answer: "90% cases mein surgery ki zarurat NAHI padti! Physiotherapy, Acupuncture aur Hijama se naturally heal hota hai. Dr. Vikas ka aim hai ki aapko surgery se bachaya jaaye. Lekin agar surgery zaruri hai (jaise severe disc herniation), toh hum aapko honestly bataenge.",
    icon: ShieldCheck,
    color: "teal",
  },
  {
    question: "Hijama (Cupping) kya hai? Kya yeh safe hai?",
    answer: "Hijama ek Sunnah aur scientifically proven therapy hai. Isme special cups se skin pe vacuum create kiya jaata hai, jo blood circulation improve karta hai, toxins remove karta hai, aur pain relieve karta hai. Yeh 100% safe hai — hamare clinic mein international standard instruments use hote hain. Jamshedpur mein yeh unique facility sirf Divine Care mein hai.",
    icon: ShieldCheck,
    color: "emerald",
  },
  {
    question: "Acupuncture se kya fayda hota hai?",
    answer: "Acupuncture se body ke natural painkillers (endorphins) release hote hain, inflammation kam hota hai, blood circulation improve hota hai, aur nervous system calm hota hai. Yeh bina kisi dawaai ke kaam karta hai — toh koi side effects nahi hain. WHO (World Health Organization) ne bhi acupuncture ko recognize kiya hai 100+ conditions ke liye.",
    icon: ThumbsUp,
    color: "teal",
  },
  {
    question: "Treatment ka kya kharcha hai?",
    answer: "Humara aim hai ki best treatment affordable rates mein mile. Har patient ka plan alag hota hai, toh exact cost assessment ke baad bataaya jaata hai. Pehli consultation FREE hai! Call karein ya WhatsApp karein — hum aapko transparent pricing batayenge.",
    icon: Clock,
    color: "amber",
  },
  {
    question: "Kya aap stroke rehabilitation bhi karte hain?",
    answer: "Haan! Stroke rehab hamari specialty hai. Dr. Vikas ke team mein neurological rehabilitation ke experts hain. Motor re-learning, gait training, balance therapy, aur FES (Functional Electrical Stimulation) se stroke patients ki recovery hoti hai. Recovery slow hai lekin SURE hai — hum aapke saath har step pe hain.",
    icon: ShieldCheck,
    color: "teal",
  },
  {
    question: "Appointment kaise lein? Kya walk-in allowed hai?",
    answer: "Aap WhatsApp pe message karein (9431757875), call karein, ya website pe form fill karein. Walk-in bhi welcome hain, lekin appointment leke aane se aapka wait nahi hoga. Hum Mon-Sat, 9AM-8PM open hain. Emergency mein kabhi bhi call karein!",
    icon: Clock,
    color: "emerald",
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; iconText: string; border: string; hoverBorder: string }> = {
  emerald: {
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    border: "border-emerald-200",
    hoverBorder: "hover:border-emerald-300",
  },
  amber: {
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    border: "border-amber-200",
    hoverBorder: "hover:border-amber-300",
  },
  teal: {
    bg: "bg-teal-50",
    iconBg: "bg-teal-100",
    iconText: "text-teal-600",
    border: "border-teal-200",
    hoverBorder: "hover:border-teal-300",
  },
};

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white via-teal-50/20 to-white relative" ref={ref}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-200 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <HelpCircle className="h-4 w-4" />
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Aapke <span className="text-amber-600">Sawaal</span>, Humare <span className="text-amber-600">Jawaab</span>
          </h2>
          <p className="mt-3 text-teal-600 max-w-xl mx-auto leading-relaxed">
            Jo bhi sawaal aapke mann mein hai — humne yahan jawab diya hai. Agar aur kuch poochna ho, toh seedha call karein!
          </p>
        </motion.div>

        {/* FAQ Accordion - Custom Design */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const colors = colorMap[faq.color] || colorMap.teal;
            const isOpen = openIndex === i;
            const FaqIcon = faq.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? `${colors.bg} ${colors.border} shadow-lg`
                      : `bg-white ${colors.border} ${colors.hoverBorder} hover:shadow-md`
                  }`}
                >
                  {/* Question - Clickable Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center gap-4 group"
                    aria-expanded={isOpen}
                  >
                    {/* Icon + Number */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center transition-transform duration-300 ${isOpen ? "scale-110" : "group-hover:scale-105"}`}>
                      <FaqIcon className={`h-5 w-5 ${colors.iconText}`} />
                    </div>

                    {/* Question Text */}
                    <span className={`flex-1 font-semibold text-base sm:text-lg transition-colors ${isOpen ? "text-teal-900" : "text-teal-800 group-hover:text-teal-900"}`}>
                      {faq.question}
                    </span>

                    {/* Chevron */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full ${isOpen ? "bg-teal-600" : "bg-teal-100 group-hover:bg-teal-200"} flex items-center justify-center transition-all duration-300`}>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : "text-teal-600"}`} />
                    </div>
                  </button>

                  {/* Answer - Animated Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pl-20">
                          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50">
                            <p className="text-teal-700 leading-relaxed text-[15px]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="relative bg-gradient-to-r from-teal-50 via-amber-50 to-teal-50 rounded-2xl p-8 border border-teal-100 overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-teal-200/30 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-amber-200/30 rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600" />
                <p className="font-bold text-lg text-teal-900">Aur kuch poochna hai?</p>
              </div>
              <p className="text-sm text-teal-600 mb-5 max-w-md mx-auto">
                Pehli consultation FREE hai — koi bhi sawaal poochein, bina kisi obligation ke.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-md btn-hover-scale">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Pe Poochein
                  </Button>
                </a>
                <a href="tel:9431757875">
                  <Button variant="outline" className="border-teal-300 text-teal-700 rounded-xl btn-hover-scale">
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
