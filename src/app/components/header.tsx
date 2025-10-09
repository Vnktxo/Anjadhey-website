"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Portal from "./Portal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPartDropdownOpen, setIsPartDropdownOpen] = useState(false);
  const [isMobilePartOpen, setIsMobilePartOpen] = useState(false);

  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (isPartDropdownOpen && dropdownButtonRef.current) {
      const rect = dropdownButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 12,
        left: rect.left + window.scrollX,
      });
    }
  }, [isPartDropdownOpen]);

  useEffect(() => {
    if (isPartDropdownOpen) {
      scrollPosition.current = window.scrollY;
      document.body.classList.add("no-scroll");
      document.body.style.top = `-${scrollPosition.current}px`;
    } else {
      document.body.classList.remove("no-scroll");
      document.body.style.removeProperty("top");
      window.scrollTo(0, scrollPosition.current);
    }
    return () => {
      document.body.classList.remove("no-scroll");
      document.body.style.removeProperty("top");
    };
  }, [isPartDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isPartDropdownOpen &&
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target as Node) &&
        dropdownPanelRef.current &&
        !dropdownPanelRef.current.contains(event.target as Node)
      ) {
        setIsPartDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPartDropdownOpen]);

  const toggleMenu = () => setIsMenuOpen((s) => !s);
  const toggleMobilePart = () => setIsMobilePartOpen((s) => !s);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-lg shadow-md transition-all duration-300 py-0">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold text-primary-dark hover:text-primary-light group"
          >
            <Image
              src="/Anjadhey Icon.png"
              alt="Anjadhey"
              width={200}
              height={100}
              className="h-24 md:h-32 w-auto rounded-sm group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Our Work", href: "/our-work" },
              { name: "NextGen", href: "/nextgen" },
              { name: "Gallery", href: "/gallery" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-dark font-medium relative group transition-colors duration-300"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-dark group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            <div className="relative">
              <button
                ref={dropdownButtonRef}
                onClick={() => setIsPartDropdownOpen((s) => !s)}
                aria-expanded={isPartDropdownOpen}
                aria-haspopup="true"
                className="flex items-center text-gray-700 hover:text-primary-dark font-medium focus:outline-none transition-colors duration-300"
              >
                Get Involved in
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isPartDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <Portal>
                {isPartDropdownOpen && (
                  <div
                    ref={dropdownPanelRef}
                    className="absolute w-56 rounded-2xl z-[9999]"
                    style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
                  >
                    <div
                      className="backdrop-blur-lg bg-white/6 border border-white/8 rounded-3xl py-2 shadow-md
                                 ring-1 ring-black/5 overflow-hidden
                                 transform opacity-0 translate-y-1 animate-dropdown-in"
                    >
                      <Link
                        href="/volunteers"
                        className="block px-5 py-3 text-primary-dark hover:bg-black/20 hover:text-primary-dark rounded-t-2xl transition-all duration-200"
                      >
                        Volunteers
                      </Link>
                      <Link
                        href="/donors"
                        className="block px-5 py-3 text-primary-dark hover:bg-black/20 hover:text-primary-dark transition-all duration-200"
                      >
                        Donors
                      </Link>
                      <Link
                        href="/corporate-donors"
                        className="block px-5 py-3 text-primary-dark hover:bg-black/20 hover:text-primary-dark rounded-b-2xl transition-all duration-200"
                      >
                        Corporate Donors
                      </Link>
                    </div>
                  </div>
                )}
              </Portal>
            </div>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary-dark font-medium relative group transition-colors duration-300"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-dark group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <Link href="/donate" className="hidden md:block btn-primary">
            Donate Now
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-primary-dark hover:text-primary-light focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU (inserted / fixed) --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-accent-light shadow-lg">
          <nav className="flex flex-col space-y-1 px-6 py-4">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Our Work", href: "/our-work" },
              { name: "NextGen", href: "/nextgen" },
              { name: "Gallery", href: "/gallery" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-gray-700 hover:text-primary-dark hover:bg-accent-light rounded-lg px-3 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile "Be a Part of Us" with nested links */}
            <div>
              <button
                onClick={toggleMobilePart}
                className="w-full text-left py-3 text-gray-700 hover:text-primary-dark hover:bg-accent-light rounded-lg px-3 flex justify-between items-center transition-colors duration-300"
              >
                Get Involved in
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isMobilePartOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobilePartOpen && (
                <div className="pl-6 space-y-1">
                  <Link
                    href="/volunteers"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-gray-700 hover:text-primary-dark transition-colors duration-300"
                  >
                    Volunteers
                  </Link>
                  <Link
                    href="/donors"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-gray-700 hover:text-primary-dark transition-colors duration-300"
                  >
                    Donors
                  </Link>
                  <Link
                    href="/corporate-donors"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-gray-700 hover:text-primary-dark transition-colors duration-300"
                  >
                    Corporate Donors
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-gray-700 hover:text-primary-dark hover:bg-accent-light rounded-lg px-3 transition-colors duration-300"
            >
              Contact
            </Link>

            <Link
              href="/donate"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary w-full justify-center mt-2"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      )}

      <style jsx>{`
        @keyframes dropdownIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-dropdown-in {
          animation: dropdownIn 220ms cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
