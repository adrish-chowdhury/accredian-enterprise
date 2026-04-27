"use client";

import { useState, useRef, useEffect } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const teamSizes = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–1000 employees",
  "1000+ employees",
];

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
    privacy: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormState>("idle");
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

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.company.trim()) e.company = "Company name is required";
    if (!form.teamSize) e.teamSize = "Please select your team size";
    if (!form.privacy) e.privacy = "You must agree to the privacy policy";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          teamSize: form.teamSize,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", teamSize: "", message: "", privacy: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const Field = ({
    label, name, type = "text", placeholder, required = true,
  }: {
    label: string; name: keyof typeof form; type?: string; placeholder: string; required?: boolean;
  }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={form[name] as string}
        onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-blue-500/20 ${
          errors[name]
            ? "border-red-300 bg-red-50 focus:border-red-400"
            : "border-gray-200 bg-white focus:border-blue-400"
        }`}
      />
      {errors[name] && <p className="mt-1 text-xs text-red-500">{errors[name]}</p>}
    </div>
  );

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-blue-950">
      <div
        ref={sectionRef}
        className="section-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Value prop */}
          <div>
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wider mb-2">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Let&apos;s Build Your Learning Strategy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Book a free 30-minute strategy session with our enterprise learning specialists. We&apos;ll map your skill gaps, recommend programs, and give you a custom ROI estimate.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: "🎯", title: "Personalized Demo", desc: "See the platform with your actual use case" },
                { icon: "📊", title: "Skills Gap Analysis", desc: "Free benchmark report for your team" },
                { icon: "💰", title: "Custom Pricing", desc: "Transparent pricing tailored to your headcount" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center gap-3">
              <div className="text-2xl">⚡</div>
              <div>
                <p className="font-bold text-blue-900 text-sm">Typical response time: under 2 hours</p>
                <p className="text-blue-600 text-xs">Our enterprise team is available Mon–Sat, 9am–7pm IST</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">You&apos;re on the list!</h3>
                <p className="text-gray-600 mb-6">
                  Our team will reach out within 2 hours with your personalized demo link.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-5 py-2.5 rounded-xl bg-blue-800 text-white text-sm font-semibold hover:bg-blue-900 transition-colors cursor-pointer"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black text-gray-900 mb-1">Request a Free Demo</h3>
                <p className="text-gray-500 text-sm mb-6">Fill in the details and we&apos;ll be in touch within 2 hours.</p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" name="name" placeholder="Rahul Sharma" />
                    <Field label="Work Email" name="email" type="email" placeholder="rahul@company.com" />
                  </div>
                  <Field label="Company Name" name="company" placeholder="Acme Corp" />

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Team Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={form.teamSize}
                      onChange={(e) => setForm((f) => ({ ...f, teamSize: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none bg-white ${
                        errors.teamSize
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200 focus:border-blue-400"
                      }`}
                    >
                      <option value="">Select team size…</option>
                      {teamSizes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.teamSize && <p className="mt-1 text-xs text-red-500">{errors.teamSize}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us about your learning goals or current challenges…"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors duration-200 resize-none"
                    />
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.privacy}
                        onChange={(e) => setForm((f) => ({ ...f, privacy: e.target.checked }))}
                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-xs text-gray-600">
                        I agree to the{" "}
                        <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>{" "}
                        and consent to being contacted about Accredian Enterprise.
                      </span>
                    </label>
                    {errors.privacy && <p className="mt-1 text-xs text-red-500">{errors.privacy}</p>}
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                      Something went wrong. Please try again or email us at enterprise@accredian.com
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 rounded-xl bg-blue-800 hover:bg-blue-900 disabled:bg-blue-400 text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Schedule My Free Demo
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
