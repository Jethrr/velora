"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, Rocket } from "lucide-react";
import FeaturesSectionDemo from "./features-section-demo-2";
import { AnimatedGradientTextDemo } from "./AnimatedGradientTextDemo";
export default function Hero() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="px-4 py-10 md:py-20">
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center items-center">
        <AnimatedGradientTextDemo />
        </motion.div>
        
        <h1 className="relative z-10 mx-auto max-w-5xl text-center text-5xl font-bold text-foreground md:text-4xl lg:text-5xl xl:text-6xl">
          {"Websites That Actually Work."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="relative z-10 mx-auto max-w-3xl text-center text-md font-semibold text-primary md:text-2xl lg:text-3xl"
        >
          Ads. Analytics. Conversions. All in one place.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-sm md:text-md lg:text-lg font-normal text-muted-foreground"
        >
          Your business deserves more than a template. At Velora, we build clean, modern websites that bring in real traffic and convert visitors into paying customers.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button 
            size="lg"
            className="velora-shadow cursor-pointer w-60 transform bg-primary px-6 py-2 font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            👉 Get a Free Website Audit
          </Button>
        </motion.div>
        
      
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-8 max-w-7xl mx-auto flex justify-center items-center"
        >
          <FeaturesSectionDemo />
        </motion.div>
      </div>
    </div>
  );
}
