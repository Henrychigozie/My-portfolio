import React from "react";
import { useState } from "react";
import Image2 from "../2025-12-15_18-23-48_490.jpg";

function MyBioComponent() {
  const [readMore, setReadMore] = useState(false);

  return (
    // This is the big background (updated)
    <div className="h-full bg-[#0f172a] flex items-center justify-center px-4 py-35 ">
      <div className="max-w-7xl w-full  shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden ">
        <div className="md:w-1/2">
          <img
            src={Image2}
            alt="Your photo"
            className="w-full h-full object-cover "
          />
        </div>

        <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 
               text-emerald-600 tracking-tight 
               sm:text-center md:text-left">
  My Bio
</h1>

          <div className="text-gray-500 mb-10 text-base md:text-lg">
            <p className="mb-4 leading-relaxed">
              I’m a{" "}
              <span className="font-medium text-white">
                Frontend Developer
              </span>{" "}
              passionate about building clean, responsive, and user-focused web
              experiences. I specialize in turning ideas into visually
              appealing, high-performing interfaces using modern web
              technologies.
            </p>

            {readMore && (
              <p className="leading-relaxed mb-4">
                Beyond development, I’m the{" "}
                <span className="font-medium text-white">CEO of DREAM</span>, a
                company operating in both tech and non-tech sectors. Through
                DREAM, I focus on innovation, problem-solving, and creating
                solutions that connect technology with real-world needs. My goal
                is to build products and strategies that inspire growth, deliver
                value, and make a lasting impact.
              </p>
            )}

            <button
              onClick={() => setReadMore(!readMore)}
              className="mt-2 text-green-500 font-medium hover:underline transition"
            >
              {readMore ? "Read less" : "Read more"}
            </button>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-emerald-600 sm:text-center">
              Development Skills
            </h2>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-orange-600">HTML5</span>
                <span className="text-orange-600 font-medium">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-orange-500 h-full rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-blue-600">CSS</span>
                <span className="text-blue-600 font-medium">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-500 h-full rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-yellow-600">JavaScript</span>
                <span className="text-yellow-600 font-medium">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-yellow-400 h-full rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-cyan-600">Tailwind CSS</span>
                <span className="text-cyan-600 font-medium">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-[#06B6D4] h-full rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-indigo-600">Bootstrap</span>
                <span className="text-indigo-600 font-medium">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-[#7952B3] h-full rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-sky-500">React Js</span>
                <span className="text-sky-500 font-medium">52%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-sky-400 h-full rounded-full"
                  style={{ width: "52%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBioComponent;
