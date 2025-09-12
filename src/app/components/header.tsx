import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Placeholder */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-gray-600"
        >
          Anjadhey
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="/our-work"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            Our Work
          </Link>
          <Link
            href="/gallery"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Donate Button */}
        <Link
          href="/donate"
          className="hidden md:block bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Donate Now
        </Link>

        {/* Mobile Menu Button (functionality to be added later) */}
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
