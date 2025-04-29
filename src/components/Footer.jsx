import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-pink-50 to-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/logo-aleeya-white.png"
                alt="Aleeya Fashion"
                className="h-10 mr-2"
              />
              <span className="text-2xl font-bold font-poppins">
                Aleeya Fashion
              </span>
            </div>
            <p className="text-navy-300">
              Gamis anak modern dengan bahan premium dan desain kekinian untuk
              penampilan si kecil yang lebih stylish.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-pink-300 hover:text-pink-400 text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-pink-300 hover:text-pink-400 text-xl">
                <FaTiktok />
              </a>
              <a href="#" className="text-pink-300 hover:text-pink-400 text-xl">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-pink-500 pb-2 inline-block">
              Menu Cepat
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-navy-500 hover:text-pink-300 transition"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-navy-200 hover:text-pink-300 transition"
                >
                  Koleksi
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-navy-200 hover:text-pink-300 transition"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-pink-500 pb-2 inline-block">
              Layanan
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/faq"
                  className="text-navy-200 hover:text-pink-300 transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/size-guide"
                  className="text-navy-200 hover:text-pink-300 transition"
                >
                  Panduan Ukuran
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-navy-200 hover:text-pink-300 transition"
                >
                  Retur & Tukar
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-navy-200 hover:text-pink-300 transition"
                >
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-pink-500 pb-2 inline-block">
              Hubungi Kami
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-pink-300 mt-1 mr-3 flex-shrink-0" />
                <span className="text-navy-300">
                  Jl. Bojong No. 123, Bandung, Jawa Barat
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-pink-300 mr-3" />
                <span className="text-navy-300">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-pink-300 mr-3" />
                <span className="text-navy-200">hello@aleeyafashion.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment & Trust Badges */}
        <div className="flex flex-col items-center border-t border-gray-700 pt-8"></div>

        {/* Copyright */}
        <div className="text-center text-navy-400 text-sm mt-8">
          <p>
            © {new Date().getFullYear()} Aleeya Fashion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
