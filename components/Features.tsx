"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    id: "curriculum",
    icon: "🎓",
    title: "World-Class Curriculum",
    tagline: "Co-designed with IITs, IIMs & Global Leaders",
    description:
      "Every program is rigorously co-designed with top academic and industry experts ensuring real-world applicability. Our curriculum committee includes practitioners from Google, Amazon, and McKinsey.",
    highlights: ["IIT & IIM faculty involvement", "Industry practitioner reviews", "Updated every semester", "Case studies from real companies"],
    color: "from-blue-500 to-blue-700",
    lightColor: "bg-blue-50 border-blue-200",
    textColor: "text-blue-700",
  },
  {
    id: "dashboard",
    icon: "📊",
    title: "Enterprise L&D Dashboard",
    tagline: "Real-time analytics & ROI reporting",
    description:
      "One command center for all learning insights. Track individual progress, team cohorts, skill gaps, and calculate quantifiable ROI — presented in board-ready reports.",
    highlights: ["Real-time learner tracking", "Skill gap heatmaps", "ROI calculators", "Exportable reports"],
    color: "from-purple-500 to-purple-700",
    lightColor: "bg-purple-50 border-purple-200",
    textColor: "text-purple-700",
  },
  {
    id: "mentors",
    icon: "🧑‍💼",
    title: "Expert Mentor Network",
    tagline: "500+ practitioners, 1:1 live sessions",
    description:
      "Access to India's largest network of industry mentors spanning AI/ML, Data Science, Product Management, and Leadership. Every learner gets dedicated mentorship hours.",
    highlights: ["500+ vetted mentors", "1:1 live sessions", "Industry practitioners", "On-demand Q&A"],
    color: "from-amber-500 to-orange-600",
    lightColor: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
  },
  {
    id: "cohorts",
    icon: "👥",
    title: "Live Cohort Learning",
    tagline: "94%+ completion via structured collaboration",
    description:
      "Peer learning cohorts drive accountability and completion rates 2x above industry average. Live sessions, group projects, and leaderboards create a vibrant learning community.",
    highlights: ["Structured peer groups", "Weekly live sessions", "Leaderboards & badges", "Group projects"],
    color: "from-green-500 to-emerald-700",
    lightColor: "bg-green-50 border-green-200",
    textColor: "text-green-700",
  },
  {
    id: "custom",
    icon: "🛠️",
    title: "Custom Learning Paths",
    tagline: "Tailored to your skill gaps & goals",
    description:
      "No two organizations are alike. Our L&D specialists work with your team to design bespoke learning journeys mapped to your strategic objectives, industry context, and team competencies.",
    highlights: ["Skills gap analysis", "Bespoke curriculum design", "Industry-specific cases", "Flexible scheduling"],
    color: "from-rose-500 to-pink-700",
    lightColor: "bg-rose-50 border-rose-200",
    textColor: "text-rose-700",
  },
  {
    id: "credentials",
    icon: "🏅",
    title: "Accredited Certificates",
    tagline: "Verifiable, shareable, career-defining",
    description:
      "Globally recognized credentials from IITs, IIMs, and partner universities. Blockchain-verified certificates shareable on LinkedIn and recognized by top employers worldwide.",
    highlights: ["IIT / IIM certificates", "Blockchain verification", "LinkedIn integration", "Globally recognized"],
    color: "from-indigo-500 to-violet-700",
    lightColor: "bg-indigo-50 border-indigo-200",
    textColor: "text-indigo-700",
  },
  {
    id: "ai",
    icon: "🤖",
    title: "AI-Powered Personalization",
    tagline: "Adaptive engine for maximum engagement",
    description:
      "Our proprietary AI engine analyzes each learner's pace, strengths, and weak spots — then dynamically adjusts content sequencing to maximize retention and engagement.",
    highlights: ["Adaptive content delivery", "Personalized recommendations", "Weak-spot detection", "Engagement optimization"],
    color: "from-cyan-500 to-blue-600",
    lightColor: "bg-cyan-50 border-cyan-200",
    textColor: "text-cyan-700",
  },
  {
    id: "integrations",
    icon: "🔗",
    title: "Seamless HR Integration",
    tagline: "Works with Workday, SAP SuccessFactors & more",
    description:
      "Zero-friction deployment into your existing HR stack. Native integrations with Workday, SAP SuccessFactors, Darwinbox, and Zoho People — with SSO and SCIM provisioning.",
    highlights: ["Workday & SAP ready", "SSO & SCIM", "Darwinbox & Zoho", "API-first architecture"],
    color: "from-teal-500 to-teal-700",
    lightColor: "bg-teal-50 border-teal-200",
    textColor: "text-teal-700",
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
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

  const feat = features[active];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div
        ref={sectionRef}
        className="section-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Platform Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Everything Your L&D Team Needs
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Eight powerful capabilities working together as one operating system for enterprise learning.
          </p>
        </div>

        {/* Tabs — scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 cursor-pointer whitespace-nowrap ${
                i === active
                  ? `bg-gradient-to-r ${f.color} text-white border-transparent shadow-md`
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-200 hover:text-blue-700"
              }`}
            >
              <span>{f.icon}</span>
              {f.title}
            </button>
          ))}
        </div>

        {/* Active feature detail */}
        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border mb-4 ${feat.lightColor} ${feat.textColor}`}
            >
              <span>{feat.icon}</span>
              {feat.tagline}
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">{feat.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{feat.description}</p>
            <div className="grid grid-cols-2 gap-3">
              {feat.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2">
                  <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${feat.textColor}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side */}
          <div className={`rounded-2xl bg-gradient-to-br ${feat.color} p-8 flex flex-col justify-center items-center text-center text-white`}>
            <div className="text-6xl mb-4">{feat.icon}</div>
            <h4 className="text-xl font-bold mb-2">{feat.title}</h4>
            <p className="text-white/80 text-sm">{feat.tagline}</p>
            <div className="mt-6 flex gap-3">
              {feat.highlights.slice(0, 2).map((h) => (
                <span key={h} className="px-3 py-1 rounded-full bg-white/20 text-xs font-medium">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature grid (all 8 as cards) */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActive(i)}
              className={`feature-card p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                i === active
                  ? `${f.lightColor} ${f.textColor} shadow-md`
                  : "bg-white border-gray-100 text-gray-700 hover:border-blue-100"
              }`}
            >
              <div className="text-2xl mb-2">{f.icon}</div>
              <p className="text-sm font-bold">{f.title}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
