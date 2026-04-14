import Header from "@/components/divine-care/Header";
import Hero from "@/components/divine-care/Hero";
import DoctorMessage from "@/components/divine-care/DoctorMessage";
import Stats from "@/components/divine-care/Stats";
import ConditionsGrid from "@/components/divine-care/ConditionsGrid";
import WhyChooseUs from "@/components/divine-care/WhyChooseUs";
import TreatmentPlan from "@/components/divine-care/TreatmentPlan";
import Testimonial from "@/components/divine-care/Testimonial";
import About from "@/components/divine-care/About";
import Contact from "@/components/divine-care/Contact";
import Footer from "@/components/divine-care/Footer";
import WhatsAppButton from "@/components/divine-care/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <DoctorMessage />
        <Stats />
        <ConditionsGrid />
        <WhyChooseUs />
        <TreatmentPlan />
        <Testimonial />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
