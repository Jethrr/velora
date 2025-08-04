"use client"
import Hero from "@/components/Hero";
import { Bento } from "@/components/Bento";
import WhyChooseVelora from "@/components/WhyChooseVelora";
import OurWork from "@/components/OurWork";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F36] mb-6">
              What We Do
            </h2>
            <p className="text-xl md:text-2xl text-[#1A1F36]/70 text-center max-w-4xl leading-relaxed">
              We build websites that don't just look good—they work hard for your business.
            </p>
          </div>
          <Bento />
        </motion.div>
      </section>


      {/* Why Choose Velora Section */}
      <WhyChooseVelora />

      {/* Our Work Section */}
      <section id="work">
        <OurWork />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
