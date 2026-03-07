// Header.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ forceScrolled = false }) => {
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Force scrolled on certain pages
    if (forceScrolled) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled, location.pathname]);

  return (
    <>
      <div
        className={`fixed w-full top-0 z-50  flex justify-center  transition-all duration-300 ${
          scrolled ? "bg-black/90 shadow-md text-white" : "bg-transparent text-white"
        }`}
      >
        <div className="flex w-[75%] justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl">
            MyLogo
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-gray-700 transition-colors">
              Home
            </Link>
            <Link to="/ActiveListingPages" className="hover:text-gray-700 transition-colors">
              Active Listing
            </Link>
            <Link to="/testimonials" className="hover:text-gray-700 transition-colors">
              Testimonials
            </Link>
            <Link to="/about" className="hover:text-gray-700 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-700 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`md:hidden fixed inset-0 top-15 z-40 bg-black/90 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 text-lg uppercase tracking-wider">
            <Link to="/" onClick={toggleMenu} className="hover:text-black/80 py-2">
              Home
            </Link>
            <Link to="/activeListing" onClick={toggleMenu} className="hover:text-black/80 py-2">
              Active Listing
            </Link>
            <Link to="/testimonials" onClick={toggleMenu} className="hover:text-black/80 py-2">
              Testimonials
            </Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-black/80 py-2">
              About
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-black/80 py-2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;