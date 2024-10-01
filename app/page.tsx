import Card from "@/components/Card";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Clients />
    </div>
  );
}
