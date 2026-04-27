"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Needs Assessment",
    description:
      "We begin with a deep-dive skills gap analysis — benchmarking your team against industry standards and your strategic roadmap. Outputs include a prioritized skills matrix and ROI projection.",
    icon: "🔍",
    duration: "Week 1–2",
    deliverables: ["Skills gap report", "Benchmark analysis", "ROI projection", "Priority skills matrix"],
  },
  {
    step: "02",
    title: "Program Design",
    description:
      "Our academic and industry experts co-design a custom curriculum architecture tailored to your organization's context, industry, and learning objectives. Every module is mapped to measurable outcomes.",
    icon: "📐",
    duration: "Week 2–3",
    deliverables: ["Custom curriculum map", "Learning objectives", "Module outline", "Assessment framework"],
  },
  {
    step: "03",
    title: "Deployment & Onboarding",
    description:
      "White-glove implementation with SSO integration into your existing HR stack. We handle learner onboarding, cohort formation, and live orientation — so your team hits the ground running.",
    icon: "🚀",
    duration: "Week 3–4",
    deliverables: ["SSO & HR integration", "Learner onboarding", "Cohort formation", "Live orientation"],
  },
  {
    step: "04",
    title: "Track & Optimize",
    description:
      "Ongoing real-time dashboards let you monitor learner progress, engagement, and completion. Monthly business reviews with your dedicated Customer Success Manager ensure continuous ROI optimization.",
    icon: "📈",
    duration: "Ongoing",
    deliverables: ["Real-time dashboards", "Monthly reviews", "ROI monitoring", "Continuous optimization"],
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.remove("section-hidden");
              el.classList.add("section-visible");
            }, i * 150);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div
        ref={sectionRef}
        className="section-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Implementation
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Live in 2 Weeks, Not 2 Months
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our battle-tested onboarding methodology gets your enterprise learning program up and running fast — without disrupting your existing workflows.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.step}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="section-hidden relative z-10"
              >
                {/* Step number circle */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center shadow-lg shadow-blue-200 mb-3">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <span className="text-xs font-black text-blue-400 uppercase tracking-widest">{step.step}</span>
                </div>

                {/* Card */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 h-full hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-black text-gray-900">{step.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold whitespace-nowrap">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{step.description}</p>
                  <div className="space-y-1.5">
                    {step.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-gray-700">
                        <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-600 mb-4">
            Ready to transform your workforce? Most clients see measurable results within 90 days.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-800 hover:bg-blue-900 text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Start Your Journey
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
