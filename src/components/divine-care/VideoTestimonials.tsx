"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Video, Play, Star, Clock, MessageCircle, X, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

interface TestimonialData {
  id: number;
  name: string;
  condition: string;
  quote: string;
  fullTestimonial: string;
  beforeStatus: string;
  afterStatus: string;
  rating: number;
  duration: string;
  timeAgo: string;
  gradient: string;
  gradientFrom: string;
  gradientTo: string;
  overlayPattern: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    condition: "Knee Pain",
    quote: "2 saal tak ghutne ka dard... ab seedhiyan chadh sakta hoon!",
    fullTestimonial:
      "Mujhe 2 saal se ghutne ka dard tha. Seedhiyan chadhna toh door ki baat, chalna bhi mushkil ho gaya tha. Doctor ne knee replacement bola, lekin main darta tha. Phir Divine Care mein aaya aur Dr. Vikas ne acupuncture aur physiotherapy shuru ki. Sirf 8 sessions mein itna fark pada ki main ab seedhiyan chadh sakta hoon! Mandir jaata hoon, bachchon ke saath khelta hoon — pehle jaisi zindagi ji raha hoon. Surgery ki zarurat bhi nahi padi!",
    beforeStatus: "Ghutne ka dard, chalna mushkil",
    afterStatus: "Seedhiyan chadh sakta hoon, surgery nahi chahiye",
    rating: 5,
    duration: "2:30",
    timeAgo: "2 mahine pehle",
    gradient: "from-teal-500 via-teal-600 to-emerald-700",
    gradientFrom: "from-teal-500",
    gradientTo: "to-emerald-700",
    overlayPattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)",
  },
  {
    id: 2,
    name: "Sunita Devi",
    condition: "Neck Pain",
    quote: "Cervical pain se migraine... ab bilkul theek hoon!",
    fullTestimonial:
      "Cervical pain se migraine itna hota tha ki din bhar sir dard rehta tha. Kaam nahi ho paata, neend bhi nahi aati thi. Painkillers se temporary relief milta tha lekin dard wapas aata tha. Divine Care mein Dr. Vikas ne meri cervical problem ko treat kiya. 5 sessions mein migraine bilkul khatam ho gaya! Ab main poore din ghar ka kaam kar leti hoon, bina dard ke. Mera experience bahut acha raha, main sabko recommend karti hoon!",
    beforeStatus: "Cervical pain, chronic migraine",
    afterStatus: "Bilkul theek hoon, migraine khatam",
    rating: 5,
    duration: "3:15",
    timeAgo: "1 mahina pehle",
    gradient: "from-amber-400 via-amber-500 to-orange-600",
    gradientFrom: "from-amber-400",
    gradientTo: "to-orange-600",
    overlayPattern: "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05) 0%, transparent 50%)",
  },
  {
    id: 3,
    name: "Mohammad Irfan",
    condition: "Back Pain",
    quote: "Sciatica se chal nahi paata tha... ab kaam pe jaata hoon!",
    fullTestimonial:
      "Sciatica pain se main chal nahi paata tha. Left tang mein current sa lagta tha, jhukna toh door ki baat — seedha khade rehna bhi mushkil tha. 6 mahine se yeh problem thi, kaam se gaya tha. Phir Divine Care mein aaya. Dr. Vikas ne sciatica ke liye special treatment plan banaya. 10 sessions mein main normally chal sakta hoon! Ab kaam pe jaata hoon, family ke saath time spend karta hoon. Bahut shukriya Divine Care ka!",
    beforeStatus: "Sciatica pain, chal nahi paata tha",
    afterStatus: "Normally chal sakta hoon, kaam pe jaata hoon",
    rating: 4,
    duration: "2:45",
    timeAgo: "3 mahine pehle",
    gradient: "from-purple-500 via-purple-600 to-violet-700",
    gradientFrom: "from-purple-500",
    gradientTo: "to-violet-700",
    overlayPattern: "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 40%, rgba(255,255,255,0.06) 0%, transparent 50%)",
  },
  {
    id: 4,
    name: "Priya Singh",
    condition: "Shoulder Pain",
    quote: "Frozen shoulder tha... ab baal banana mushkil nahi!",
    fullTestimonial:
      "Frozen shoulder tha — haath upar nahi uttha paati thi. Baal banana, kapde pehenna, kitchen mein kaam — sab mushkil ho gaya tha. Doctor ne injection bola lekin main nahi chahti thi. Phir Divine Care mein consult kiya. Dr. Vikas ne manual therapy aur dry needling se treatment kiya. 6 sessions mein full range of motion wapas aa gaya! Ab baal banana mushkil nahi hai, sab kaam khud kar leti hoon. Best physiotherapy center hai yeh!",
    beforeStatus: "Frozen shoulder, haath nahi uttha paati",
    afterStatus: "Full range of motion, sab kaam khud karti hoon",
    rating: 5,
    duration: "2:10",
    timeAgo: "5 mahine pehle",
    gradient: "from-rose-400 via-rose-500 to-pink-600",
    gradientFrom: "from-rose-400",
    gradientTo: "to-pink-600",
    overlayPattern: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.06) 0%, transparent 50%)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function VideoTestimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<TestimonialData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (testimonial: TestimonialData) => {
    setSelectedTestimonial(testimonial);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedTestimonial(null), 200);
  };

  return (
    <section
      id="video-testimonials"
      className="py-20 bg-gradient-to-b from-white via-teal-50/30 to-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 border-amber-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
            <Video className="h-3.5 w-3.5" />
            Real Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-900">
            Patients Ka{" "}
            <span className="text-amber-600">Asli</span> Experience
          </h2>
          <p className="mt-4 text-teal-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Suniyeh un logon se jo already dard se azaadi paaye hain
          </p>
        </motion.div>

        {/* Video Testimonial Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="group cursor-pointer"
              onClick={() => handleCardClick(testimonial)}
            >
              <div className="rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-300 card-hover-lift overflow-hidden relative">
                {/* Gradient Background */}
                <div
                  className={`bg-gradient-to-br ${testimonial.gradient} relative aspect-video sm:aspect-[16/10]`}
                >
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ backgroundImage: testimonial.overlayPattern }}
                  />
                  {/* Medical cross pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  {/* Play Button - Centered */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Pulse rings */}
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: "2s" }} />
                      <div className="absolute inset-0 rounded-full bg-white/10 scale-125 animate-pulse" style={{ animationDuration: "2.5s" }} />
                      {/* Play button circle */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-sm shadow-2xl flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                        <Play className="h-7 w-7 sm:h-8 sm:w-8 text-teal-600 fill-teal-600 ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge - Top Right */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-lg">
                      <Clock className="h-3 w-3" />
                      {testimonial.duration}
                    </div>
                  </div>

                  {/* Star Rating - Top Left */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
                          i < testimonial.rating
                            ? "text-amber-300 fill-amber-300"
                            : "text-white/30 fill-white/30"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Patient Name Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 sm:p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-white font-bold text-lg sm:text-xl">
                          {testimonial.name}
                        </h3>
                        <p className="text-white/80 text-sm mt-0.5">
                          {testimonial.condition}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-white/60 text-xs">
                        <Clock className="h-3 w-3" />
                        {testimonial.timeAgo}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote Preview - Below thumbnail */}
                <div className="bg-white p-4 sm:p-5">
                  <p className="text-teal-700 text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-teal-50">
                    <div className="flex items-center gap-1.5">
                      <Video className="h-4 w-4 text-teal-400" />
                      <span className="text-xs text-teal-500 font-medium">
                        Watch Full Story
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-teal-400 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dialog for Expanded Testimonial */}
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-lg rounded-2xl p-0 overflow-hidden border-0 shadow-2xl">
          {selectedTestimonial && (
            <div>
              {/* Gradient Header */}
              <div
                className={`bg-gradient-to-br ${selectedTestimonial.gradient} relative px-6 pt-6 pb-8`}
              >
                {/* Pattern overlay */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: selectedTestimonial.overlayPattern }}
                />
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                      <Video className="h-3 w-3 mr-1" />
                      Video Testimonial
                    </Badge>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < selectedTestimonial.rating
                              ? "text-amber-300 fill-amber-300"
                              : "text-white/30 fill-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Play button */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        {selectedTestimonial.name}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {selectedTestimonial.condition}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-5 space-y-5">
                {/* Time ago */}
                <div className="flex items-center gap-1.5 text-teal-500 text-sm">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{selectedTestimonial.timeAgo}</span>
                </div>

                {/* Before/After Status Badges */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-rose-50 border border-rose-100 rounded-xl p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-rose-500 mb-1">
                      Pehle (Before)
                    </div>
                    <p className="text-rose-700 text-sm font-medium">
                      {selectedTestimonial.beforeStatus}
                    </p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 mb-1">
                      Baad Mein (After)
                    </div>
                    <p className="text-emerald-700 text-sm font-medium">
                      {selectedTestimonial.afterStatus}
                    </p>
                  </div>
                </div>

                {/* Full Testimonial */}
                <DialogHeader className="text-left space-y-0 p-0">
                  <DialogTitle className="sr-only">
                    {selectedTestimonial.name} ki Testimonial
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    {selectedTestimonial.name} ne {selectedTestimonial.condition} ke liye Divine
                    Care Physiotherapy mein treatment liya.
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <p className="text-teal-800 leading-relaxed text-sm sm:text-base">
                    &ldquo;{selectedTestimonial.fullTestimonial}&rdquo;
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/9431757875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl h-11 text-sm shadow-lg transition-all hover:scale-[1.02]">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Aap Bhi Azaadi Paayein
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
