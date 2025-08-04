"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar sticky top-0 bg-background  z-50 w-full flex justify-between items-center px-4 py-6 max-w-7xl mx-auto"
    >
      <div className="logo">
        <div className="text-3xl font-bold text-[#1A1F36] cursor-pointer">
          Velora
        </div>
      </div>
      
      <div className="links flex items-center gap-4 text-md font-medium">
        <button 
          onClick={() => scrollToSection('services')}
          className='cursor-pointer hover:text-[#3EB2FF] transition-all duration-300 ease-in-out'
        >
          Services
        </button>
          <button 
          onClick={() => scrollToSection('work')}
          className='cursor-pointer hover:text-[#3EB2FF] transition-all duration-300 ease-in-out'
        >
          Works
        </button>
        <button 
          onClick={() => scrollToSection('pricing')}
          className='cursor-pointer hover:text-[#3EB2FF] transition-all duration-300 ease-in-out'
        >
          Pricing
        </button>
        <Button 
          onClick={() => scrollToSection('contact')}
          className='bg-[#3EB2FF] cursor-pointer text-white hover:bg-[#2A9BFF] px-6 py-2 rounded-lg transition-all duration-300 ease-in-out'
        >
          Contact Us
        </Button>
      </div>
    </motion.div>
  )
}