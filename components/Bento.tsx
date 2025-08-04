"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconSearch,
        IconChartBar,
  IconClipboardCopy,
  IconFileBroken,
  IconDeviceDesktop, 
  IconMessageCircle,
  IconSignature,
  IconTableColumn,
  IconTools,
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
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-[#E6F0FA] p-2 items-center space-x-2 bg-white"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] shrink-0" />
        <div className="w-full bg-[#F5F7FA] h-4 rounded-full" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-[#E6F0FA] p-2 items-center space-x-2 w-3/4 ml-auto bg-white"
      >
        <div className="w-full bg-[#F5F7FA] h-4 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-[#E6F0FA] p-2 items-center space-x-2 bg-white"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] shrink-0" />
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
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-[#3EB2FF]/20 flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-[#E6F0FA] p-2 items-center space-x-2 bg-[#F5F7FA] w-full h-4"
        ></motion.div>
      ))}
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
      <motion.div className="h-full w-full rounded-lg"></motion.div>
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
          <IconDeviceDesktop className="h-5 w-5 text-white" />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-[#1A1F36] mt-4">
          Custom Website Design
        </p>
        <p className="border border-[#3EB2FF] bg-[#E6F0FA] text-[#3EB2FF] text-xs rounded-full px-2 py-0.5 mt-4">
          Mobile-First
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 border border-[#E6F0FA] flex flex-col items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] flex items-center justify-center">
          <IconSearch className="h-5 w-5 text-white" />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-[#1A1F36] mt-4">
          Google Ads Management
        </p>
        <p className="border border-[#3EB2FF] bg-[#E6F0FA] text-[#3EB2FF] text-xs rounded-full px-2 py-0.5 mt-4">
          High-Intent
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border border-[#E6F0FA] flex flex-col items-center justify-center"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] flex items-center justify-center">
          <IconChartBar className="h-5 w-5 text-white" />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-[#1A1F36] mt-4">
          Real-Time Analytics
        </p>
        <p className="border border-[#3EB2FF] bg-[#E6F0FA] text-[#3EB2FF] text-xs rounded-full px-2 py-0.5 mt-4">
          Track Results
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
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-[#E6F0FA] p-2 items-start space-x-2 bg-white"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] flex items-center justify-center">
          <IconMessageCircle className="h-6 w-10 text-white" />
        </div>
        <p className="text-xs text-[#1A1F36]">
          "Velora transformed our online presence. The website looks amazing and we're getting more customers than ever!"
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-[#E6F0FA] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white"
      >
        <p className="text-xs text-[#1A1F36]">- Happy Client</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#3EB2FF] to-[#2A9BFF] shrink-0" />
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