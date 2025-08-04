"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className=" py-12 text-[#1A1F36] max-w-7xl mx-auto border border-[#1A1F36]/10 bg-white rounded-2xl ">
      <div className=" max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-bold">Velora</h3>
            </div>
            <p className="text-[#1A1F36]/70 mb-4 max-w-md">
              Powered by small business. Built for growth.
            </p>
            <p className="text-sm text-[#1A1F36]/70">
              Designed with <Heart className="inline h-4 w-4 text-red-500" /> by Velora
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#1A1F36]/70">
              <li>
                <a href="#features" className="hover:text-[#3EB2FF] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#3EB2FF] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#3EB2FF] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-[#1A1F36]/70">
              <li>
                <a href="/terms" className="hover:text-[#3EB2FF] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-[#3EB2FF] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-neutral-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-[#1A1F36]/70 mb-4 md:mb-0">
            © Velora 2025. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#1A1F36]/70 hover:text-[#3EB2FF] hover:bg-neutral-800"
            >
              <Instagram className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-[#1A1F36]/70 hover:text-[#3EB2FF] hover:bg-neutral-800"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
                className="text-[#1A1F36]/70 hover:text-[#3EB2FF] hover:bg-neutral-800"
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 