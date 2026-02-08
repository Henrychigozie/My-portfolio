import React from "react";
import Image1 from "../websiteimage.png";
import Image2 from "../websiteimage (2).png";
import Image3 from "../weather checker.png";



/* ================= PROJECT DATA ================= */
const projects = [
 {
    title: "Boldo: Modern Corporate SaaS Landing Page",
    description:
      "A high-performance, multi-page business platform designed for modern startups. This project demonstrates advanced responsive design, structured navigation, and a clean, professional UI built to convert visitors into clients.",
    tech: ["HTML5", "Tailwind CSS", "Bootstrap"],
    liveLink: "https://henrychigozie.github.io/Boldo-website/",
    githubLink: "https://github.com/Henrychigozie/Boldo-website.git",
    image: Image1,
 },
 {
    title: "SMFEST: Landing Page for Event Promotion",
    description:
      "A high-conversion landing page designed to drive registrations and showcase event highlights. Features a sleek, modern UI with a focus on mobile-first responsiveness and optimized user flow.",
    tech: ["Tailwind CSS", "Bootstrap", "JavaScript"],
    liveLink: "https://henrychigozie.github.io/SMFEST-landing-page/",
    githubLink: "https://github.com/Henrychigozie/SMFEST-landing-page.git",
    image: Image2,
  },
  {
   title: "SkyCast: Real-Time Weather Tracker",
    description:
      "A dynamic weather application that fetches precise meteorological data using geographic coordinates. Built with a sleek glassmorphism UI, it integrates the OpenWeatherMap API to provide real-time updates on local conditions and atmospheric descriptions.",
    tech: ["HTML5", "CSS", "JavaScript", "API Integration"],
    liveLink: "https://henrychigozie.github.io/Weather_Checker/",
    githubLink: "https://github.com/Henrychigozie/Weather_Checker.git",
    image: Image3,
  },
];

const Projects = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-green-400 font-mono text-sm mb-2 uppercase tracking-widest">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Selected Projects
          </h2>
          <div className="h-1 w-20 bg-green-500 mt-4 rounded-full"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-green-500/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-green-500/10 text-green-400 rounded border border-green-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 bg-green-500 text-black text-sm font-bold rounded-lg hover:bg-green-400 transition-all shadow-lg shadow-green-500/10"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6 italic text-sm">
            Interested in exploring more of my work?
          </p>
          <a
            href="https://github.com/Henrychigozie"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-colors border-b border-green-500/30 pb-1"
          >
            View my GitHub profile
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
