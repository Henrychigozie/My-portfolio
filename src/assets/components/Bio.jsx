import React, { useState } from "react";
import { motion } from "framer-motion";
import Image2 from "../2025-12-15_18-23-48_490.jpg";

const SkillBar = ({ label, percentage, colorClass, barColor }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2 items-end">
      <span
        className={`font-semibold tracking-wide text-[11px] uppercase ${colorClass}`}
      >
        {label}
      </span>
      <span className="text-gray-500 text-xs font-mono">{percentage}%</span>
    </div>
    <div className="w-full bg-slate-800/50 rounded-full h-1.5">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${barColor}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

function MyBioComponent() {
  const [readMore, setReadMore] = useState(false);

  const skills = [
    {
      label: "HTML5",
      percentage: 80,
      colorClass: "text-orange-500",
      barColor: "bg-orange-500",
    },
    {
      label: "CSS3",
      percentage: 75,
      colorClass: "text-blue-500",
      barColor: "bg-blue-500",
    },
    {
      label: "JavaScript",
      percentage: 55,
      colorClass: "text-yellow-500",
      barColor: "bg-yellow-500",
    },
    {
      label: "Tailwind CSS",
      percentage: 80,
      colorClass: "text-cyan-500",
      barColor: "bg-cyan-500",
    },
    {
      label: "React Js",
      percentage: 75,
      colorClass: "text-sky-400",
      barColor: "bg-sky-400",
    },
    {
      label: "UI Design",
      percentage: 60,
      colorClass: "text-purple-500",
      barColor: "bg-purple-500",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#020617] flex items-center justify-center p-6 md:p-12"
    >
      <div className="max-w-6xl w-full bg-[#0f172a]/40 backdrop-blur-md border border-slate-800/50 shadow-2xl rounded-[2rem] flex flex-col md:flex-row overflow-hidden">
        {/* Image Section */}
      {/* Replace your Image Section with this */}
<div className="md:w-5/12 relative overflow-hidden bg-slate-900"> {/* Added bg-slate-900 as placeholder */}
  <motion.img
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    src={Image2}
    alt="Anaekwe Chigozie Henry"
    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 ease-in-out"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
</div>

        {/* Content Section */}
        <div className="md:w-7/12 p-8 lg:p-16 flex flex-col justify-center">
          <header className="mb-6">
            {/* MOTION SPAN ADDED HERE ONLY */}

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-emerald-500 font-mono text-xs mb-3 tracking-[0.3em] uppercase block"
            >
              About Me
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              My <span className="text-emerald-500">Bio.</span>
            </h2>
          </header>

          <div className="text-slate-400 mb-8 text-base leading-relaxed">
            <p className="mb-4">
              I’m a{" "}
              <span className="text-white font-medium">Frontend Developer</span>{" "}
              dedicated to crafting high-performance digital experiences. I
              bridge the gap between complex backend logic and elegant,
              user-centric design.
            </p>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${readMore ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="pb-4">
                Beyond development, I’m the{" "}
                <span className="font-medium text-white">CEO of DREAM</span>, a
                company operating in both tech and non-tech sectors. I focus on
                innovation, problem-solving, and creating solutions that connect
                technology with real-world needs.
              </p>
            </div>

            <button
              onClick={() => setReadMore(!readMore)}
              className="text-emerald-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
            >
              {readMore ? "Less Info" : "More About Dream"}
              <span>{readMore ? "−" : "+"}</span>
            </button>
          </div>

          <section className="mb-8">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-4">
              Technical Expertise{" "}
              <span className="h-[1px] flex-1 bg-slate-800"></span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              {skills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </section>

          <a
            href="https://www.linkedin.com/in/henry-chi332/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-emerald-500/50 text-emerald-500 rounded-xl text-sm font-bold hover:bg-emerald-500 hover:text-black transition-all w-fit"
          >
            View Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default MyBioComponent;
