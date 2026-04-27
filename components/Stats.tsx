"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Enterprise Clients", icon: "🏢", description: "From startups to Fortune 500" },
  { value: 50000, suffix: "+", label: "Learners Upskilled", icon: "🎓", description: "Across 20+ countries" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", icon: "⭐", description: "Verified learner reviews" },
  { value: 500, suffix: "+", label: "Curated Programs", icon: "📚", description: "Across 15+ domains" },
  { value: 96, suffix: "%", label: "Completion Rate", icon: "✅", description: "vs. 42% industry average" },
  { value: 50, suffix: "+", label: "University Partners", icon: "🏛️", description: "IITs, IIMs & global institutions" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const stepValue = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += stepValue;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {target >= 1000 ? count.toLocaleString() : count}
      {suffix}
    </span>
  );
}

export default function Stats() {
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
    <section id="stats" className="py-20 bg-gradient-to-b from-blue-950 to-blue-900">
      <div
        ref={sectionRef}
        className="section-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Proven at Scale
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            By the Numbers
          </h2>
          <p className="text-blue-300 max-w-xl mx-auto">
            Real results from real organizations that transformed their workforce with Accredian Enterprise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-center hover:bg-white/15 hover:border-amber-400/30 transition-all duration-300 group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-white mb-1">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-amber-400 font-semibold text-xs mb-1">{stat.label}</p>
              <p className="text-blue-300/70 text-xs">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
