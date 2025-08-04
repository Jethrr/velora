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
      {/* Website Header */}
      <motion.div
        variants={variants}
        className="flex flex-row rounded-lg border border-[#E6F0FA] p-2 items-center space-x-2 bg-white"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] shrink-0" />
        <div className="w-full bg-[#F5F7FA] h-4 rounded-full" />
        <div className="w-8 h-4 bg-[#3EB2FF] rounded" />
      </motion.div>
      
      {/* Hero Section */}
      <motion.div
        variants={variantsSecond}
        className="flex flex-col rounded-lg border border-[#E6F0FA] p-3 space-y-2 bg-white"
      >
        <div className="w-3/4 bg-[#F5F7FA] h-3 rounded-full" />
        <div className="w-1/2 bg-[#F5F7FA] h-2 rounded-full" />
        <div className="w-16 h-6 bg-[#3EB2FF] rounded" />
      </motion.div>
      
      {/* Content Section */}
      <motion.div
        variants={variants}
        className="flex flex-row rounded-lg border border-[#E6F0FA] p-2 items-center space-x-2 bg-white"
      >
        <div className="w-8 h-8 rounded bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] shrink-0" />
        <div className="w-full bg-[#F5F7FA] h-4 rounded-full" />
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
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-[#3EB2FF]/20 flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border border-[#E6F0FA] flex flex-col items-center justify-center"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] flex items-center justify-center">
          <IconStar className="h-5 w-5 text-white" />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-[#1A1F36] mt-4">
          Customer Reviews
        </p>
        <p className="border border-[#3EB2FF] bg-[#E6F0FA] text-[#3EB2FF] text-xs rounded-full px-2 py-0.5 mt-4">
          ⭐⭐⭐⭐⭐
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 border border-[#E6F0FA] flex flex-col items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] flex items-center justify-center">
          <IconMessageCircle className="h-5 w-5 text-white" />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-[#1A1F36] mt-4">
          Testimonials
        </p>
        <p className="border border-[#3EB2FF] bg-[#E6F0FA] text-[#3EB2FF] text-xs rounded-full px-2 py-0.5 mt-4">
          Real Stories
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border border-[#E6F0FA] flex flex-col items-center justify-center"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] flex items-center justify-center">
          <IconUsers className="h-5 w-5 text-white" />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-[#1A1F36] mt-4">
          Social Proof
        </p>
        <p className="border border-[#3EB2FF] bg-[#E6F0FA] text-[#3EB2FF] text-xs rounded-full px-2 py-0.5 mt-4">
          Trust Signals
        </p>
      </motion.div>
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