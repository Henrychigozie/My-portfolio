import React from "react";

const experiences = [
  {
    year: "2025 — Present",
    role: "Junior Frontend Developer",
    company: "Rad5 Tech Hub",
    location: "Aba, Abia State",
    description:
      "Collaborating with senior engineers to build scalable web applications. My focus is on translating complex UI designs into modular React components while optimizing for performance and accessibility.",
    skills: ["React", "API Integration", "Agile Workflow"],
  },
  {
    year: "2024",
    role: "Junior Developer",
    company: "Web Deves Academy",
    location: "Aba, Abia State",
    description:
      "Mastered frontend fundamentals by developing responsive layouts and pixel-perfect landing pages. Focused on writing semantic HTML and clean, maintainable CSS.",
    skills: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
  },
  {
    year: "2019 — Present",
    role: "Business Manager & Entrepreneur",
    company: "DREAM",
    location: "Abia State",
    description:
      "Leading business strategy and operations. I specialize in bridging the gap between technical possibilities and real-world business needs, ensuring high-value delivery to clients.",
    skills: ["Leadership", "Project Management", "Business Strategy"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
       <div className="mb-24 text-center">
          <span className="inline-block text-emerald-400 font-mono text-xs tracking-[0.35em] uppercase mb-4">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My Professional <span className="text-emerald-400">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            A timeline of growth — blending technical skill, leadership, and
            real-world business impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-12">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 ml-10 relative group">

              {/* Enhanced Dot with Pulse Effect */}
              <span className="absolute -left-[49px] top-2 w-4 h-4 rounded-full bg-[#0f172a] border-2 border-emerald-400 z-10 group-hover:scale-125 transition-transform duration-300" />
              <span className="absolute -left-[49px] top-2 w-4 h-4 rounded-full bg-emerald-400/40 animate-ping" />

              {/* Card */}
              <div
                className="bg-[#111827]/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8
                shadow-xl shadow-black/20 transition-all duration-500
                hover:border-emerald-500/30 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-md">
                      {exp.year}
                    </span>
                    <h3 className="text-2xl font-bold mt-4 group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">
                      <span className="text-white font-medium">{exp.company}</span>
                      <span className="mx-2 opacity-30">|</span>
                      <span className="italic">{exp.location}</span>
                    </p>
                  </div>
                </div>

                <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-3xl">
                  {exp.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-3 py-1 rounded-md font-mono
                      bg-slate-800/50 text-slate-300 border border-slate-700
                      group-hover:border-emerald-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Quote */}
        <div className="mt-12 text-center p-8 bg-emerald-500/5 rounded-3xl border border-dashed border-emerald-500/20">
          <p className="text-slate-400 text-lg italic max-w-2xl mx-auto">
            "Merging <span className="text-emerald-400 font-semibold">entrepreneurial strategy</span> with 
            <span className="text-emerald-400 font-semibold"> technical execution</span> to build the future."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;