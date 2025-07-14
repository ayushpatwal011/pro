import { useState, useRef } from "react";
import { playSound } from "../../libs/ClickSound";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ["Home", "Projects", "Experience" ,"Contact"];
  const audioRef = useRef(null);

  const handleNavClick = (item) => {
    // Play click sound
    if (audioRef.current) {
      playSound(audioRef);
    }

    // Scroll to section
    const targetSection = document.getElementById(item);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Update active and close menu
    setActiveItem(item);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed md:top-5 md:bg-white md:shadow-md rounded-4xl z-50 px-4 sm:px-6 lg:px-8 max-w-3xl">
      <audio ref={audioRef} src="/sound/click.mp3" preload="auto" />

      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeItem === item
                    ? "bg-gray-900 text-white"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center fixed right-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md bg-white shadow-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className={`h-6 w-6 ${mobileMenuOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Close icon */}
            <svg
              className={`h-6 w-6 ${mobileMenuOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        } fixed top-2 right-12 bg-white shadow-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                activeItem === item
                  ? "bg-gray-900 text-white"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
