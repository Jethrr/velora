"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Target, BarChart3, MessageSquare, Wrench } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Custom Website Design",
    description: "Clean, mobile-first websites that are fast, easy to navigate, and made to convert.",
    color: "text-[#3EB2FF]"
  },
  {
    icon: Target,
    title: "Google Ads Management",
    description: "Targeted, trackable ad campaigns to bring in high-intent traffic — fast.",
    color: "text-[#3EB2FF]"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Know who's clicking, where they're coming from, and how your site performs — in real time.",
    color: "text-[#3EB2FF]"
  },
  {
    icon: MessageSquare,
    title: "Review & Feedback Integration",
    description: "We can add rating systems, testimonials, or comment sections to help your happy customers speak for you.",
    color: "text-[#3EB2FF]"
  },
  {
    icon: Wrench,
    title: "Ongoing Support (Optional Add-On)",
    description: "Need help updating your site later? We've got your back—just reach out anytime.",
    color: "text-[#3EB2FF]"
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F36] mb-6">
            💡 What We Do
          </h2>
          <p className="text-xl text-[#1A1F36]/70 max-w-3xl mx-auto leading-relaxed">
            We build websites that don't just look good—they work hard for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#E6F0FA] to-[#F5F7FA] group-hover:from-[#3EB2FF]/20 group-hover:to-[#2A9BFF]/20 transition-all duration-300">
                      <service.icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-[#1A1F36] mb-2">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#1A1F36]/70 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 