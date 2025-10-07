// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Contact Info (First Column) */}
        <div>
          <h4 className="text-lg font-semibold text-orange-400 mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-300">
            <li>📍 Tadepalligudem 534101, West Godavari, Andhra Pradesh, India</li>
            <li>📞 +91 9666465890</li>
            <li>✉️ simhalion899@gmail.com</li>
          </ul>
        </div>

        {/* Quick Links (Second Column) */}
        <div>
          <h4 className="text-lg font-semibold text-orange-400 mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-orange-400 transition-colors">About</a></li>
            
            <li><a href="/locations" className="hover:text-orange-400 transition-colors">Locations</a></li>
            <li><a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Next Go Shift / Brand & Social (Third Column) */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-orange-400">Next Go Shift</h3>
          <p className="text-gray-300">
            Trusted Packers & Movers with 10+ years of experience. We ensure safe, reliable, 
            and stress-free relocations across India.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/profile.php?id=61581544693438" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 text-2xl transition-colors">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/nextgoshift" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 text-2xl transition-colors">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919666465880" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 text-2xl transition-colors">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/narasimha-gunje/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 text-2xl transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line + Copyright + Designer */}
      <div className="border-t border-white mt-10 pt-1 px-6 max-w-screen-xl mx-auto text-xs text-gray-300 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Next Go Shift Packers & Movers. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-[11px]">
            Designed by <a href="https://www.linkedin.com/in/banoth-bhargava-naik/" className="hover:text-orange-500 underline">Banoth Bhargava Naik</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
