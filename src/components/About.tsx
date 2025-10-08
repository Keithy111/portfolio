import React from "react";
import { skillsData } from "../data/skills";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-80 bg-gradient-to-br from-blue-800 via-indigo-200 to-purple-300
"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Hi! I'm a backend-focused developer with experience building APIs,
            databases, and scalable systems. Recently, I've been transitioning
            into full stack development, expanding my skills to include modern
            frontend technologies. I enjoy solving problems, learning new tools,
            and collaborating to deliver impactful solutions.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            When I'm not coding, you can find me playing pickleball, finding new
            songs on Spotify, or trying new restaurants.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skillsData.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:shadow-xl transition transform hover:-translate-y-1"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
