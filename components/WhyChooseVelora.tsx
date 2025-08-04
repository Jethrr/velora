"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Eye, MessageCircle, Shield, Target } from "lucide-react";
import { AnimatedListDemo } from "./AnimatedList";

const benefits = [
  {
    icon: TrendingUp,
    title: "Conversion-Driven Design",
    description: "Every site we build has a purpose—to get you more business.",
    color: "text-[#3EB2FF]"
  },
  {
    icon: Target,
    title: "Proven Ad Strategy",
    description: "No fluff. We run ads that drive action, not just traffic.",
    color: "text-[#3EB2FF]"
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We'll show you exactly how many people visit your site, what they click, and how they found you.",
    color: "text-[#3EB2FF]"
  },
  {
    icon: MessageCircle,
    title: "Real Support",
    description: "We're real people, not a ticket system. Got a question? Message us.",
    color: "text-[#3EB2FF]"
  },
  {
    icon: Shield,
    title: "100% Satisfaction Guarantee",
    description: "We don't launch until you're happy.",
    color: "text-[#3EB2FF]"
  }
];

export default function WhyChooseVelora() {
  return (
    <section id="why-choose-velora" className="py-24 ">
      <div className="flex flex-col md:flex-row  items-center justify-center max-w-7xl mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20 w-full"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F36] mb-6">
            Why Choose Velora?
          </h2>
          <p className="text-2xl font-semibold text-[#3EB2FF] mb-4">
            Built for small businesses. Focused on results.
          </p>
          <p className="text-xl text-[#1A1F36]/70 max-w-3xl mx-auto leading-relaxed">
            We don't just build websites—we build business growth engines.
          </p>
        </motion.div>
        <AnimatedListDemo />  
      </div>
    </section>
  );
} 