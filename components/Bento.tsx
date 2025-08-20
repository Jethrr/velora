"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconSearch,
  IconChartBar,
  IconDeviceDesktop, 
  IconMessageCircle,
  IconTrendingUp,
  IconUsers,
  IconStar,
  IconSettings,
  IconRefresh,
  IconTarget,
  
  IconEye,
  IconClick,
  IconVersions,
} from "@tabler/icons-react";
import { motion } from "framer-motion";


export function Bento() {
  return (
    <BentoGrid className="md:grid-cols-3 md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      y: 0,
      scale: 1,
    },
    animate: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-[#3EB2FF]/20 flex-col space-y-3 p-2"
    >
      {/* Browser Window */}
      <motion.div
        variants={variants}
        className="flex flex-col rounded-xl border-2 border-[#E6F0FA] bg-white overflow-hidden h-full"
      >
        {/* Browser Header */}
        <div className="flex items-center px-3 py-2 bg-[#F5F7FA] border-b border-[#E6F0FA]">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-1/2 h-4 bg-white rounded-full flex items-center justify-center px-2 text-[8px] text-[#1A1F36]">www.yoursite.com</div>
          </div>
        </div>

        {/* Website Content */}
        <div className="flex flex-col p-3 space-y-3">
          {/* Navigation */}
          <div className="flex justify-between items-center">
            <div className="h-6 w-6 rounded bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF]" />
            <div className="hidden sm:flex space-x-2">
              <div className="w-8 h-2 bg-[#F5F7FA] rounded-full" />
              <div className="w-8 h-2 bg-[#F5F7FA] rounded-full" />
              <div className="w-8 h-2 bg-[#F5F7FA] rounded-full" />
            </div>
            <div className="w-12 h-4 bg-[#3EB2FF] rounded-full" />
          </div>

          {/* Hero Section */}
          <div className="flex flex-col space-y-2 py-2">
            <div className="w-3/4 h-3 bg-[#F5F7FA] rounded-full" />
            <div className="w-1/2 h-2 bg-[#F5F7FA] rounded-full" />
            <div className="flex space-x-2 mt-2">
              <div className="w-20 h-6 bg-[#3EB2FF] rounded-lg" />
              <div className="w-20 h-6 border-2 border-[#E6F0FA] rounded-lg" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2 p-2 bg-[#F5F7FA] rounded-lg">
              <div className="w-4 h-4 rounded bg-[#3EB2FF]" />
              <div className="w-full h-2 bg-white rounded-full" />
            </div>
            <div className="flex items-center space-x-2 p-2 bg-[#F5F7FA] rounded-lg">
              <div className="w-4 h-4 rounded bg-[#3EB2FF]" />
              <div className="w-full h-2 bg-white rounded-full" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex space-x-3">
            <div className="w-1/2 h-12 bg-[#F5F7FA] rounded-lg" />
            <div className="w-1/2 h-12 bg-[#F5F7FA] rounded-lg" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-[#3EB2FF]/20 flex-col space-y-2"
    >
      {/* Ad Campaign Header */}
      <motion.div
        variants={variants}
        className="flex flex-row rounded-lg border border-[#E6F0FA] p-2 items-center space-x-2 bg-white"
      >
        <IconTarget className="h-4 w-4 text-[#3EB2FF]" />
        <div className="w-full bg-[#F5F7FA] h-3 rounded-full" />
        <div className="w-12 h-4 bg-[#3EB2FF] rounded text-xs text-white flex items-center justify-center">
          Active
        </div>
      </motion.div>
      
      {/* Ad Performance Bars */}
      <motion.div
        variants={variants}
        style={{ maxWidth: "85%" }}
        className="flex flex-row rounded-lg border border-[#E6F0FA] p-2 items-center space-x-2 bg-[#F5F7FA] w-full h-4"
      >
        <div className="w-16 text-xs text-[#1A1F36]">Clicks:</div>
        <div className="flex-1 bg-[#E6F0FA] h-2 rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-[#3EB2FF] rounded-full" />
        </div>
      </motion.div>
      
      <motion.div
        variants={variants}
        style={{ maxWidth: "70%" }}
        className="flex flex-row rounded-lg border border-[#E6F0FA] p-2 items-center space-x-2 bg-[#F5F7FA] w-full h-4"
      >
        <div className="w-16 text-xs text-[#1A1F36]">CTR:</div>
        <div className="flex-1 bg-[#E6F0FA] h-2 rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-[#2A9BFF] rounded-full" />
        </div>
      </motion.div>
      
      <motion.div
        variants={variants}
        style={{ maxWidth: "90%" }}
        className="flex flex-row rounded-lg border border-[#E6F0FA] p-2 items-center space-x-2 bg-[#F5F7FA] w-full h-4"
      >
        <div className="w-16 text-xs text-[#1A1F36]">Conv:</div>
        <div className="flex-1 bg-[#E6F0FA] h-2 rounded-full overflow-hidden">
          <div className="w-4/5 h-full bg-[#3EB2FF] rounded-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-dot-[#3EB2FF]/20 flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #3EB2FF, #2A9BFF, #1A1F36, #E6F0FA)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Analytics Dashboard */}
      <div className="flex flex-1 w-full h-full rounded-lg bg-white/90 backdrop-blur-sm p-3">
        <div className="flex flex-col w-full space-y-2">
          {/* Header */}
          <div className="flex items-center space-x-2">
            <IconEye className="h-4 w-4 text-[#3EB2FF]" />
            <div className="text-xs font-semibold text-[#1A1F36]">Real-Time Analytics</div>
          </div>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#F5F7FA] rounded p-2">
              <div className="flex items-center space-x-1">
                <IconEye className="h-3 w-3 text-[#3EB2FF]" />
                <span className="text-xs text-[#1A1F36]">Views</span>
              </div>
              <div className="text-sm font-bold text-[#1A1F36]">1,234</div>
            </div>
            
            <div className="bg-[#F5F7FA] rounded p-2">
              <div className="flex items-center space-x-1">
                <IconClick className="h-3 w-3 text-[#3EB2FF]" />
                <span className="text-xs text-[#1A1F36]">Clicks</span>
              </div>
              <div className="text-sm font-bold text-[#1A1F36]">567</div>
            </div>
            
            <div className="bg-[#F5F7FA] rounded p-2">
              <div className="flex items-center space-x-1">
                <IconVersions className="h-3 w-3 text-[#3EB2FF]" />
                <span className="text-xs text-[#1A1F36]">Conv.</span>
              </div>
              <div className="text-sm font-bold text-[#1A1F36]">89</div>
            </div>
            
            <div className="bg-[#F5F7FA] rounded p-2">
              <div className="flex items-center space-x-1">
                <IconTrendingUp className="h-3 w-3 text-[#3EB2FF]" />
                <span className="text-xs text-[#1A1F36]">Growth</span>
              </div>
              <div className="text-sm font-bold text-[#1A1F36]">+23%</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-[#3EB2FF]/20 p-2"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full h-full">
        <motion.div
          variants={first}
          className="rounded-2xl bg-white p-3 sm:p-4 border border-[#E6F0FA] flex flex-col items-center justify-center"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] flex items-center justify-center">
            <IconStar className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </div>
          <p className="text-[10px] sm:text-sm text-center font-semibold text-[#1A1F36] mt-2 sm:mt-4">
            Customer Reviews
          </p>
          <div className="flex items-center mt-2 sm:mt-4">
            <p className="border border-[#3EB2FF] bg-[#E6F0FA] text-[#3EB2FF] text-[10px] sm:text-xs rounded-full px-2 py-0.5">
              ⭐⭐⭐⭐⭐
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="relative z-20 rounded-2xl bg-white p-3 sm:p-4 border border-[#E6F0FA] flex flex-col items-center justify-center"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] flex items-center justify-center">
            <IconMessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </div>
          <p className="text-[10px] sm:text-sm text-center font-semibold text-[#1A1F36] mt-2 sm:mt-4">
            Testimonials
          </p>
          <div className="flex items-center mt-2 sm:mt-4">
            <p className="border border-[#3EB2FF] bg-[#E6F0FA] text-[#3EB2FF] text-[10px] sm:text-xs rounded-full px-2 py-0.5">
              Real Stories
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={second}
          className="rounded-2xl bg-white p-3 sm:p-4 border border-[#E6F0FA] flex flex-col items-center justify-center"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] flex items-center justify-center">
            <IconUsers className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </div>
          <p className="text-[10px] sm:text-sm text-center font-semibold text-[#1A1F36] mt-2 sm:mt-4">
            Social Proof
          </p>
          <div className="flex items-center mt-2 sm:mt-4">
            <p className="border border-[#3EB2FF] bg-[#E6F0FA] text-[#3EB2FF] text-[10px] sm:text-xs rounded-full px-2 py-0.5">
              Trust Signals
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-[#3EB2FF]/20 flex-col space-y-2"
    >
      {/* Support Ticket */}
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-[#E6F0FA] p-3 items-start space-x-2 bg-white"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] flex items-center justify-center">
          <IconSettings className="h-4 w-4 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-xs text-[#1A1F36] font-semibold">Website Update Request</p>
          <p className="text-xs text-[#1A1F36] opacity-70">Priority: Medium</p>
        </div>
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </motion.div>
      
      {/* Maintenance Status */}
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-lg border border-[#E6F0FA] p-2 items-center justify-between space-x-2 w-4/5 ml-auto bg-white"
      >
        <div className="flex items-center space-x-2">
          <IconRefresh className="h-3 w-3 text-[#3EB2FF]" />
          <p className="text-xs text-[#1A1F36]">System Status: Online</p>
        </div>
        <div className="h-4 w-4 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] shrink-0" />
      </motion.div>
      
      {/* Support Response */}
      <motion.div
        variants={variants}
        className="flex flex-row rounded-lg border border-[#E6F0FA] p-2 items-center space-x-2 bg-white"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] shrink-0" />
        <p className="text-xs text-[#1A1F36]">
          "Your website update has been completed successfully!"
        </p>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Custom Website Design",
    description: (
      <span className="text-sm">
        Clean, mobile-first websites that are fast, easy to navigate, and made to convert.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconDeviceDesktop className="h-4 w-4 text-[#3EB2FF]" />,
  },
  {
    title: "Google Ads Management",
    description: (
      <span className="text-sm">
        Targeted, trackable ad campaigns to bring in high-intent traffic — fast.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconSearch className="h-4 w-4 text-[#3EB2FF]" />,
  },
  {
    title: "Real-Time Analytics",
    description: (
      <span className="text-sm">
        Know who's clicking, where they're coming from, and how your site performs — in real time.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconChartBar className="h-4 w-4 text-[#3EB2FF]" />,
  },
  {
    title: "Review & Feedback Integration",
    description: (
      <span className="text-sm">
        We can add rating systems, testimonials, or comment sections to help your happy customers speak for you.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconMessageCircle className="h-4 w-4 text-[#3EB2FF]" />,
  },
  {
    title: "Ongoing Support (Optional Add-On)",
    description: (
      <span className="text-sm">
        We'll help you keep your site updated, fix bugs, and make sure it's always running smoothly.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconMessageCircle className="h-4 w-4 text-[#3EB2FF]" />,
  }
  
];