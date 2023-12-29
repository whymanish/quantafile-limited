import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonials/Testimonial";
import Process from "./components/Process/Process";
import Footer from "./components/Footer/Footer";
import FaqCTA from "./components/FAQs/FaqCTA/FaqCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Testimonial />
      <Process />
      <FaqCTA />
      <Footer />
    </>
  );
}
