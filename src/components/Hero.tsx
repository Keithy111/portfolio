import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-cyan-300 via-teal-200 to-blue-800"
    >
      <div className="container mx-auto px-6 py-90 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Keith Yeung
          </span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-600 mb-8">
          Full Stack Developer | NYC
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
