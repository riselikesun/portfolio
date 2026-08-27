export interface Hobby {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  details: string;
  gallery: string[];
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
    details:
      "3D printing is where software thinking meets physical engineering. I design parts in CAD, iterate on tolerances, and print functional components — from custom enclosures for electronics to mechanical brackets for my RC aircraft builds. The feedback loop of design → print → test → refine mirrors exactly how I approach software.",
    gallery: ["/dirty-hands.jpeg"],
    span: 1,
  },
  {
    id: "rc-aircraft",
    title: "RC Aircraft",
    subtitle:
      "Flying and building fixed-wing RC aircraft — Eclipson D-929 and custom airframes.",
    image: "/controling-rc-aeroplane.jpeg",
    tags: ["Aviation", "Electronics", "Control Systems"],
    details:
      "Fixed-wing RC aviation combines aerodynamics, electronics, and real-time control systems into one discipline. I build and fly the Eclipson D-929 — a 3D-printed aircraft — tuning flight controllers, calibrating ESCs, and learning how small changes in center-of-gravity dramatically affect flight characteristics. Every flight is a data point.",
    gallery: ["/eclipson-d-929-aeroplane.jpeg", "/inspecting-ec-planeplane.jpeg"],
    span: 2,
  },
  {
    id: "cycling",
    title: "Cycling",
    subtitle:
      "Long-distance rides through terrain, clearing the mind one pedal stroke at a time.",
    image: "/cycling.jpeg",
    tags: ["Endurance", "Outdoors"],
    details:
      "Cycling is how I decompress. Long-distance rides through mountain roads and open terrain give me uninterrupted thinking time — some of my best architectural decisions have come mid-ride. The physical discipline of endurance training directly translates to how I approach difficult engineering problems: steady effort, no shortcuts.",
    gallery: ["/mountain-hiking.jpeg", "/sitting-in-hill-cliff.jpeg"],
    span: 1,
  },
  {
    id: "aviation-build",
    title: "Aircraft Builds",
    subtitle:
      "Assembling and tuning the Eclipson D-929 — every joint, wing rib, and servo.",
    image: "/eclipson-d-929-aeroplane.jpeg",
    tags: ["Build", "Aerodynamics"],
    details:
      "The Eclipson D-929 is a fully 3D-printed fixed-wing aircraft. Building it means designing servo linkages, calculating wing loading, routing control cables, and programming flight controllers. It's mechanical engineering, electrical engineering, and software — all in one airframe that actually flies.",
    gallery: ["/controling-rc-aeroplane.jpeg", "/inspecting-ec-planeplane.jpeg"],
    span: 1,
  },
  {
    id: "aviation-inspect",
    title: "Pre-Flight Checks",
    subtitle:
      "Methodical inspection and test protocols before every flight — same mindset as code review.",
    image: "/inspecting-ec-planeplane.jpeg",
    tags: ["Aviation", "Process"],
    details:
      "Pre-flight inspection is non-negotiable. Control surface travel, CG balance, battery voltage, motor spin-up, receiver bind — each check has a reason. The discipline is identical to a production deployment checklist: you skip one step and something unexpected happens at the worst possible moment. The habit of systematic verification carries directly into how I review code and ship software.",
    gallery: ["/eclipson-d-929-aeroplane.jpeg", "/controling-rc-aeroplane.jpeg"],
    span: 1,
  },
  {
    id: "mountain-hiking",
    title: "Mountain Hiking",
    subtitle:
      "Summiting peaks and long trail runs — building endurance and perspective.",
    image: "/mountain-hiking.jpeg",
    tags: ["Adventure", "Endurance", "Nature"],
    details:
      "Mountain hiking resets perspective. There's no substitute for physical difficulty — carrying weight uphill for hours, reading terrain, managing energy. The mental clarity that arrives at elevation is real. I plan multi-day routes, track elevation profiles, and have learned that the best views only come after the hardest climbs. That's true everywhere.",
    gallery: ["/sitting-in-hill-cliff.jpeg", "/cycling.jpeg"],
    span: 2,
  },
  {
    id: "cliff-sitting",
    title: "Heights & Horizons",
    subtitle:
      "Finding stillness on cliff edges — a reset between building sprints.",
    image: "/sitting-in-hill-cliff.jpeg",
    tags: ["Outdoors", "Adventure"],
    details:
      "Some of the clearest thinking happens at height, with wind and nothing between you and the horizon. Sitting on cliff edges after a long hike is a deliberate practice — no screens, no notifications, just the kind of quiet that makes big problems feel small and small problems disappear entirely. Every engineering sprint needs this counterweight.",
    gallery: ["/mountain-hiking.jpeg"],
    span: 1,
  },
];

