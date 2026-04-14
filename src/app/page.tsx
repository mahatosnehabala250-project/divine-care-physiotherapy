import Header from "@/components/divine-care/Header";
import Hero from "@/components/divine-care/Hero";
import UrgencyBanner from "@/components/divine-care/UrgencyBanner";
import DoctorMessage from "@/components/divine-care/DoctorMessage";
import Stats from "@/components/divine-care/Stats";
import ConditionsGrid from "@/components/divine-care/ConditionsGrid";
import WhyChooseUs from "@/components/divine-care/WhyChooseUs";
import TreatmentPlan from "@/components/divine-care/TreatmentPlan";
import PainQuiz from "@/components/divine-care/PainQuiz";
import Testimonial from "@/components/divine-care/Testimonial";
import About from "@/components/divine-care/About";
import FAQ from "@/components/divine-care/FAQ";
import Contact from "@/components/divine-care/Contact";
import Footer from "@/components/divine-care/Footer";
import WhatsAppButton from "@/components/divine-care/WhatsAppButton";
import BackToTop from "@/components/divine-care/BackToTop";
import ScrollProgress from "@/components/divine-care/ScrollProgress";
import StickyMobileCTA from "@/components/divine-care/StickyMobileCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <UrgencyBanner />
        <DoctorMessage />
        <Stats />
        <ConditionsGrid />
        <WhyChooseUs />
        <TreatmentPlan />
        <PainQuiz />
        <Testimonial />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <StickyMobileCTA />
    </div>
  );
}
