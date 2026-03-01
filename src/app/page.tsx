import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { BookDemo } from "@/components/BookDemo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <BookDemo />
      <Footer />
    </>
  );
}
