"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Accredian Enterprise completely transformed how we think about team development. We saw a 40% improvement in velocity on our data-driven product teams within just one quarter.",
    name: "Arjun Mehta",
    title: "Chief Product Officer",
    company: "Razorpay",
    avatar: "AM",
    color: "bg-blue-600",
    metric: "40% velocity improvement",
    metricIcon: "🚀",
  },
  {
    quote:
      "The curriculum quality is genuinely elite. Our engineers finally have access to the same caliber of education as IIT graduates — with the added benefit of 1:1 mentorship from industry practitioners.",
    name: "Priya Sharma",
    title: "VP of Engineering",
    company: "PhonePe",
    avatar: "PS",
    color: "bg-purple-600",
    metric: "94% learner satisfaction",
    metricIcon: "⭐",
  },
  {
    quote:
      "Rolling out Accredian across 12 geographies was seamless. The 96% completion rates speak for themselves — this is not your typical corporate e-learning platform.",
    name: "Vikram Nair",
    title: "Head of Learning & Development",
    company: "Infosys BPM",
    avatar: "VN",
    color: "bg-green-600",
    metric: "96% completion rate",
    metricIcon: "✅",
  },
  {
    quote:
      "We upskilled 500 employees in data science in under 6 months. The ROI was evident within the first quarter — projects that once required external consultants are now handled in-house.",
    name: "Sneha Kapoor",
    title: "CHRO",
    company: "Wipro Digital",
    avatar: "SK",
    color: "bg-amber-600",
    metric: "500 employees in 6 months",
    metricIcon: "📈",
  },
  {
    quote:
      "The enterprise dashboard alone is worth it. Our L&D team can now show the board real ROI numbers — something we struggled with for years. The platform essentially runs itself.",
    name: "Rahul Gupta",
    title: "Director, People Operations",
    company: "Paytm",
    avatar: "RG",
    color: "bg-rose-600",
    metric: "Real-time ROI reporting",
    metricIcon: "📊",
  },
];

const companyLogos = ["Razorpay", "PhonePe", "Infosys BPM", "Wipro Digital", "Paytm", "HDFC Bank", "TCS", "HCL"];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div
        ref={sectionRef}
        className="section-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Client Success Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Hear directly from L&D leaders and CHROs who transformed their organizations with Accredian Enterprise.
          </p>
        </div>

        {/* Scrolling logo banner */}
        <div className="flex gap-8 overflow-x-auto pb-4 mb-12 items-center">
          {companyLogos.map((c) => (
            <div key={c} className="flex-shrink-0 px-5 py-3 rounded-xl bg-white border border-gray-100 shadow-sm">
              <span className="font-bold text-gray-400 text-sm whitespace-nowrap">{c}</span>
            </div>
          ))}
        </div>

        {/* Main testimonial */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Feature testimonial */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-6 right-6 text-6xl opacity-20 font-serif">&ldquo;</div>
            <div className="relative z-10">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 mb-6`}>
                <span>{t.metricIcon}</span>
                {t.metric}
              </div>
              <blockquote className="text-lg leading-relaxed text-white/90 mb-6 min-h-[80px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-bold text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-white/60 text-sm">
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Selector panel */}
          <div className="flex flex-col gap-3">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                onClick={() => {
                  setActive(i);
                  if (intervalRef.current) clearInterval(intervalRef.current);
                }}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  i === active
                    ? "bg-blue-800 text-white border-blue-700 shadow-md"
                    : "bg-white text-gray-700 border-gray-100 hover:border-blue-200 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center font-bold text-xs text-white flex-shrink-0`}>
                    {item.avatar}
                  </div>
                  <div>
                    <p className={`text-xs font-bold ${i === active ? "text-white" : "text-gray-900"}`}>{item.name}</p>
                    <p className={`text-xs ${i === active ? "text-white/70" : "text-gray-500"}`}>{item.company}</p>
                  </div>
                  <span className={`ml-auto text-sm ${i === active ? "text-amber-400" : "text-gray-300"}`}>
                    {item.metricIcon}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === active ? "w-6 bg-blue-800" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
