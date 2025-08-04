"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$500",
    description: "Perfect for new or small businesses that need a clean, modern web presence.",
    bestFor: "service providers, freelancers, small local businesses",
    features: [
      "1–5 page custom website",
      "Mobile optimization",
      "Click-to-call & contact form",
      "Google Analytics setup",
      "Basic SEO",
      "1 round of revisions"
    ],
    popular: false
  },
  {
    name: "Growth",
    price: "$750",
    description: "Everything in Starter, plus tools to bring in more traffic and turn clicks into customers.",
    bestFor: "businesses that want to actively grow online",
    features: [
      "Up to 7 pages",
      "Google Ads campaign setup (1 ad group, 3 ads)",
      "Custom contact forms or booking widget",
      "Advanced SEO setup",
      "2 rounds of revisions",
      "Performance report after launch"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "$1000+",
    description: "Done-for-you, optimized for scale. Fully managed and tailored to your brand.",
    bestFor: "brands ready to scale, look elite, and dominate online",
    features: [
      "Up to 10 pages",
      "Custom copywriting",
      "Logo and branding cleanup",
      "Google Ads campaign + 1 month of ad management",
      "Review/testimonial widget",
      "Ongoing analytics + strategy session",
      "Priority support + 3 rounds of revisions"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F36] mb-6">
          Our Website Packages
          </h2>
          <p className="text-xl text-[#1A1F36]/70 max-w-3xl mx-auto leading-relaxed">
            Built to grow with your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-[#3EB2FF] to-[#2A9BFF] text-white border-2 border-[#3EB2FF] scale-105' 
                  : 'bg-[#F5F7FA] hover:scale-105'
              }`}>
                <CardHeader className="text-center pb-8">
                  
                  <CardTitle className={`text-3xl font-bold mb-4 ${
                    pkg.popular ? 'text-white' : 'text-[#1A1F36]'
                  }`}>
                    {pkg.name}
                  </CardTitle>
                  <div className="text-5xl font-bold mb-4">
                    <span className={pkg.popular ? 'text-white' : 'text-[#3EB2FF]'}>
                      {pkg.price}
                    </span>
                  </div>
                  <CardDescription className={`text-lg ${pkg.popular ? 'text-white/90' : 'text-[#1A1F36]/70'}`}>
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-sm text-[#1A1F36]/60 italic">
                    Best for: {pkg.bestFor}
                  </div>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className={`h-5 w-5 mt-0.5 ${
                          pkg.popular ? 'text-white' : 'text-[#3EB2FF]'
                        }`} />
                        <span className={`text-base ${
                          pkg.popular ? 'text-white/90' : 'text-[#1A1F36]/80'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                 
                 <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer transition-all duration-300">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-[#1A1F36]/70 mb-4">
            💬 Not sure what you need?
          </p>
          <p className="text-lg text-[#1A1F36]/60 mb-8">
            We'll recommend a package based on your goals — no pressure.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer transition-all duration-300">
            Request a Free Website Audit
          </Button>

        </motion.div>
      </div>
    </section>
  );
} 