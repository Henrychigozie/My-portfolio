import React from "react";

const services = [
  {
    title: "Frontend Engineering",
    description:
      "Crafting fast, scalable, and conversion-focused web applications using modern technologies. Every interface is engineered for performance, clarity, and business growth.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ["React & Next.js", "TypeScript Architecture", "Speed Optimization"],
  },
  {
    title: "Product & UI Design",
    description:
      "Designing elegant, intuitive digital experiences that elevate brand perception and increase user engagement through strategic visual storytelling.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20h9M12 4h9M4 9h16M4 15h16" />
      </svg>
    ),
    features: ["Interface Design", "UX Strategy", "Design Systems"],
  },
  {
    title: "Technical Strategy",
    description:
      "Providing technical leadership and strategic planning to help startups and brands scale efficiently with sustainable, future-proof systems.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ["Startup MVP Planning", "Automation Systems", "Growth Roadmaps"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-32 bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#020617] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/5 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">

          <span className="text-emerald-400 tracking-[0.35em] uppercase text-xs font-semibold">
            Services
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            Expertise That Drives{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Results
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-400 leading-relaxed">
            I combine engineering excellence, refined design, and strategic thinking
            to create digital experiences that strengthen brands and accelerate growth.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="group relative p-10 rounded-3xl
              bg-white/[0.02]
              border border-white/5
              backdrop-blur-xl
              transition-all duration-500
              hover:border-emerald-500/40
              hover:-translate-y-3
              hover:shadow-[0_20px_80px_-20px_rgba(16,185,129,0.25)]"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent" />

              <div className="relative z-10">

                {/* Icon */}
                <div className="w-14 h-14 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-emerald-300 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">

                  {service.features.map((feature, i) => (

                    <li key={i} className="flex items-center text-sm text-slate-300">

                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3" />

                      {feature}

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>


        {/* Premium CTA */}
        <div className="mt-28">

          <div className="relative rounded-[40px] p-[1px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600">

            <div className="bg-[#020617] rounded-[40px] p-14 text-center relative overflow-hidden">

              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full"/>

              <h3 className="text-3xl font-bold mb-4">
                Ready to Build Something Exceptional?
              </h3>

              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                Let’s collaborate to create a world-class digital product that elevates
                your brand and delivers measurable impact.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-4
                bg-gradient-to-r from-emerald-500 to-teal-400
                rounded-xl font-semibold text-black
                hover:scale-105
                transition
                shadow-lg shadow-emerald-900/40"
              >
                Start a Project
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
