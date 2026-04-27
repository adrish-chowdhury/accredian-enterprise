const footerLinks = {
  Solutions: [
    "Enterprise Learning",
    "Custom Programs",
    "Analytics & Reporting",
    "HR Integrations",
    "Certificates",
  ],
  Programs: [
    "Data Science & AI",
    "Product Management",
    "Leadership",
    "Business Analytics",
    "Cloud Computing",
  ],
  Company: [
    "About Accredian",
    "Careers",
    "Blog",
    "Press",
    "Contact Us",
  ],
  Resources: [
    "Case Studies",
    "Whitepapers",
    "Webinars",
    "L&D Playbook",
    "API Documentation",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center">
                <span className="text-white font-black text-sm">A</span>
              </div>
              <span className="font-bold text-lg">
                Accredian{" "}
                <span className="text-amber-400 text-sm">Enterprise</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The operating system for ambitious learning organizations. Build the skills your enterprise needs to win.
            </p>
            <div className="flex gap-3">
              {["LinkedIn", "Twitter", "YouTube"].map((social) => (
                <button
                  key={social}
                  className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-blue-700 flex items-center justify-center text-xs text-gray-400 hover:text-white transition-all duration-200 cursor-pointer font-bold"
                  aria-label={social}
                >
                  {social[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-sm text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
