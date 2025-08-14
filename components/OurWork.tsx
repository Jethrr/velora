"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ArrowRight, Monitor, Smartphone, Palette, Star } from "lucide-react";
import { useState } from "react";
import { NumberTicker } from "@/components/magicui/number-ticker";

import Image from "next/image";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";

const projects = [
  {
    title: "The Grind Coffee Co.",
    description: "Custom, responsive websites that drive conversions and grow your business. Built with modern technologies and optimized for performance.",
    image: "/projects/coffee.png",
    category: "Development",
    features: ["Goal: Increase foot traffic + online orders", "Result: 1.5x more walk-ins in the first 2 weeks"]
  },


  {
    title: "Lumina Aesthetics",
    description: "Professional branding and visual design that captures your brand essence and communicates your message effectively.",
    image: "/projects/spa.png",
    category: "Design",
    features: ["Goal: Improve mobile site & bookings", "Result: 62% more conversions via Google Ads"]
  },
  {
    title: "Pet Grooming",
    description: "Native and cross-platform mobile applications that engage users and deliver exceptional experiences across all devices.",
    image: "/projects/pet.png",
    category: "Mobile",
    features: ["Goal: Increase foot traffic + online orders", "Result: 1.5x more walk-ins in the first 2 weeks"]
  },
  {
    title: "Pet Grooming",
    description: "Complete online store solutions that convert visitors into customers and maximize your sales potential.",
    image: "/projects/pet.png",
    category: "E-commerce",
    features: ["Goal: Increase foot traffic + online orders", "Result: 1.5x more walk-ins in the first 2 weeks"]
  },
  {
    title: "Pet Grooming",
    description: "Complete online store solutions that convert visitors into customers and maximize your sales potential.",
    image: "/projects/petgrooming2.png",
    category: "E-commerce",
    features: ["Goal: Increase foot traffic + online orders", "Result: 1.5x more walk-ins in the first 2 weeks"]
  },
  {
    title: "Pet Grooming",
    description: "Complete online store solutions that convert visitors into customers and maximize your sales potential.",
    image: "/projects/petgrooming3  .png",
    category: "E-commerce",
    features: ["Goal: Increase foot traffic + online orders", "Result: 1.5x more walk-ins in the first 2 weeks"]
  }

];

export default function OurWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 3 : prevIndex - 1
    );
  };  

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center "
        >
          <div className="mb-6 md:mb-0">
            <Badge className="bg-[#3EB2FF]/20 text-[#1A1F36] border-[#3EB2FF]/30 mb-4">
             Our Works
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F36] mb-4">
              We help our clients to build their dream projects
            </h2>
          </div>
          
          <span 
            className="hidden md:flex items-center justify-center outline-1- transition-all duration-200 text-[#3EB2FF] hover:underline cursor-pointer"
          >
             More
            <ArrowRight className="h-4 w-4 ml-2" />
          </span>
        </motion.div>
        <p className="text-lg text-[#1A1F36]/70  mb-10">
        From concept to launch, we provide end-to-end support, design, development, and strategy to turn your vision into reality.
        </p>

        {/* Carousel Section */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white border-0 rounded-full w-12 h-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white border-0 rounded-full w-12 h-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:scale-105 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E6F0FA] to-[#F5F7FA] flex items-center justify-center">
                      <Image src={project.image} alt={project.title} width={1000} height={1000} className="object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F36]/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F36]/20 to-transparent" />
                    
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-[#1A1F36] mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-[#1A1F36]/70 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex} 
                          variant="secondary" 
                          className="bg-[#E6F0FA] text-[#1A1F36] text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                   
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(projects.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  Math.floor(currentIndex / 3) === index 
                    ? 'bg-[#3EB2FF]' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-10"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3EB2FF] mb-2">
              <NumberTicker value={50} />+
            </div>
            <div className=" text-lg">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3EB2FF] mb-2">
              <NumberTicker value={98} />%
            </div>
            <div className=" text-lg">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3EB2FF] mb-2">
              <NumberTicker value={24} />/7
            </div>
            <div className=" text-lg">Support Available</div>
          </div>
        </motion.div>
        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#1A1F36]/70  font-bold text-center"
          >
            What our client says
          </motion.div>

        {/* Testimonials Section */}  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto "
        >
          <div className=" rounded-2xl p-12 text-center relative">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 opacity-20" />

            
            {/* Avatar */}
            <AnimatedTooltipPreview />
           
            {/* Quote */}
            <blockquote className="relative z-10 text-lg md:text-xl text-[#1A1F36]/80 leading-relaxed mb-4 max-w-3xl mx-auto">
              <span className="text-2xl text-[#3EB2FF] mr-2">"</span>
              Velora made the process simple and smooth. My site looks amazing and I'm getting more calls than ever.
              <span className="text-2xl text-[#3EB2FF] ml-2">"</span>
            </blockquote>
            
            {/* Rating */}
            <div className="flex justify-center mb-6">  
              <div className="flex items-center gap-2"> 
                <div className="flex justify-center items-center gap-2"> 
                  <Star className="text-[#3EB2FF] h-4 w-4" /> <Star className="text-[#3EB2FF] h-4 w-4" /> <Star className="text-[#3EB2FF] h-4 w-4" /> <Star className="text-[#3EB2FF] h-4 w-4" /> <Star className="text-[#3EB2FF] h-4 w-4" />
                </div>
              </div>
            </div>

                         <div className="flex flex-col items-center space-y-1">
               <p className="text-lg font-bold text-[#1A1F36]"> - Jordan A. </p>
               <p className="text-sm font-medium text-[#1A1F36]/70"> Cafe Owner</p>
             </div>

          
          </div>
        </motion.div>

      </div>
    </section>
  );
} 