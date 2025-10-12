import React from "react";
import { skillsData } from "../data/skills";

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-white font-bold text-center mb-12">
          <span className="border-b-4 border-cyan-400 pb-2 inline-block">
            About Me
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-100 mb-6">
            Hi! I'm a backend-focused developer with experience building APIs,
            databases, and scalable systems. Recently, I've been transitioning
            into full stack development, expanding my skills to include modern
            frontend technologies. I enjoy solving problems, learning new tools,
            and collaborating to deliver impactful solutions.
          </p>
          <p className="text-lg text-gray-100 mb-8">
            When I'm not coding, you can find me playing handball, finding new
            songs on Spotify, or trying new restaurants.
          </p>
          <h3 className="text-2xl text-gray-100 font-semibold mb-4">
            <span className="border-b-4 border-cyan-400 pb-2 inline-block">
              Skills
            </span>
          </h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {skillsData.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-sky-600 px-4 py-2 rounded-full text-sm font-medium hover:shadow-xl transition transform hover:-translate-y-1"
              >
                {skill.name}
              </span>
            ))}
          </div>
          <h4 className="text-2xl text-white font-semibold mb-4">
            <span className="border-b-4 border-cyan-400 pb-2 inline-block">
              Resume
            </span>
          </h4>
          <a
            href="/Keith Yeung.pdf"
            download="Keith Yeung.pdf"
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition transform hover:scale-105 shadow-lg"
          >
            Download
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bouncing Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-gray-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
