"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Solutions", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Programs", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-800 flex items-center justify-center">
                <span className="text-white font-black text-sm">A</span>
              </div>
              <span
                className={`font-bold text-lg transition-colors duration-300 ${
                  scrolled ? "text-blue-900" : "text-white"
                }`}
              >
                Accredian{" "}
                <span className={`text-amber-500 text-sm font-semibold ${scrolled ? "" : "text-amber-400"}`}>
                  Enterprise
                </span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer hover:text-amber-500 ${
                    scrolled ? "text-gray-600" : "text-white/90"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                  scrolled
                    ? "text-blue-800 hover:bg-blue-50"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="text-sm font-semibold px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                Get a Demo
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "w-3" : "w-5"}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                <button className="w-full px-3 py-2 text-blue-800 border border-blue-200 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors cursor-pointer">
                  Sign In
                </button>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full px-3 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                >
                  Get a Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
