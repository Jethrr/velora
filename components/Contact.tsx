"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
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
            Let's Build Something That Works
          </h2>
          <p className="text-xl text-[#1A1F36]/70 max-w-3xl mx-auto leading-relaxed">
            If your current website isn't getting results — or you don't have one — we're here to change that.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
               
                <CardTitle className="text-3xl font-bold text-[#1A1F36] mb-4">
                  Get Your Free Website Audit
                </CardTitle>
                <CardDescription className="text-lg text-[#1A1F36]/70">
                  Tell us about your business and we'll provide a personalized recommendation.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#1A1F36] font-semibold">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="border-[#E6F0FA] focus:border-[#3EB2FF] focus:ring-[#3EB2FF] h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business" className="text-[#1A1F36] font-semibold">
                        Business Name *
                      </Label>
                      <Input
                        id="business"
                        placeholder="Your business name"
                        className="border-[#E6F0FA] focus:border-[#3EB2FF] focus:ring-[#3EB2FF] h-12 text-base"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-[#1A1F36] font-semibold">
                      Phone / Line *
                    </Label>
                    <Input
                      id="contact"
                      placeholder="Your phone number or LINE ID"
                      className="border-[#E6F0FA] focus:border-[#3EB2FF] focus:ring-[#3EB2FF] h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#1A1F36] font-semibold">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business goals and current website situation..."
                      className="border-[#E6F0FA] focus:border-[#3EB2FF] focus:ring-[#3EB2FF] min-h-[140px] text-base resize-none"
                    />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer transition-all duration-300">
                    Get My Free Audit
                  </Button>
                  
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 