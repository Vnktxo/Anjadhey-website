"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-custom w-full fixed top-0 left-0 z-50 border-b border-accent-light">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold text-primary-dark hover:text-primary-light group"
        >
          <Heart className="h-7 w-7 text-accent-warm group-hover:scale-110 transition-transform duration-300" />
          <span>Anjadhey</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-primary-dark font-medium relative group transition-colors duration-300"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-dark group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-primary-dark font-medium relative group transition-colors duration-300"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-dark group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/our-work"
            className="text-gray-700 hover:text-primary-dark font-medium relative group transition-colors duration-300"
          >
            Our Work
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-dark group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/gallery"
            className="text-gray-700 hover:text-primary-dark font-medium relative group transition-colors duration-300"
          >
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-dark group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-primary-dark font-medium relative group transition-colors duration-300"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-dark group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Donate Button - Desktop */}
        <Link
          href="/donate"
          className="hidden md:block gradient-primary text-white font-semibold px-6 py-2.5 rounded-full hover:shadow-custom-hover transform hover:scale-105 transition-all duration-300"
        >
          Donate Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-primary-dark hover:text-primary-light focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-accent-light shadow-lg">
          <nav className="flex flex-col space-y-1 px-6 py-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className="py-3 text-gray-700 hover:text-primary-dark hover:bg-accent-light rounded-lg px-3 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="py-3 text-gray-700 hover:text-primary-dark hover:bg-accent-light rounded-lg px-3 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              href="/our-work"
              onClick={toggleMenu}
              className="py-3 text-gray-700 hover:text-primary-dark hover:bg-accent-light rounded-lg px-3 transition-colors duration-300"
            >
              Our Work
            </Link>
            <Link
              href="/gallery"
              onClick={toggleMenu}
              className="py-3 text-gray-700 hover:text-primary-dark hover:bg-accent-light rounded-lg px-3 transition-colors duration-300"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="py-3 text-gray-700 hover:text-primary-dark hover:bg-accent-light rounded-lg px-3 transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              href="/donate"
              onClick={toggleMenu}
              className="gradient-primary text-white font-semibold py-3 px-6 rounded-full text-center hover:shadow-lg transition-all duration-300 mt-2"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;