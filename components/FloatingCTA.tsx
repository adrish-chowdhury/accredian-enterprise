"use client";

export default function FloatingCTA() {
  return (
    <button
      onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-xl hover:shadow-amber-400/30 transition-all duration-200 hover:scale-105 cursor-pointer"
      aria-label="Get a demo"
    >
      <span className="relative">🚀 Get a Demo</span>
    </button>
  );
}
