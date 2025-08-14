"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar sticky top-0 bg-background z-50 w-full flex justify-between items-center px-4 py-6 max-w-7xl mx-auto"
    >
      <div className="logo flex items-center gap-3">
        <Image 
          src="/logo.png" 
          alt="Velora Logo" 
          width={40} 
          height={40} 
          className="cursor-pointer"
        />
        <div className="text-2xl md:text-3xl font-extrabold text-[#1A1F36] cursor-pointer">
          Velora
        </div>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 text-md font-medium">
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

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-[#1A1F36] hover:text-[#3EB2FF] transition-all duration-300 ease-in-out"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 bg-background border-t border-gray-200 shadow-lg md:hidden"
        >
          <div className="flex flex-col items-start px-4 font-bold py-6 space-y-4 text-md ">
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
            <button 
              onClick={() => scrollToSection('contact')}
              className='cursor-pointer hover:text-[#3EB2FF] transition-all duration-300 ease-in-out'
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}