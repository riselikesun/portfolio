export interface Hobby {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  /** Span columns in bento: 1 | 2 */
  span?: 1 | 2;
}

export const HOBBIES: Hobby[] = [
  {
    id: "3d-printing",
    title: "3D Printing",
    subtitle:
      "Designing functional prototypes, enclosures, and mechanical parts — from CAD to print.",
    image: "/3d-printing.jpeg",
    tags: ["CAD", "FDM", "Prototyping"],
    span: 1,
  },
  {
    id: "rc-aircraft",
    title: "RC Aircraft",
    subtitle:
      "Flying and building fixed-wing RC aircraft — Eclipson D-929 and custom airframes.",
    image: "/controling-rc-aeroplane.jpeg",
    tags: ["Aviation", "Electronics", "Control Systems"],
    span: 2,
  },
  {
    id: "cycling",
    title: "Cycling",
    subtitle:
      "Long-distance rides through terrain, clearing the mind one pedal stroke at a time.",
    image: "/cycling.jpeg",
    tags: ["Endurance", "Outdoors"],
    span: 1,
  },
  {
    id: "aviation-build",
    title: "Aircraft Builds",
    subtitle:
      "Assembling and tuning the Eclipson D-929 — every joint, wing rib, and servo.",
    image: "/eclipson-d-929-aeroplane.jpeg",
    tags: ["Build", "Aerodynamics"],
    span: 1,
  },
  {
    id: "aviation-inspect",
    title: "Pre-Flight Checks",
    subtitle:
      "Methodical inspection and test protocols before every flight — same mindset as code review.",
    image: "/inspecting-ec-planeplane.jpeg",
    tags: ["Aviation", "Process"],
    span: 1,
  },
  {
    id: "mountain-hiking",
    title: "Mountain Hiking",
    subtitle:
      "Summiting peaks and long trail runs — building endurance and perspective.",
    image: "/mountain-hiking.jpeg",
    tags: ["Adventure", "Endurance", "Nature"],
    span: 2,
  },
  {
    id: "cliff-sitting",
    title: "Heights & Horizons",
    subtitle:
      "Finding stillness on cliff edges — a reset between building sprints.",
    image: "/sitting-in-hill-cliff.jpeg",
    tags: ["Outdoors", "Adventure"],
    span: 1,
  },
];
