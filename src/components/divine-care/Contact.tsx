"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone, Mail, MapPin, Clock, MessageCircle,
  Send, CheckCircle2, Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Mobile",
    value: "9431757875 / 7903415819",
    href: "tel:9431757875",
  },
  {
    icon: Phone,
    label: "Office",
    value: "06572230781",
    href: "tel:06572230781",
  },
  {
    icon: Mail,
    label: "Email",
    value: "divinecarejsr1@gmail.com",
    href: "mailto:divinecarejsr1@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "4th Floor, Sulata Mala Complex, Pennar Road, Near Laxmi Vilash Bank, Sakchi, Jamshedpur – 831001",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 9:00 AM – 8:00 PM",
    href: "#",
  },
];

const conditionOptions = [
  "Knee Pain",
  "Neck Pain",
  "Shoulder Pain",
  "Back Pain",
  "Stroke Rehab",
  "Disc Bulge",
  "Other",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    problem: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "Hum jald hi aapse contact karenge. Dhanyavaad!",
        });
        setFormData({ name: "", phone: "", problem: "", message: "" });
      }
    } catch {
      toast({
        title: "Error",
        description: "Kuch gadbad hui. Please phone pe call karein.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-teal-50/50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <Phone className="h-4 w-4" />
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Ab Aur <span className="text-amber-600">Intzaar</span> Mat Karein
          </h2>
          <p className="mt-3 text-teal-600 max-w-xl mx-auto">
            Aaj hi appointment book karein — kyunki har din ka dard, ek din zyada ho raha hai.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <Card className="rounded-3xl border-2 border-teal-100 shadow-lg">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-teal-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">Shukriya!</h3>
                    <p className="text-teal-600 mb-6">
                      Aapka message mil gaya hai. Hum 24 ghante ke andar aapse contact karenge.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="border-teal-300 text-teal-700 rounded-xl"
                    >
                      Aur Message Bhejein
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-teal-800 font-medium">
                        Aapka Naam <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Apna naam likhein"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="rounded-xl border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-teal-800 font-medium">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Apna phone number likhein"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="rounded-xl border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-teal-800 font-medium">
                        Aapki Problem <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.problem}
                        onValueChange={(val) => setFormData({ ...formData, problem: val })}
                        required
                      >
                        <SelectTrigger className="rounded-xl border-teal-200 focus:border-teal-500 focus:ring-teal-500">
                          <SelectValue placeholder="Problem select karein" />
                        </SelectTrigger>
                        <SelectContent>
                          {conditionOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-teal-800 font-medium">
                        Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Apni problem detail mein batayein..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rounded-xl border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl h-12 text-base shadow-lg"
                    >
                      {loading ? (
                        <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      ) : (
                        <Send className="h-5 w-5 mr-2" />
                      )}
                      {loading ? "Bhej rahe hain..." : "Message Bhejein"}
                    </Button>
                  </form>
                )}

                {/* WhatsApp Quick Option */}
                <div className="mt-6 pt-6 border-t border-teal-100 text-center">
                  <p className="text-sm text-teal-600 mb-3">Ya phir directly WhatsApp karein:</p>
                  <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Pe Message Karein
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-teal-100 hover:border-teal-200 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                    <item.icon className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-teal-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-teal-800 text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-teal-100 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.6889!2d86.1844!3d22.8024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e37c5c1c1c1c%3A0x0!2sSakchi%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Divine Care Location - Sakchi, Jamshedpur"
              />
            </div>

            {/* Emergency Note */}
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
              <p className="text-amber-800 font-semibold flex items-center gap-2 mb-1">
                <Phone className="h-4 w-4" />
                Emergency ya Quick Appointment?
              </p>
              <p className="text-amber-700 text-sm">
                Seedha call karein: <a href="tel:9431757875" className="font-bold underline">9431757875</a> — hum turant respond karenge.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
