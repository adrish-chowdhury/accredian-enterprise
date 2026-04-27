"use client";

import { useEffect, useRef } from "react";

const academicPartners = [
  { name: "IIT Delhi", short: "IITD", emoji: "🏛️", type: "Premier IIT" },
  { name: "IIT Bombay", short: "IITB", emoji: "🏛️", type: "Premier IIT" },
  { name: "IIT Kanpur", short: "IITK", emoji: "🏛️", type: "Premier IIT" },
  { name: "IIT Madras", short: "IITM", emoji: "🏛️", type: "Premier IIT" },
  { name: "IIT Roorkee", short: "IITR", emoji: "🏛️", type: "Premier IIT" },
  { name: "IIM Bangalore", short: "IIMB", emoji: "🎓", type: "Top IIM" },
  { name: "IIM Kozhikode", short: "IIMK", emoji: "🎓", type: "Top IIM" },
  { name: "IIM Lucknow", short: "IIML", emoji: "🎓", type: "Top IIM" },
  { name: "NUS Singapore", short: "NUS", emoji: "🌏", type: "Global University" },
  { name: "MIT xPRO", short: "MIT", emoji: "🔬", type: "Global University" },
  { name: "Great Lakes", short: "GLIM", emoji: "🎓", type: "B-School" },
  { name: "XLRI Jamshedpur", short: "XLRI", emoji: "🎓", type: "Premier B-School" },
];

const industryPartners = [
  { name: "Google", emoji: "🔵", color: "bg-blue-50 border-blue-100" },
  { name: "Microsoft", emoji: "🪟", color: "bg-cyan-50 border-cyan-100" },
  { name: "Amazon AWS", emoji: "🟠", color: "bg-orange-50 border-orange-100" },
  { name: "IBM", emoji: "💙", color: "bg-blue-50 border-blue-100" },
  { name: "Tableau", emoji: "📊", color: "bg-indigo-50 border-indigo-100" },
  { name: "Salesforce", emoji: "☁️", color: "bg-sky-50 border-sky-100" },
  { name: "NVIDIA", emoji: "🟢", color: "bg-green-50 border-green-100" },
  { name: "Coursera", emoji: "📘", color: "bg-blue-50 border-blue-100" },
];

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("section-hidden");
          el.classList.add("section-visible");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners" className="py-20 bg-white">
      <div
        ref={sectionRef}
        className="section-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Academic & Industry Network
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Backed by the Best
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our programs carry the credibility of India&apos;s premier institutions and are aligned with the skills requirements of global technology leaders.
          </p>
        </div>

        {/* Academic partners */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider text-center mb-6">
            Academic Partners
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {academicPartners.map((p) => (
              <div
                key={p.name}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 text-center hover:shadow-md hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{p.emoji}</div>
                <p className="font-black text-blue-900 text-sm">{p.short}</p>
                <p className="text-blue-600/70 text-xs mt-0.5">{p.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry partners */}
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider text-center mb-6">
            Industry Partners & Certifications
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {industryPartners.map((p) => (
              <div
                key={p.name}
                className={`${p.color} border rounded-2xl p-4 text-center hover:shadow-md transition-all duration-300 group`}
              >
                <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">{p.emoji}</div>
                <p className="font-bold text-gray-700 text-xs">{p.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 text-center">
          <p className="text-white font-bold text-lg mb-1">
            50+ universities · 20+ industry certifications
          </p>
          <p className="text-blue-300 text-sm">
            Every credential is verifiable, globally recognized, and career-defining.
          </p>
        </div>
      </div>
    </section>
  );
}
