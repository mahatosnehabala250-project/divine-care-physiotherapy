"use client";

import { useState } from "react";
import Header from "@/components/divine-care/Header";
import Hero from "@/components/divine-care/Hero";
import UrgencyBanner from "@/components/divine-care/UrgencyBanner";
import HealthTipsTicker from "@/components/divine-care/HealthTipsTicker";
import DoctorMessage from "@/components/divine-care/DoctorMessage";
import Stats from "@/components/divine-care/Stats";
import BodyMap from "@/components/divine-care/BodyMap";
import ConditionsGrid from "@/components/divine-care/ConditionsGrid";
import WhyChooseUs from "@/components/divine-care/WhyChooseUs";
import VirtualTour from "@/components/divine-care/VirtualTour";
import TreatmentPlan from "@/components/divine-care/TreatmentPlan";
import TreatmentComparison from "@/components/divine-care/TreatmentComparison";
import TreatmentPackages from "@/components/divine-care/TreatmentPackages";
import TreatmentTimeline from "@/components/divine-care/TreatmentTimeline";
import WhyWait from "@/components/divine-care/WhyWait";
import PainQuiz from "@/components/divine-care/PainQuiz";
import BeforeAfter from "@/components/divine-care/BeforeAfter";
import SuccessStories from "@/components/divine-care/SuccessStories";
import Testimonial from "@/components/divine-care/Testimonial";
import ClinicGallery from "@/components/divine-care/ClinicGallery";
import LivePatientCounter from "@/components/divine-care/LivePatientCounter";
import About from "@/components/divine-care/About";
import FAQ from "@/components/divine-care/FAQ";
import Contact from "@/components/divine-care/Contact";
import Footer from "@/components/divine-care/Footer";
import WhatsAppButton from "@/components/divine-care/WhatsAppButton";
import BackToTop from "@/components/divine-care/BackToTop";
import ScrollProgress from "@/components/divine-care/ScrollProgress";
import StickyMobileCTA from "@/components/divine-care/StickyMobileCTA";
import AppointmentModal from "@/components/divine-care/AppointmentModal";
import PageNavDots from "@/components/divine-care/PageNavDots";
import JsonLd from "@/components/divine-care/JsonLd";
import CookieConsent from "@/components/divine-care/CookieConsent";
import VideoTestimonials from "@/components/divine-care/VideoTestimonials";
import QuickConsult from "@/components/divine-care/QuickConsult";

export default function Home() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd />
      <ScrollProgress />
      <PageNavDots />
      <Header onBookAppointment={() => setAppointmentOpen(true)} />
      <main className="flex-1">
        <Hero onBookAppointment={() => setAppointmentOpen(true)} />
        <UrgencyBanner />
        <HealthTipsTicker />
        <DoctorMessage />
        <Stats />
        <BodyMap />
        <ConditionsGrid />
        <WhyChooseUs />
        <VirtualTour />
        <TreatmentPlan />
        <TreatmentComparison />
        <TreatmentPackages />
        <TreatmentTimeline />
        <WhyWait />
        <PainQuiz />
        <BeforeAfter />
        <SuccessStories />
        <VideoTestimonials />
        <Testimonial />
        <ClinicGallery />
        <LivePatientCounter />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <QuickConsult />
      <WhatsAppButton />
      <BackToTop />
      <StickyMobileCTA />
      <CookieConsent />
      <AppointmentModal open={appointmentOpen} onOpenChange={setAppointmentOpen} />
    </div>
  );
}
