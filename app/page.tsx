import Card from "@/components/Card";
import ContactInfo from "@/components/ContactInfo";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/Form";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ROICalculator from "@/components/ROICalculator";
import { faqs } from "@/data";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <ROICalculator />
      <CTA />
      <FAQ faqs={faqs} title="Frequently Asked Questions" />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </div>
  );
}
