"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Bone, CircleDot, Move, Activity, Brain, Disc3,
  ArrowRight, CheckCircle2, AlertTriangle, Phone, MessageCircle
} from "lucide-react";

interface Condition {
  id: string;
  icon: React.ElementType;
  title: string;
  empathyHinglish: string;
  shortDesc: string;
  causes: string[];
  treatments: string[];
  internalProblem: string;
  failureCost: string;
  successVision: string;
  plan: { step: string; desc: string }[];
}

const conditions: Condition[] = [
  {
    id: "knee-pain",
    icon: Bone,
    title: "Knee Pain",
    empathyHinglish: "Kya ghutne ka dard aapko seedhi chadne se rook raha hai? Kya chalna bhi mushkil ho gaya hai?",
    shortDesc: "Joints, obesity, aur arthritis se hota hai ghutne ka dard — jo aapki daily life mein har cheez mein aa jaata hai.",
    causes: ["Joint Degeneration", "Obesity & Weight Issues", "Arthritis (Osteo/Rheumatoid)", "Sports Injuries", "Age-related Wear & Tear"],
    treatments: ["Quad Sets & Strengthening", "Ultrasound Therapy", "Kinesiology Taping", "Acupuncture for Pain Relief"],
    internalProblem: "Kya aap apne bachchon ke saath bahar jaakar khel nahi paate? Kya har subah uthna ek fight lagta hai?",
    failureCost: "Agar knee pain ka ilaaj nahi karaya, toh dhire-dhire chalna mushkil ho jayega. Surgery ka khatra badh jayega, aur aap apni aazaadi kho denge.",
    successVision: "Bina dard ke chalna, seedhiyan asaani se chadhna, aur bachchon ke saath khelna — yeh sab mumkin hai!",
    plan: [
      { step: "Assess", desc: "Dr. Vikas aapka detailed assessment karenge — X-ray, movement test, aur pain history" },
      { step: "Treat", desc: "Personalized plan — Ultrasound, Quad exercises, Kinesiology Taping, aur Acupuncture" },
      { step: "Recover", desc: "Gradually aapka dard kam hoga, movement aayega, aur aap wapas normal life jiyenge" },
    ],
  },
  {
    id: "neck-pain",
    icon: CircleDot,
    title: "Neck Pain",
    empathyHinglish: "Kya gardan ka dard aapko poora din pareshan rakhta hai? Kya sir ghoomna aur stiffness ne aapki neend chura li?",
    shortDesc: "Poor posture aur cervical spondylosis se neck pain hota hai — jo aapka poora din kharab kar deta hai.",
    causes: ["Poor Posture (Phone/Laptop)", "Cervical Spondylosis", "Muscle Strain", "Whiplash Injuries", "Stress & Tension"],
    treatments: ["Cervical Manipulations", "Chiropractic Care", "Deep Tissue Massage", "Posture Correction Therapy"],
    internalProblem: "Kya aap poora din dard ke saath kaam karte hain? Kya headache aur stiffness ne aapki neend chura li hai?",
    failureCost: "Bina ilaaj ke neck pain migraine, arm numbness, aur permanent stiffness ka kaan ban sakta hai. Aapka kaam aur neend dono affect hoga.",
    successVision: "Bina headache ke kaam karna, raat ko aaram se sona, aur bina stiffness ke zindagi jeena — yeh sab possible hai!",
    plan: [
      { step: "Diagnose", desc: "Cervical assessment, posture analysis, aur pain mapping se exact cause pata chalega" },
      { step: "Heal", desc: "Chiropractic adjustments, tissue massage, aur targeted exercises se dard khatam hoga" },
      { step: "Strengthen", desc: "Posture correction aur daily exercises se permanent relief milega" },
    ],
  },
  {
    id: "shoulder-pain",
    icon: Move,
    title: "Shoulder Pain",
    empathyHinglish: "Kya shoulder ka dard aapko haath upar uthne nahi deta? Kya choli pehenna ya baal banana bhi mushkil hai?",
    shortDesc: "Rotator cuff injuries aur frozen shoulder se shoulder pain — aapki chhoti se chhoti cheez mein bhi aa jaata hai.",
    causes: ["Rotator Cuff Injury", "Frozen Shoulder", "Impingement Syndrome", "Tendonitis", "Repetitive Strain"],
    treatments: ["TENS Therapy", "Laser Treatment", "Manual Therapy", "Range of Motion Exercises"],
    internalProblem: "Kya aap apne kapde khud nahi pehan paate? Kya haath piche le jaana impossible lagta hai? Yeh bahut frustrating hai.",
    failureCost: "Frozen shoulder bina ilaaj ke worse hota hai. Haath bilkul na chal paana, surgery ka option — yeh sab aage ka risk hai.",
    successVision: "Haath upar uthana, khud se tayyar hona, aur bina kisi restriction ke life jeena — hamare saath possible hai!",
    plan: [
      { step: "Evaluate", desc: "Shoulder movement test, pain assessment, aur ultrasound se exact problem identify karenge" },
      { step: "Treat", desc: "TENS, Laser therapy, aur Manual Therapy se inflammation kam aur movement aayega" },
      { step: "Restore", desc: "Progressive exercises se full range of motion wapas aayega aur pain permanent khatam hoga" },
    ],
  },
  {
    id: "back-pain",
    icon: Activity,
    title: "Back Pain",
    empathyHinglish: "Kya back pain se raat ko neend nahi aati? Kya jhukna ya uthna bhi ek testan ho gaya hai?",
    shortDesc: "Poor posture, sciatica, aur sedentary lifestyle se back pain — jo aapki neend aur kaam dono chura leta hai.",
    causes: ["Poor Posture", "Sciatica / Nerve Compression", "Sedentary Lifestyle", "Muscle Strain", "Herniated Disc"],
    treatments: ["Manual Therapy & Mobilization", "Core Strengthening", "Sciatic Nerve Flossing", "Postural Training"],
    internalProblem: "Kya aap raat ko letne bhi nahi paate? Kya office mein baithna ek azaab ban gaya hai? Kya aap apne parivaar ke saath bahar jaana chhod diya?",
    failureCost: "Chronic back pain bina ilaaj ke disability ka kaaran ban sakta hai. Sciatica worse hota hai, surgery ka risk badhta hai, aur aap ki aazaadi chali jaati hai.",
    successVision: "Aaram se sona, bina dard ke kaam karna, aur bachchon ke saath khelna — yeh sapna ab haqeeqat ban sakta hai!",
    plan: [
      { step: "Identify", desc: "Spinal assessment, nerve test, aur posture analysis se root cause mil jayega" },
      { step: "Heal", desc: "Manual therapy, core exercises, aur sciatic nerve treatment se dard se azaadi" },
      { step: "Protect", desc: "Posture training aur daily routine se permanent relief aur future protection" },
    ],
  },
  {
    id: "stroke-rehab",
    icon: Brain,
    title: "Stroke Rehab",
    empathyHinglish: "Kya stroke ke baad aap apna aadha badan chala nahi paate? Kya aap dependent feel karte hain?",
    shortDesc: "Stroke ke baad neurological dysfunction, motor deficits, aur paralysis — lekin recovery POSSIBLE hai.",
    causes: ["Neurological Dysfunction", "Motor Deficits", "Partial/Full Paralysis", "Balance & Coordination Loss", "Speech & Cognitive Issues"],
    treatments: ["Neurological Rehabilitation", "Motor Re-learning Program", "Balance & Gait Training", "Functional Electrical Stimulation"],
    internalProblem: "Kya aap khud se kaam nahi kar paate? Kya parivaar par dependent hona aapko bahut dukhta hai? Yeh bahut common feeling hai.",
    failureCost: "Bina rehab ke stroke recovery ruk jaati hai. Muscles stiff ho jaate hain, independence kho jaati hai, aur quality of life bahut kam ho jaati hai.",
    successVision: "Khud se chalna, khana khana, apna kaam khud karna — recovery slow hai lekin SURE hai. Hum aapke saath hain!",
    plan: [
      { step: "Assess", desc: "Neurological assessment — movement, balance, strength, aur daily function evaluation" },
      { step: "Rehabilitate", desc: "Personalized rehab program — motor re-learning, gait training, aur FES therapy" },
      { step: "Empower", desc: "Gradually independence badhega — daily tasks khud karna, family ke saath better life" },
    ],
  },
  {
    id: "disc-bulge",
    icon: Disc3,
    title: "Disc Bulge",
    empathyHinglish: "Kya disc bulge ne aapko bed par rakh diya hai? Kya jhukne mein current sa lagta hai?",
    shortDesc: "Spinal trauma aur poor posture se disc bulge — jo legs tak dard le jaata hai aur aapki harkaat band kar deta hai.",
    causes: ["Spinal Trauma", "Poor Posture", "Heavy Lifting", "Degenerative Disc Disease", "Age-related Changes"],
    treatments: ["Joint Mobilisation", "Core Stabilisation", "McKenzie Therapy", "Traction & Decompression"],
    internalProblem: "Kya aap ko darr hai ki surgery ke alawa koi raasta nahi hai? Kya legs mein numbness aapko darata hai? Hum kehte hain — surgery zaruri NAHI hai!",
    failureCost: "Disc bulge bina ilaaj ke worse hota hai. Numbness badhti hai, weakness aati hai, aur surgery ka option aapke saamne aa jaata hai — jabki early treatment se yeh sab bach sakta hai.",
    successVision: "Bina surgery ke dard se azaadi, normal life wapas paana, aur har kaam khud karna — yeh hamare treatment se possible hai!",
    plan: [
      { step: "Scan & Assess", desc: "Disc assessment, nerve test, aur movement analysis se exact bulge location aur severity pata chalegi" },
      { step: "Decompress & Heal", desc: "Joint mobilisation, McKenzie therapy, aur traction se disc pressure kam hoga aur healing shuru" },
      { step: "Stabilise & Prevent", desc: "Core stabilisation exercises se spine strong hogi aur future disc problems se bachaav" },
    ],
  },
];

const iconColors = [
  "bg-teal-100 text-teal-600",
  "bg-amber-100 text-amber-600",
  "bg-rose-100 text-rose-600",
  "bg-teal-100 text-teal-600",
  "bg-purple-100 text-purple-600",
  "bg-amber-100 text-amber-600",
];

export default function ConditionsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<Condition | null>(null);

  return (
    <section id="conditions" className="py-20 bg-white relative" ref={ref}>
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <AlertTriangle className="h-4 w-4" />
            Conditions We Treat
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Aapka Dard, <span className="text-amber-600">Humari Priority</span>
          </h2>
          <p className="mt-3 text-teal-600 max-w-2xl mx-auto">
            Jo dard aapko rook raha hai — uska ilaaj hum karte hain. Koi bhi condition ho, Dr. Vikas ke paas solution hai.
          </p>
        </motion.div>

        {/* Conditions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, i) => (
            <motion.div
              key={condition.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className="group h-full cursor-pointer border-2 border-teal-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden card-hover-lift shine-effect"
                onClick={() => setSelected(condition)}
              >
                {/* Top gradient accent */}
                <div className="h-1.5 bg-gradient-to-r from-teal-400 via-amber-400 to-teal-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconColors[i]} group-hover:scale-110 transition-transform shadow-sm`}>
                      <condition.icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-teal-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mt-3 group-hover:text-teal-700 transition-colors">{condition.title}</h3>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-sm text-teal-700 leading-relaxed italic mb-3">
                    &ldquo;{condition.empathyHinglish}&rdquo;
                  </p>
                  <p className="text-sm text-teal-600">{condition.shortDesc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {condition.treatments.slice(0, 3).map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs bg-teal-50 text-teal-700 border border-teal-100">
                        {t}
                      </Badge>
                    ))}
                    {condition.treatments.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-amber-50 text-amber-700 border border-amber-100">
                        +{condition.treatments.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-teal-600 hover:text-amber-600 hover:bg-amber-50 p-0 h-auto font-semibold group/btn"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Condition Detail Dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-0">
          {selected && (
            <div className="p-6 sm:p-8">
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconColors[conditions.findIndex(c => c.id === selected.id)]}`}>
                        <selected.icon className="h-5 w-5" />
                      </div>
                      <DialogTitle className="text-2xl font-bold text-teal-900">
                        {selected.title}
                      </DialogTitle>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              {/* Empathy */}
              <div className="mt-4 bg-teal-50 rounded-2xl p-5 border border-teal-100">
                <p className="text-teal-800 text-lg italic leading-relaxed">
                  &ldquo;{selected.empathyHinglish}&rdquo;
                </p>
                <p className="mt-3 text-teal-700">{selected.internalProblem}</p>
              </div>

              {/* Causes */}
              <div className="mt-6">
                <h4 className="font-bold text-teal-900 text-lg mb-3">Causes</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selected.causes.map((cause) => (
                    <div key={cause} className="flex items-center gap-2 text-sm text-teal-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      {cause}
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* The Plan - StoryBrand */}
              <div className="mt-4">
                <h4 className="font-bold text-teal-900 text-lg mb-4">Aapka Treatment Plan — 3 Simple Steps</h4>
                <div className="space-y-4">
                  {selected.plan.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold shadow-md">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-bold text-teal-900">{step.step}</p>
                        <p className="text-sm text-teal-600 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Treatments */}
              <div className="mt-4">
                <h4 className="font-bold text-teal-900 text-lg mb-3">Treatments Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.treatments.map((t) => (
                    <Badge key={t} className="bg-teal-100 text-teal-800 border border-teal-200 px-3 py-1">
                      <CheckCircle2 className="h-3 w-3 mr-1.5" />
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Failure vs Success */}
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
                  <h5 className="font-bold text-red-800 flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4" />
                    Agar Ilaja Nahi Karaya
                  </h5>
                  <p className="text-sm text-red-700">{selected.failureCost}</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                  <h5 className="font-bold text-green-800 flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Treatment Ke Baad
                  </h5>
                  <p className="text-sm text-green-700">{selected.successVision}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl h-12 shadow-lg">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </a>
                <a href="tel:9431757875" className="flex-1">
                  <Button variant="outline" className="w-full border-teal-300 text-teal-700 hover:bg-teal-50 rounded-xl h-12">
                    <Phone className="h-4 w-4 mr-2" />
                    Call: 9431757875
                  </Button>
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
