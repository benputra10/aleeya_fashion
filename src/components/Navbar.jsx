import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50x50"
            alt="Aleeya Fashion Logo"
            className="mr-3 rounded-full"
          />
          <span className="text-xl font-bold text-blue-900">
            Aleeya Fashion
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-blue-900 hover:text-pink-300">
            Beranda
          </a>
          <a href="#" className="text-blue-900 hover:text-pink-300">
            Koleksi
          </a>
          <a href="#" className="text-blue-900 hover:text-pink-300">
            Tentang
          </a>
          <a href="#" className="text-blue-900 hover:text-pink-300">
            Testimoni
          </a>
          <button className="bg-pink-200 text-blue-900 px-4 py-2 rounded-full hover:bg-pink-300">
            Belanja Sekarang
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white py-4 px-6 space-y-4">
          <a href="#" className="block text-blue-900 hover:text-pink-300">
            Beranda
          </a>
          <a href="#" className="block text-blue-900 hover:text-pink-300">
            Koleksi
          </a>
          <a href="#" className="block text-blue-900 hover:text-pink-300">
            Tentang
          </a>
          <a href="#" className="block text-blue-900 hover:text-pink-300">
            Testimoni
          </a>
          <button className="bg-pink-200 text-blue-900 px-4 py-2 rounded-full hover:bg-pink-300 w-full">
            Belanja Sekarang
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
