import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setVisible(currentY <= lastScrollY.current || currentY < 100);
          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header
      className={`bg-blue-900 text-white shadow-md sticky top-0 z-50 transform transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => handleNav("/")}
          className="flex items-center focus:outline-none"
          aria-label="Go to Home Page"
        >
          <img src={logo} alt="NextGoShift Logo" className="w-40 h-auto object-contain" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <button onClick={() => handleNav("/")} className="hover:text-orange-400" aria-label="Navigate to Home Page">Home</button>
          <button onClick={() => handleNav("/about")} className="hover:text-orange-400" aria-label="Navigate to About Page">About</button>
          <button onClick={() => handleNav("/contact")} className="hover:text-orange-400" aria-label="Navigate to Contact Page">Contact</button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 px-6 py-4 space-y-3 shadow-lg">
          <button onClick={() => handleNav("/")} className="w-full text-left text-white hover:text-orange-400" aria-label="Navigate to Home Page">Home</button>
          <button onClick={() => handleNav("/about")} className="w-full text-left text-white hover:text-orange-400" aria-label="Navigate to About Page">About</button>
          <button onClick={() => handleNav("/contact")} className="w-full text-left text-white hover:text-orange-400" aria-label="Navigate to Contact Page">Contact</button>
          <a
            href="tel:+918790140046"
            className="block bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-orange-600 text-center"
            aria-label="Call NextGoShift now"
          >
            📞 Call Now
          </a>
        </div>
      )}
    </header>
  );
}
