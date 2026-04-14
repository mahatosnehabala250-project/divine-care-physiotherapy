"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, MessageCircle, Phone, CheckCircle2 } from "lucide-react";

const faqs = [
  {
    question: "Kya treatment mein dard hota hai?",
    answer: "Nahi! Hamare treatments gentle aur pain-free hain. Acupuncture mein bahut patli needles hoti hain jo almost dard nahi deti. Physiotherapy aur Hijama bhi comfortable hain. Pehle session mein thoda discomfort ho sakta hai, lekin gradually aapko relief mehsoos hoga.",
  },
  {
    question: "Kitne sessions mein fark dikhta hai?",
    answer: "Acute pain mein 2-3 sessions mein major relief milta hai. Chronic conditions jaise arthritis ya slip disc mein 8-12 sessions chahiye. Dr. Vikas personally aapka assessment karke exact number batayenge. Har case alag hai, lekin 90% patients ko 3 sessions mein fark lagta hai.",
  },
  {
    question: "Kya surgery zaruri hai? Ya physiotherapy se theek ho sakta hai?",
    answer: "90% cases mein surgery ki zarurat NAHI padti! Physiotherapy, Acupuncture aur Hijama se naturally heal hota hai. Dr. Vikas ka aim hai ki aapko surgery se bachaya jaaye. Lekin agar surgery zaruri hai (jaise severe disc herniation), toh hum aapko honestly bataenge.",
  },
  {
    question: "Hijama (Cupping) kya hai? Kya yeh safe hai?",
    answer: "Hijama ek Sunnah aur scientifically proven therapy hai. Isme special cups se skin pe vacuum create kiya jaata hai, jo blood circulation improve karta hai, toxins remove karta hai, aur pain relieve karta hai. Yeh 100% safe hai — hamare clinic mein international standard instruments use hote hain. Jamshedpur mein yeh unique facility sirf Divine Care mein hai.",
  },
  {
    question: "Acupuncture se kya fayda hota hai?",
    answer: "Acupuncture se body ke natural painkillers (endorphins) release hote hain, inflammation kam hota hai, blood circulation improve hota hai, aur nervous system calm hota hai. Yeh bina kisi dawaai ke kaam karta hai — toh koi side effects nahi hain. WHO (World Health Organization) ne bhi acupuncture ko recognize kiya hai 100+ conditions ke liye.",
  },
  {
    question: "Treatment ka kya kharcha hai?",
    answer: "Humara aim hai ki best treatment affordable rates mein mile. Har patient ka plan alag hota hai, toh exact cost assessment ke baad bataaya jaata hai. Pehli consultation FREE hai! Call karein ya WhatsApp karein — hum aapko transparent pricing batayenge.",
  },
  {
    question: "Kya aap stroke rehabilitation bhi karte hain?",
    answer: "Haan! Stroke rehab hamari specialty hai. Dr. Vikas ke team mein neurological rehabilitation ke experts hain. Motor re-learning, gait training, balance therapy, aur FES (Functional Electrical Stimulation) se stroke patients ki recovery hoti hai. Recovery slow hai lekin SURE hai — hum aapke saath har step pe hain.",
  },
  {
    question: "Appointment kaise lein? Kya walk-in allowed hai?",
    answer: "Aap WhatsApp pe message karein (9431757875), call karein, ya website pe form fill karein. Walk-in bhi welcome hain, lekin appointment leke aane se aapka wait nahi hoga. Hum Mon-Sat, 9AM-8PM open hain. Emergency mein kabhi bhi call karein!",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white section-dots" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <HelpCircle className="h-4 w-4" />
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Aapke <span className="text-amber-600">Sawaal</span>, Humare <span className="text-amber-600">Jawaab</span>
          </h2>
          <p className="mt-3 text-teal-600 max-w-xl mx-auto">
            Jo bhi sawaal aapke mann mein hai — humne yahan jawab diya hai. Agar aur kuch poochna ho, toh seedha call karein!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white border-2 border-teal-100 rounded-2xl px-6 hover:border-teal-200 transition-colors data-[state=open]:border-teal-300 data-[state=open]:shadow-lg data-[state=open]:glow-teal"
              >
                <AccordionTrigger className="text-left text-teal-900 font-semibold hover:no-underline py-5 text-base sm:text-lg [&>svg]:text-teal-500">
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1.5 flex-shrink-0 w-7 h-7 rounded-full bg-teal-100 text-teal-700 items-center justify-center text-xs p-0">
                      {i + 1}
                    </Badge>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-teal-700 leading-relaxed pb-5 pl-10">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="bg-gradient-to-r from-teal-50 to-amber-50 rounded-2xl p-6 border border-teal-100">
            <div className="flex items-center justify-center gap-2 mb-3">
              <CheckCircle2 className="h-5 w-5 text-teal-600" />
              <p className="font-semibold text-teal-900">Aur kuch poochna hai?</p>
            </div>
            <p className="text-sm text-teal-600 mb-4">
              Pehli consultation FREE hai — koi bhi sawaal poochein, bina kisi obligation ke.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-md">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Pe Poochein
                </Button>
              </a>
              <a href="tel:9431757875">
                <Button variant="outline" className="border-teal-300 text-teal-700 rounded-xl">
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 9431757875
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
