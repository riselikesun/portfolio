import {HeroSection} from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection src="/risingsun.png" alt="Rising Sun" />
      <div>
        <h2 className="text-4xl font-semibold mt-20">Every sunrise marks a new beginning.</h2>
        <p className="m-12 text-lg text-gray-600">For me, engineering doesn't stop at the keyboard.<br />

          Whether it's designing scalable software, <br />
          building a 3D printed aircraft,<br />
          constructing a swimming pool,<br />
          or creating a product from scratch.</p>
        <p className="m-12 text-lg text-gray-600">

          the process is always the same.</p>
        <p className="m-12 text-lg text-gray-600">

          Understand.
          Design.
          Build.
          Improve.
          Repeat.</p>
        <p className="m-12 text-lg text-gray-600">Building software.</p>
        <p className="m-12 text-lg text-gray-600">Engineering products used by millions.</p>
        <p className="m-12 text-lg text-gray-600">Building doesn't end <br />when I close VS Code.</p>
        <p className="m-12 text-lg text-gray-600">Building machines.</p>
        <p className="m-12 text-lg text-gray-600">Building adventures.</p>
        <p className="m-12 text-lg text-gray-600">Different material, Same mindset</p>
        <p className="m-12 text-lg text-gray-600">Ideas that took shape</p>
        <p className="m-12 text-lg text-gray-600">I like to get my hands dirty trying new tools, I meant litrely as well</p>
        <p className="m-12 text-lg text-gray-600">I explore to stay curious</p>
        <p className="m-12 text-lg text-gray-600">never stop building.</p>
        <p className="m-12 text-lg text-gray-600">Every sunrise
          is another opportunity<br />
          to build something remarkable.<br />
          <br />
          Let's build together.</p>
        <p className="m-12 text-lg text-gray-600">Let's Build something worth remembering</p>
      </div>
    </main>
  );
}
