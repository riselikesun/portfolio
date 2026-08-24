"use client";

import { useLayoutEffect, useMemo, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { skills } from "./skills";
import SkillPlanet from "./skill-planet";

gsap.registerPlugin(ScrollTrigger);

type Planet = {
  name: string;
  experience: number;

  size: number;

  radiusX: number;
  radiusY: number;

  speed: number;

  startAngle: number;
  rotation: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const lerp = (min: number, max: number, value: number) =>
  min + (max - min) * value;

function createPlanets(): Planet[] {
  const sorted = [...skills]
    .map((skill) => ({
      ...skill,
      experience: clamp(skill.experience, 1, 10),
    }))
    .sort((a, b) => b.experience - a.experience);

  return sorted.map((skill, index) => {
    const normalized = (skill.experience - 1) / 9;

    const distance = 1 - normalized + index * 0.2;

    /*
     * More experience:
     *
     * larger planet
     * closer orbit
     */
    const radiusX = lerp(230, 520, distance);

    /*
     * The Y radius is deliberately
     * much smaller than X.
     *
     * This makes the orbit clearly
     * elliptical rather than circular.
     */
    const radiusY = radiusX * lerp(0.38, 0.58, normalized);

    /*
     * Slow orbital motion.
     *
     * Approximately:
     *
     * outer: ~120 sec/revolution
     * inner: ~70 sec/revolution
     */
    const speed = lerp(0.052, 0.085, normalized);

    /*
     * Spread initial positions.
     */
    const startAngle = index;

    /*
     * Slightly rotate each ellipse.
     */
    const rotation = 10;

    return {
      name: skill.name,
      experience: skill.experience,

      size: lerp(28, 66, .5 + normalized),

      radiusX,
      radiusY,

      speed,

      startAngle,
      rotation,
    };
  });
}

function getResponsiveScale() {
  if (typeof window === "undefined") {
    return 1;
  }

  const width = window.innerWidth;

  if (width < 480) {
    return 0.42;
  }

  if (width < 640) {
    return 0.5;
  }

  if (width < 768) {
    return 0.62;
  }

  if (width < 1024) {
    return 0.8;
  }

  return 1;
}

export default function SkillsSolarSystem() {
  const sectionRef = useRef<HTMLElement>(null);

  const systemRef = useRef<HTMLDivElement>(null);

  const planetRefs = useRef<(HTMLDivElement | null)[]>([]);

  const planets = useMemo(createPlanets, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    const system = systemRef.current;

    if (!section || !system) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const state = {
        time: 0,
        scale: getResponsiveScale(),
      };

      /*
       * Update one planet.
       *
       * IMPORTANT:
       *
       * These equations are the exact same
       * ellipse represented by the SVG orbit.
       */
      const updatePlanet = (planet: Planet, element: HTMLDivElement) => {
        const angle = planet.startAngle + state.time * planet.speed;

        const radiusX = planet.radiusX * state.scale;

        const radiusY = planet.radiusY * state.scale;

        /*
         * Ellipse equation.
         */
        const localX = Math.cos(angle) * radiusX;

        const localY = Math.sin(angle) * radiusY;

        /*
         * Rotate ellipse.
         */
        const rotation = (planet.rotation * Math.PI) / 180;

        const cos = Math.cos(rotation);

        const sin = Math.sin(rotation);

        const x = localX * cos - localY * sin;

        const y = localX * sin + localY * cos;

        /*
         * Fake depth.
         *
         * Front half:
         * larger + brighter
         *
         * Back half:
         * smaller + dimmer
         */
        const depth = (Math.sin(angle) + 1) / 2;

        const depthScale = lerp(0.72, 1.08, depth);

        const opacity = lerp(0.42, 1, depth);

        /*
         * Behind sun = behind sun.
         */
        const zIndex = depth < 0.5 ? 5 : 30;

        gsap.set(element, {
          x,
          y,
          scale: depthScale,
          opacity,
          zIndex,
        });
      };

      const tick = (_time: number, deltaTime: number) => {
        if (!reducedMotion) {
          state.time += deltaTime / 1000;
        }

        planets.forEach((planet, index) => {
          const element = planetRefs.current[index];

          if (!element) {
            return;
          }

          updatePlanet(planet, element);
        });
      };

      /*
       * Initial position.
       */
      planets.forEach((planet, index) => {
        const element = planetRefs.current[index];

        if (!element) {
          return;
        }

        updatePlanet(planet, element);
      });

      gsap.ticker.add(tick);

      /*
       * Scroll entrance.
       *
       * We DON'T scale the solar system
       * continuously anymore.
       *
       * The geometry stays physically stable.
       */
      if (!reducedMotion) {
        gsap.fromTo(
          system,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 35%",
              scrub: 1,
            },
          },
        );
      }

      const handleResize = () => {
        state.scale = getResponsiveScale();

        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize, {
        passive: true,
      });

      return () => {
        gsap.ticker.remove(tick);

        window.removeEventListener("resize", handleResize);
      };
    }, section);

    return () => ctx.revert();
  }, [planets]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className="relative min-h-[100vh] w-full overflow-hidden bg-[#050505] text-white"
    >
      {/* Heading */}
      <div
        className="absolute left-1/2 top-[9vh] z-50 w-full -translate-x-1/2 px-6 text-center"
      >
        <h2
          id="skills-heading"
          className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl md:text-5xl"
        >
          What I build with.
        </h2>

        <p
          className="mt-3 text-sm text-white/40 sm:text-base"
        >
          A few of the tools that orbit my work.
        </p>
      </div>

      {/* Solar system */}
      <div
        ref={systemRef}
        className="absolute left-1/2 top-[58%] h-[min(100vw,1100px)] w-[min(100vw,1100px)] -translate-x-1/2 -translate-y-1/2 opacity-0"
      >
        {/* Warm solar glow */}
        <div
          aria-hidden
          className=" pointer-events-none absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5B95F]/[0.07] blur-[100px] "
        />

        {/* Actual elliptical orbits */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible "
          viewBox="-600 -600 1200 1200"
          preserveAspectRatio="xMidYMid meet"
        >
          {planets.map((planet) => (
            <ellipse
              key={planet.name}
              cx="0"
              cy="0"
              rx={planet.radiusX}
              ry={planet.radiusY}
              transform={`rotate(${planet.rotation})`}
              fill="none"
              stroke="#ffe9c3"
              strokeOpacity="0.075"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Sun */}
        <div
          className="
            absolute left-1/2 top-1/2 z-20 flex h-28 w-28
            -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#D89432] text-[#21170B] 
            shadow-[0_0_55px_rgba(255,190,90,0.24),0_0_140px_rgba(255,170,50,0.10)] sm:h-36 sm:w-36 md:h-44 md:w-44
          "
        >
          <span
            className="text-2xl font-medium tracking-[0.32em]"
          >
            SKILLS
          </span>
        </div>

        {planets.map((planet, index) => (
          <SkillPlanet
            key={planet.name}
            ref={(element) => {
              planetRefs.current[index] = element;
            }}
            name={planet.name}
            size={planet.size}
            color="#ffc876ff"
          />
        ))}
      </div>
    </section>
  );
}
