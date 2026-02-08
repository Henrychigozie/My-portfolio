import React from "react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building fast, scalable, and accessible web applications using React and modern CSS. Clean architecture with performance and SEO at the core.",
    icon: (
      <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ["React & Next.js", "TypeScript", "Performance Optimization"],
  },
  {
    title: "UI / UX Design",
    description:
      "Designing intuitive user experiences and elegant interfaces that convert users into customers through clarity and usability.",
    icon: (
      <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M12 4h9M4 9h16M4 15h16" />
      </svg>
    ),
    features: ["Wireframes", "Prototypes", "Design Systems"],
  },
  {
    title: "Tech Strategy (DREAM)",
    description:
      "Strategic technical leadership to help brands scale. From MVP planning to automation and long-term growth execution.",
    icon: (
      <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ["MVP Strategy", "Automation", "Product Roadmaps"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-[#020617] via-[#020617] to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-emerald-400 font-mono text-xs tracking-[0.35em] uppercase mb-4">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            How I Can <span className="text-emerald-400">Help</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            I blend modern engineering, refined design, and strategic thinking to
            build digital products that deliver measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.03]
              backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40
              hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.25)]"
            >
              {/* Subtle Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4 group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-xs text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-12 text-center shadow-2xl shadow-emerald-900/30">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have a project in mind?
          </h3>
          <p className="text-emerald-100 max-w-xl mx-auto mb-8">
            Let’s transform your idea into a polished digital experience built
            for growth and impact.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-emerald-700 font-extrabold rounded-xl
            hover:scale-105 transition-transform shadow-lg"
          >
            Let’s Work Together
          </a>

          {/* Decorative Blur */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Services;
