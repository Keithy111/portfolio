// import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 Keith Yeung. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
