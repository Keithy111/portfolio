import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-transparent transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto px-6 py-10">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-100">Keith Yeung</div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-100 font-semibold hover:text-gray-900 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-100 font-semibold hover:text-gray-900 transition"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-100 font-semibold hover:text-gray-900 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-100 font-semibold hover:text-gray-900 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
