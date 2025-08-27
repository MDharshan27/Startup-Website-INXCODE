import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-8 text-center shadow-inner">
      <p className="text-gray-700 mb-4 font-poppins">
        © 2025 Neuronix. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 text-gray-600">
        <a href="#" className="hover:text-blue-500 transition transform hover:scale-110">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-green-500 transition transform hover:scale-110">
          <FaWhatsapp />
        </a>
        <a href="#" className="hover:text-blue-500 transition transform hover:scale-110">
          <FaLinkedinIn />
        </a>
        <a href="#" className="hover:text-pink-500 transition transform hover:scale-110">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
