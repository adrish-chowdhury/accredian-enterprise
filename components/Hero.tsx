"use client";

import { useEffect, useRef } from "react";

const badges = [
  { icon: "🎓", label: "IIT & IIM Certified" },
  { icon: "⚡", label: "2-Week Implementation" },
  { icon: "📊", label: "Real-Time Analytics" },
  { icon: "🔒", label: "Enterprise SSO" },
];

const metrics = [
  { label: "Active Learners", value: "2,847", change: "+12%", color: "text-green-500" },
  { label: "Avg. Score", value: "91.4", change: "+5.2", color: "text-blue-500" },
  { label: "Completion Rate", value: "96%", change: "+8%", color: "text-purple-500" },
];

const domains = [
  { name: "Data Science & AI", pct: 89, color: "bg-blue-500" },
  { name: "Product Management", pct: 76, color: "bg-purple-500" },
  { name: "Leadership", pct: 92, color: "bg-amber-500" },
];

export default function Hero() {
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      barRefs.current.forEach((bar, i) => {
        if (bar) bar.style.width = `${domains[i].pct}%`;
      });
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-800/20 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-indigo-700/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-900/10 border border-blue-700/20" />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              India&apos;s #1 Enterprise Learning Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Build the Skills Your{" "}
              <span className="relative">
                <span className="text-amber-400">Enterprise</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6C40 2 80 1 100 2C120 3 160 5 198 3"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Needs to Win
            </h1>

            <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-xl">
              Partner with premier IITs & IIMs to upskill your workforce at scale.
              Structured cohorts, expert mentors, and real-time ROI analytics — all in one platform.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-white text-xs font-medium backdrop-blur-sm"
                >
                  <span>{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-amber-500/25 hover:scale-105"
              >
                Schedule Free Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                See Platform Tour
              </a>
            </div>

            <p className="mt-4 text-blue-400 text-xs">
              Trusted by <strong className="text-white">500+</strong> enterprise clients ·{" "}
              <strong className="text-white">50,000+</strong> learners upskilled
            </p>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Q4 Learning Report</p>
                  <h3 className="text-white font-bold text-base">Team Performance Dashboard</h3>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              {/* KPI tiles */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {metrics.map((m) => (
                  <div key={m.label} className="bg-white/10 rounded-xl p-3 border border-white/10">
                    <p className="text-white/60 text-xs mb-1">{m.label}</p>
                    <p className="text-white font-bold text-lg">{m.value}</p>
                    <p className={`text-xs font-semibold ${m.color}`}>{m.change}</p>
                  </div>
                ))}
              </div>

              {/* Domain progress bars */}
              <div className="space-y-3">
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Domain Performance</p>
                {domains.map((d, i) => (
                  <div key={d.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/80 font-medium">{d.name}</span>
                      <span className="text-white/60">{d.pct}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        ref={(el) => { barRefs.current[i] = el; }}
                        className={`h-full ${d.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <p className="text-white/50 text-xs">Last updated: just now</p>
                <button className="text-xs text-amber-400 font-semibold hover:text-amber-300 transition-colors cursor-pointer">
                  View Full Report →
                </button>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2 border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">96% Completion</p>
                <p className="text-xs text-gray-500">Industry avg: 42%</p>
              </div>
            </div>

            {/* Floating partner badge */}
            <div className="absolute -top-4 -right-4 bg-blue-800 rounded-xl px-3 py-2 shadow-xl flex items-center gap-2">
              <span className="text-lg">🏛️</span>
              <div>
                <p className="text-white text-xs font-bold">IIT Delhi</p>
                <p className="text-blue-300 text-xs">Academic Partner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
