"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Jordan A.",
    designation: "Cafe Owner",
    image:
      "/projects/profile.jpeg",
  },
 
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-2 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
