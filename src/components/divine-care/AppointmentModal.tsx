"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarDays, Clock, Phone, MessageCircle,
  CheckCircle2, Loader2, Sparkles, ArrowRight, AlertCircle
} from "lucide-react";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
];

const conditions = [
  "Knee Pain", "Neck Pain", "Shoulder Pain",
  "Back Pain", "Stroke Rehab", "Disc Bulge", "Other",
];

interface AppointmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AppointmentModal({ open, onOpenChange }: AppointmentModalProps) {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    condition: "",
    date: "",
    time: "",
  });
  const [submitError, setSubmitError] = useState("");

  // Compute minDate client-side only to avoid hydration mismatch
  const minDate = useMemo(() => {
    if (typeof window === "undefined") return "";
    return new Date().toISOString().split("T")[0];
  }, []);

  // Re-compute minDate after mount for hydration safety
  const [mountedMinDate, setMountedMinDate] = useState("");
  useEffect(() => {
    setMountedMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          problem: formData.condition,
          message: `Appointment Request - Date: ${formData.date}, Time: ${formData.time}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      setSubmitError("Kuch gadbad ho gayi. Dobara try karein ya seedha call karein: 9431757875");
    } finally {
      setLoading(false);
    }
  };

  const resetModal = () => {
    setStep(0);
    setSubmitted(false);
    setFormData({ name: "", phone: "", condition: "", date: "", time: "" });
    onOpenChange(false);
  };

  const canProceed = () => {
    if (step === 0) return formData.name && formData.phone;
    if (step === 1) return formData.condition;
    if (step === 2) return formData.date && formData.time;
    return false;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg bg-white rounded-3xl p-0 overflow-hidden">
        {submitted ? (
          <div className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold text-teal-900 mb-2">Appointment Booked!</h3>
            <p className="text-teal-600 mb-2">
              Aapka appointment request mil gaya hai.
            </p>
            <p className="text-teal-500 text-sm mb-6">
              Hum 30 minute ke andar confirm karenge. Agar emergency hai toh seedha call karein.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-4">
              <a href="https://wa.me/919431757875" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Confirm
                </Button>
              </a>
              <a href="tel:9431757875">
                <Button variant="outline" className="border-teal-300 text-teal-700 rounded-xl">
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 9431757875
                </Button>
              </a>
            </div>
            <Button variant="ghost" onClick={resetModal} className="text-teal-600">
              Close
            </Button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />
              <div className="relative z-10">
                <DialogHeader>
                  <DialogTitle className="text-white flex items-center gap-2 text-xl">
                    <CalendarDays className="h-5 w-5" />
                    Book Appointment
                  </DialogTitle>
                </DialogHeader>
                <p className="text-teal-100 text-sm mt-1">
                  Free consultation • 2 minute mein book karein
                </p>
                {/* Progress dots */}
                <div className="flex items-center gap-2 mt-4">
                  {[0, 1, 2].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        s <= step
                          ? "bg-amber-400 text-teal-900 shadow-md"
                          : "bg-white/20 text-white/60"
                      }`}>
                        {s < step ? <CheckCircle2 className="h-4 w-4" /> : s + 1}
                      </div>
                      {s < 2 && (
                        <div className={`w-8 h-0.5 rounded-full transition-all duration-300 ${
                          s < step ? "bg-amber-400" : "bg-white/20"
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Content */}
            <div className="p-6">
              {submitError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  {submitError}
                </div>
              )}
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold text-teal-900 mb-1">Aapke Baare Mein</h3>
                    <p className="text-sm text-teal-500 mb-4">Pehle aapki basic details chahiye</p>
                    <div className="space-y-2">
                      <Label htmlFor="appt-name" className="text-teal-800 font-medium">
                        Aapka Naam <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="appt-name"
                        placeholder="Apna naam likhein"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-xl border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="appt-phone" className="text-teal-800 font-medium">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="appt-phone"
                        type="tel"
                        placeholder="Apna phone number likhein"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded-xl border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold text-teal-900 mb-1">Aapki Problem</h3>
                    <p className="text-sm text-teal-500 mb-4">Bataiye kya dard hai — hum sahi doctor connect karenge</p>
                    <div className="space-y-2">
                      <Label className="text-teal-800 font-medium">
                        Condition Select Karein <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.condition}
                        onValueChange={(val) => setFormData({ ...formData, condition: val })}
                      >
                        <SelectTrigger className="rounded-xl border-teal-200 focus:border-teal-500 focus:ring-teal-500">
                          <SelectValue placeholder="Problem select karein" />
                        </SelectTrigger>
                        <SelectContent>
                          {conditions.map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Quick condition buttons */}
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {conditions.slice(0, 4).map((c) => (
                        <button
                          key={c}
                          onClick={() => setFormData({ ...formData, condition: c })}
                          className={`px-3 py-2 text-xs rounded-xl border-2 transition-all text-left font-medium ${
                            formData.condition === c
                              ? "border-teal-500 bg-teal-50 text-teal-800"
                              : "border-teal-100 text-teal-600 hover:border-teal-200 hover:bg-teal-50/50"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold text-teal-900 mb-1">Date & Time</h3>
                    <p className="text-sm text-teal-500 mb-4">Aapko kaunsa time suit karta hai?</p>
                    <div className="space-y-2">
                      <Label htmlFor="appt-date" className="text-teal-800 font-medium">
                        Preferred Date <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="appt-date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={mountedMinDate || undefined}
                        className="rounded-xl border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-teal-800 font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Preferred Time <span className="text-red-500">*</span>
                      </Label>
                      <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setFormData({ ...formData, time: slot })}
                            className={`px-2 py-2 text-xs rounded-xl border-2 transition-all font-medium ${
                              formData.time === slot
                                ? "border-teal-500 bg-teal-50 text-teal-800 shadow-sm"
                                : "border-teal-100 text-teal-600 hover:border-teal-200 hover:bg-teal-50/50"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-teal-50">
                <Button
                  variant="ghost"
                  onClick={() => step > 0 ? setStep(step - 1) : onOpenChange(false)}
                  className="text-teal-600 hover:text-teal-800 hover:bg-teal-50 rounded-xl"
                >
                  {step === 0 ? "Cancel" : "Previous"}
                </Button>
                {step < 2 ? (
                  <Button
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                    className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl px-6 shadow-md disabled:opacity-50"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={loading || !canProceed()}
                    className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl px-6 shadow-lg disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <Sparkles className="h-4 w-4 mr-2" />
                    )}
                    {loading ? "Booking..." : "Confirm Appointment"}
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
