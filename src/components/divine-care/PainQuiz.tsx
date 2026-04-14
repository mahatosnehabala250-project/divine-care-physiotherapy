"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bone, CircleDot, Move, Activity, Brain, Disc3,
  ArrowRight, ArrowLeft, RotateCcw, Phone, MessageCircle,
  CheckCircle2, AlertTriangle, Sparkles
} from "lucide-react";

interface QuizStep {
  question: string;
  options: { label: string; conditions: string[] }[];
}

const quizSteps: QuizStep[] = [
  {
    question: "Aapko dard kahan hai?",
    options: [
      { label: "Ghutne (Knee) mein", conditions: ["knee-pain"] },
      { label: "Gardan (Neck) mein", conditions: ["neck-pain"] },
      { label: "Shoulder mein", conditions: ["shoulder-pain"] },
      { label: "Peeche (Back) mein", conditions: ["back-pain", "disc-bulge"] },
    ],
  },
  {
    question: "Dard kitna purana hai?",
    options: [
      { label: "Kuch din se (Acute)", conditions: [] },
      { label: "Kuch mahine se (Sub-acute)", conditions: [] },
      { label: "6 mahine+ (Chronic)", conditions: ["knee-pain", "neck-pain", "back-pain", "shoulder-pain", "disc-bulge"] },
    ],
  },
  {
    question: "Kya aapko yeh problems hain?",
    options: [
      { label: "Haath/Pair mein numbness", conditions: ["disc-bulge", "neck-pain"] },
      { label: "Chalne mein mushkil", conditions: ["knee-pain", "stroke-rehab"] },
      { label: "Jhukne mein dard", conditions: ["back-pain", "disc-bulge"] },
      { label: "Haath upar nahi uth paana", conditions: ["shoulder-pain"] },
    ],
  },
  {
    question: "Kya aapko lagta hai ki surgery zaruri hai?",
    options: [
      { label: "Haan, doctor ne bola", conditions: [] },
      { label: "Shayad, lekin darta hoon", conditions: ["knee-pain", "back-pain", "disc-bulge"] },
      { label: "Nahi, bina surgery ke theek hona chahunga", conditions: ["knee-pain", "neck-pain", "back-pain", "shoulder-pain", "disc-bulge", "stroke-rehab"] },
    ],
  },
];

interface ConditionResult {
  id: string;
  title: string;
  icon: React.ElementType;
  matchScore: number;
  empathy: string;
}

const conditionData: Record<string, ConditionResult> = {
  "knee-pain": { id: "knee-pain", title: "Knee Pain", icon: Bone, matchScore: 0, empathy: "Kya ghutne ka dard aapko seedhi chadne se rook raha hai? Hum samajhte hain — aur hum help kar sakte hain." },
  "neck-pain": { id: "neck-pain", title: "Neck Pain", icon: CircleDot, matchScore: 0, empathy: "Kya gardan ka dard aapko poora din pareshan rakhta hai? Relief possible hai!" },
  "shoulder-pain": { id: "shoulder-pain", title: "Shoulder Pain", icon: Move, matchScore: 0, empathy: "Kya shoulder ka dard aapko haath upar uthne nahi deta? Yeh treat ho sakta hai." },
  "back-pain": { id: "back-pain", title: "Back Pain", icon: Activity, matchScore: 0, empathy: "Kya back pain se raat ko neend nahi aati? Aap akela nahi hain — hum help karenge." },
  "stroke-rehab": { id: "stroke-rehab", title: "Stroke Rehab", icon: Brain, matchScore: 0, empathy: "Kya stroke ke baad aap dependent feel karte hain? Recovery POSSIBLE hai!" },
  "disc-bulge": { id: "disc-bulge", title: "Disc Bulge", icon: Disc3, matchScore: 0, empathy: "Kya disc bulge ne aapko bed par rakh diya hai? Surgery zaruri NAHI hai!" },
};

export default function PainQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[][]>([]);
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);

  const handleSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = quizSteps[currentStep].options[optionIndex].conditions;
    setAnswers(newAnswers);
  };

  const nextStep = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResults = () => {
    setShowResult(true);
  };

  const getResults = (): ConditionResult[] => {
    const scores: Record<string, number> = {};
    Object.keys(conditionData).forEach((id) => { scores[id] = 0; });

    answers.forEach((conditions) => {
      conditions.forEach((cond) => {
        if (scores[cond] !== undefined) {
          scores[cond] += 1;
        }
      });
    });

    return Object.entries(conditionData)
      .map(([id, data]) => ({
        ...data,
        matchScore: scores[id] || 0,
      }))
      .filter((r) => r.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
    setStarted(false);
  };

  const selectedOptions = answers[currentStep];

  if (!started) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-teal-50/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-10 left-10 w-60 h-60 bg-amber-200 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-teal-200 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
              <Sparkles className="h-4 w-4" />
              Free Pain Assessment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-900 mb-4">
              Apni <span className="text-amber-600">Problem</span> Pehchanein — <span className="text-amber-600">2 Minute</span> Mein
            </h2>
            <p className="text-teal-600 max-w-xl mx-auto mb-8 leading-relaxed">
              Ye chhota quiz aapki samajhne mein help karega ki aapki problem kya hai aur Dr. Vikas kaise help kar sakte hain. Koi bhi personal information nahi poochi jaayegi.
            </p>

            <div className="bg-white rounded-3xl border-2 border-teal-100 shadow-xl p-8 sm:p-10 relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  100% Free
                </Badge>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Bone, label: "Knee" },
                  { icon: CircleDot, label: "Neck" },
                  { icon: Move, label: "Shoulder" },
                  { icon: Activity, label: "Back" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-3 bg-teal-50 rounded-2xl border border-teal-100">
                    <item.icon className="h-6 w-6 text-teal-600" />
                    <span className="text-xs font-medium text-teal-700">{item.label}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                onClick={() => setStarted(true)}
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-2xl px-10 h-14 text-base font-bold shadow-xl shadow-teal-600/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Start Quiz — It&apos;s Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <p className="mt-4 text-xs text-teal-500">Sirf 4 sawaal • 2 minute • Instant result</p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (showResult) {
    const results = getResults();
    const topResult = results[0];

    return (
      <section className="py-20 bg-gradient-to-b from-white to-teal-50/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-10 left-10 w-60 h-60 bg-amber-200 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-teal-200 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-teal-900 mb-3">
                Aapka <span className="text-amber-600">Result</span> Ready Hai!
              </h2>
            </div>

            {topResult && (
              <Card className="border-2 border-teal-200 rounded-3xl shadow-xl mb-6 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <topResult.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-teal-200 text-sm font-medium">Most Likely Condition</p>
                      <h3 className="text-2xl font-bold">{topResult.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="bg-teal-50 rounded-2xl p-4 border border-teal-100 mb-4">
                    <p className="text-teal-800 italic leading-relaxed">
                      &ldquo;{topResult.empathy}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <p className="text-sm text-amber-700 font-medium">
                      Yeh ek preliminary assessment hai — exact diagnosis ke liye Dr. Vikas se consult zaroor karein.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
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
                </CardContent>
              </Card>
            )}

            {results.length > 1 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">Other Possible Conditions</h4>
                <div className="grid gap-3">
                  {results.slice(1).map((result) => (
                    <div key={result.id} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-teal-100">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                        <result.icon className="h-5 w-5 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-teal-900 text-sm">{result.title}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-16 h-1.5 bg-teal-100 rounded-full overflow-hidden">
                          <div className="h-full bg-teal-500 rounded-full" style={{ width: `${(result.matchScore / (results[0]?.matchScore || 1)) * 100}%` }} />
                        </div>
                        <span className="text-xs text-teal-500">{result.matchScore} match</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center">
              <Button
                variant="ghost"
                onClick={resetQuiz}
                className="text-teal-600 hover:text-teal-800 hover:bg-teal-50 rounded-xl"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Quiz Phir Se Lein
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-60 h-60 bg-amber-200 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-teal-200 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-teal-600">Step {currentStep + 1} of {quizSteps.length}</span>
                <span className="text-sm text-teal-500">{Math.round(((currentStep + 1) / quizSteps.length) * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-teal-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / quizSteps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-teal-500 to-amber-400 rounded-full"
                />
              </div>
            </div>

            {/* Question */}
            <Card className="border-2 border-teal-100 rounded-3xl shadow-lg mb-6">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-teal-900 mb-6">
                  {quizSteps[currentStep].question}
                </h3>

                <div className="space-y-3">
                  {quizSteps[currentStep].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 ${
                        selectedOptions === quizSteps[currentStep].options[i].conditions
                          ? "border-teal-500 bg-teal-50 shadow-md"
                          : "border-teal-100 hover:border-teal-300 hover:bg-teal-50/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                          selectedOptions === quizSteps[currentStep].options[i].conditions
                            ? "border-teal-500 bg-teal-500 text-white"
                            : "border-teal-200"
                        }`}>
                          {selectedOptions === quizSteps[currentStep].options[i].conditions && (
                            <CheckCircle2 className="h-4 w-4" />
                          )}
                        </div>
                        <span className="font-medium text-teal-900">{option.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="text-teal-600 hover:text-teal-800 hover:bg-teal-50 rounded-xl"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <Button
                onClick={nextStep}
                disabled={!selectedOptions}
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl px-6 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStep === quizSteps.length - 1 ? "See Results" : "Next"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
