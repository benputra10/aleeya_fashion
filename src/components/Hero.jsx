import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-50 to-blue-50 overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Teks Konten */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Gamis Anak <span className="text-pink-500">Modern</span> & Nyaman
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Koleksi eksklusif dengan bahan premium yang membuat si kecil bebas
              bergerak dan tetap stylish
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/products"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition shadow-lg"
              >
                Belanja Sekarang
              </Link>
              <Link
                to="/products"
                className="border-2 border-gray-900 hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium transition"
              >
                Lihat Koleksi
              </Link>
            </div>
          </div>

          {/* Gambar Hero */}
          <div className="relative">
            <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1604917018138-9ff6e220e648?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Anak memakai gamis Aleeya Fashion"
                className="w-full h-full object-cover object-center"
              />
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 bg-pink-400 w-32 h-32 rounded-full opacity-20"></div>
            </div>

            {/* Tag Diskun */}
            <div className="absolute -top-4 -left-4 bg-pink-500 text-white px-6 py-2 rounded-full font-bold shadow-lg">
              30% Off
            </div>
          </div>
        </div>
      </div>

      {/* Shape Decoration */}
      <div className="hidden md:block absolute top-0 left-0 w-48 h-48 bg-pink-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
    </section>
  );
};

export default Hero;
