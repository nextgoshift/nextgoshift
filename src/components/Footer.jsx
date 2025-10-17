// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-100 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-orange-400 mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>📍 Tadepalligudem 534101, West Godavari, Andhra Pradesh, India</li>
            <li>📞 +91 9666465890</li>
            <li>✉️ simhalion899@gmail.com</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-orange-400 mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-orange-400 transition" aria-label="Home Page">Home</a></li>
            <li><a href="/about" className="hover:text-orange-400 transition" aria-label="About Page">About</a></li>
            <li><a href="/locations" className="hover:text-orange-400 transition" aria-label="Locations Page">Locations</a></li>
            <li><a href="/contact" className="hover:text-orange-400 transition" aria-label="Contact Page">Contact</a></li>
          </ul>
        </div>

        {/* Social & Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-orange-400">Next Go Shift</h2>
          <p>
            Trusted Packers & Movers with 10+ years of experience. Safe, reliable, and stress-free relocations across India.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/profile.php?id=61581544693438" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook Page">
              <FaFacebook className="text-2xl hover:text-orange-400" aria-hidden="true" />
            </a>
            <a href="https://instagram.com/nextgoshift" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram Page">
              <FaInstagram className="text-2xl hover:text-orange-400" aria-hidden="true" />
            </a>
            <a href="https://wa.me/919666465880" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              <FaWhatsapp className="text-2xl hover:text-orange-400" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/narasimha-gunje/" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn Page">
              <FaLinkedin className="text-2xl hover:text-orange-400" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-gray-400 mt-10 pt-4 px-6 max-w-screen-xl mx-auto text-xs text-gray-200 pb-4">
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
