import Card from "@/components/Card";
import Clients from "@/components/Clients";
import ContactInfo from "@/components/ContactInfo";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import { faqs } from "@/data";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Pricing />
      <CTA />
      <FAQ faqs={faqs} title="Redtail Telematics Frequently Asked Questions" />
      <ContactInfo />
      <Footer />
    </div>
  );
}
