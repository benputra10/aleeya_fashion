import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo & Menu Desktop */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1635031401080-b6f0f5e9c177?w=200&auto=format&fit=crop"
                alt="Aleeya Fashion Logo"
              />
              <span className="ml-3 text-2xl font-bold text-gray-900 font-poppins">
                Aleeya Fashion
              </span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                to="/"
                className="text-gray-900 hover:text-pink-500 px-3 py-2 font-medium"
              >
                Beranda
              </Link>
              <Link
                to="/products"
                className="text-gray-900 hover:text-pink-500 px-3 py-2 font-medium"
              >
                Koleksi
              </Link>
              <a
                href="#"
                className="text-gray-900 hover:text-pink-500 px-3 py-2 font-medium"
              >
                Testimoni
              </a>
            </div>
          </div>

          {/* Tombol CTA & Mobile Menu Button */}
          <div className="flex items-center">
            <div className="flex items-center">
              <Link
                to="/products"
                className="hidden md:inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-pink-500 hover:bg-pink-600 transition-colors"
              >
                Belanja Sekarang
              </Link>
            </div>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-pink-500"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
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
              ) : (
                <svg
                  className="h-6 w-6"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 shadow-lg">
          <div className="pt-2 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-pink-500"
            >
              Beranda
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-pink-500"
            >
              Koleksi
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-pink-500"
            >
              Tentang Kami
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-pink-500"
            >
              Testimoni
            </a>
            <button className="w-full mt-4 inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-pink-500 hover:bg-pink-600">
              Belanja Sekarang
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
