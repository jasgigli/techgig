import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger menu icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold">
          <span className="text-yellow-300">Tech</span>-Gig
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/category/theory"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Theory
          </Link>
          <Link
            to="/category/practicals"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Practicals
          </Link>
          <Link
            to="/category/articles"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Articles
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-purple-700 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full py-4 space-y-4">
          <Link
            to="/"
            className="text-white text-2xl hover:text-yellow-300 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/category/theory"
            className="text-white text-2xl hover:text-yellow-300 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Theory
          </Link>
          <Link
            to="/category/practicals"
            className="text-white text-2xl hover:text-yellow-300 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Practicals
          </Link>
          <Link
            to="/category/articles"
            className="text-white text-2xl hover:text-yellow-300 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Articles
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
