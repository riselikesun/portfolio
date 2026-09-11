"use client";

import { forwardRef } from "react";

type SkillPlanetProps = {
  name: string;
  size: number;
  color: string;
};

const SkillPlanet = forwardRef<
  HTMLDivElement,
  SkillPlanetProps
>(({ name, size, color }, ref) => {
  return (
    <div
      ref={ref}
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        flex
        -translate-x-1/2
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-white/20
        shadow-[0_0_24px_rgba(255,190,90,0.12)]
        will-change-transform
      "
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    >
      <span
        className="
          select-none
          text-center
          px-1
          text-[9px]
          font-medium
          tracking-tight
          text-[#17110A]
          sm:text-[10px]
          md:text-xs
        "
      >
        {name}
      </span>
    </div>
  );
});

SkillPlanet.displayName = "SkillPlanet";

export default SkillPlanet;