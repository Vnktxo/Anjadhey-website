"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Header bar: fixed to top of viewport, full width (left/right 0), high z-index so it sits above page content.
    // bg-white/80 gives semi-transparent white background; backdrop-blur-sm applies a slight blur to content behind it.
    // shadow-md adds elevation; transition-all + duration-300 makes visual changes smooth.
    // py-2 sets vertical padding (adjust to py-4 if you want a taller header).
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg shadow-md transition-all duration-300 py-0">
      {" "}
      {/* <-- Padding is back to py-4 */}
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold text-primary-dark hover:text-primary-light group"
        >
          <Image
            src="/Anjadhey Logo.png"
            alt="Anjadhey"
            width={200}
            height={100}
            className="h-24 md:h-32 w-auto rounded-sm group-hover:scale-105 transition-transform duration-300"
            priority
          />
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
        <Link href="/donate" className="hidden md:block btn-primary">
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
              className="bg-gradient-primary w-full justify-center mt-2"
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
