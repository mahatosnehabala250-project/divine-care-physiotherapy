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
import HealthInsurance from "@/components/divine-care/HealthInsurance";
import PainReliefGuide from "@/components/divine-care/PainReliefGuide";
import WaveSectionDivider from "@/components/divine-care/WaveSectionDivider";
import ErrorBoundary from "@/components/divine-care/ErrorBoundary";

export default function Home() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
      <JsonLd />
      <ScrollProgress />
      <PageNavDots />
      <Header onBookAppointment={() => setAppointmentOpen(true)} />
      <main className="flex-1">
        <ErrorBoundary>
          <Hero onBookAppointment={() => setAppointmentOpen(true)} />
        </ErrorBoundary>
        <ErrorBoundary>
          <UrgencyBanner />
        </ErrorBoundary>
        <ErrorBoundary>
          <HealthTipsTicker />
        </ErrorBoundary>
        <WaveSectionDivider variant="wave1" color="#f0fdfa" />
        <ErrorBoundary>
          <DoctorMessage />
        </ErrorBoundary>
        <WaveSectionDivider variant="curve" color="#0d9488" />
        <ErrorBoundary>
          <Stats />
        </ErrorBoundary>
        <ErrorBoundary>
          <BodyMap />
        </ErrorBoundary>
        <ErrorBoundary>
          <ConditionsGrid />
        </ErrorBoundary>
        <WaveSectionDivider variant="wave2" flip color="#f0fdfa" />
        <ErrorBoundary>
          <WhyChooseUs />
        </ErrorBoundary>
        <ErrorBoundary>
          <VirtualTour />
        </ErrorBoundary>
        <ErrorBoundary>
          <TreatmentPlan />
        </ErrorBoundary>
        <ErrorBoundary>
          <TreatmentComparison />
        </ErrorBoundary>
        <ErrorBoundary>
          <TreatmentPackages />
        </ErrorBoundary>
        <WaveSectionDivider variant="slant" color="#f0fdfa" />
        <ErrorBoundary>
          <HealthInsurance />
        </ErrorBoundary>
        <ErrorBoundary>
          <TreatmentTimeline />
        </ErrorBoundary>
        <ErrorBoundary>
          <WhyWait />
        </ErrorBoundary>
        <ErrorBoundary>
          <PainQuiz />
        </ErrorBoundary>
        <ErrorBoundary>
          <PainReliefGuide />
        </ErrorBoundary>
        <ErrorBoundary>
          <BeforeAfter />
        </ErrorBoundary>
        <ErrorBoundary>
          <SuccessStories />
        </ErrorBoundary>
        <ErrorBoundary>
          <VideoTestimonials />
        </ErrorBoundary>
        <WaveSectionDivider variant="wave3" flip color="#f0fdfa" />
        <ErrorBoundary>
          <Testimonial />
        </ErrorBoundary>
        <ErrorBoundary>
          <ClinicGallery />
        </ErrorBoundary>
        <ErrorBoundary>
          <LivePatientCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <WaveSectionDivider variant="curve" flip color="#f0fdfa" />
        <ErrorBoundary>
          <FAQ />
        </ErrorBoundary>
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
      </main>
      <Footer />
      <ErrorBoundary>
        <QuickConsult />
      </ErrorBoundary>
      <WhatsAppButton />
      <BackToTop />
      <StickyMobileCTA />
      <CookieConsent />
      <AppointmentModal open={appointmentOpen} onOpenChange={setAppointmentOpen} />
    </div>
  );
}
