// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero1.webp"; // Optimized WebP image

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonAnim = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } },
};

// Services
const services = [
  { name: "Household Shifting", emoji: "🏠" },
  { name: "Office Relocation", emoji: "🏢" },
  { name: "Vehicle Transportation", emoji: "🚗" },
  { name: "Packing & Unpacking", emoji: "📦" },
  { name: "Loading & Unloading", emoji: "⚙️" },
  { name: "Warehousing", emoji: "🏬" },
];

// Why Choose Us
const reasons = [
  "10+ years of experience in Packers & Movers",
  "Best packing materials for complete safety",
  "Trained & dedicated team for smooth shifting",
  "On-time home-to-home delivery without stress",
  "Affordable & transparent pricing",
  "100% customer satisfaction guaranteed",
];

export default function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_KEY,
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          subject: "New Contact Form Submission",
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("❌ An error occurred. Please try again.");
    }
  };

  return (
    <div className="font-sans flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative text-white text-center px-6 min-h-[80vh] flex items-center justify-center"
          aria-label="Hero Section"
        >
          {/* LCP Image */}
          <img
            src={heroImage}
            alt="Safe & Stress-Free Relocations"
            className="absolute inset-0 w-full h-full object-cover"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
            >
              Safe & Stress-Free Relocations with <br />
              <span className="text-orange-400 drop-shadow-lg">Next Go Shift</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg max-w-2xl mx-auto mb-6 drop-shadow-md"
            >
              10+ years of trusted experience in local and national packing & moving services across India.
            </motion.p>
            <motion.a
              variants={buttonAnim}
              href="/contact"
              aria-label="Get Free Quote"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Get Free Quote
            </motion.a>
          </motion.div>
        </section>

        {/* Location Section */}
        <section className="bg-gray-100 py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Location</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10">
            We proudly serve customers all across Andhra Pradesh and nearby cities, delivering smooth and
            stress-free shifting services wherever you need.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-8 max-w-4xl mx-auto"
          >
            {/* State Card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="flex-1 bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500 cursor-pointer"
              onClick={() => navigate("/locations")}
              aria-label="View State Locations"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">State</h3>
            </motion.div>

            {/* City Card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="flex-1 bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-600 cursor-pointer"
              onClick={() => navigate("/locations")}
              aria-label="View City Locations"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">City</h3>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-blue-900 mb-4"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 max-w-3xl mx-auto"
          >
            Next Go Shift Packers and Movers is one of the most trusted names in
            the relocation industry with over a decade of expertise. We
            specialize in providing complete packing and moving solutions, from
            local shifting to all-India relocations. Our professional team
            ensures that every move is handled with precision, safety, and care.
          </motion.p>
        </section>

        {/* Services Section */}
        <section className="bg-white py-16 px-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Our Services
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition text-center"
              >
                <div className="text-4xl mb-3">{service.emoji}</div>
                <h3 className="text-xl font-semibold text-blue-800">{service.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-10">Why Choose Us</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-orange-500 text-left"
              >
                <h3 className="text-purple-800 font-semibold">{index + 1}. {reason}</h3>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="bg-orange-500 text-white py-16 text-center px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
              Ready to Move? We’re Here to Help!
            </motion.h2>
            <motion.p variants={fadeUp} className="mb-6">
              Contact Next Go Shift Packers and Movers today for a stress-free relocation experience.
            </motion.p>
            <motion.a
              variants={buttonAnim}
              href="tel:+919666465890"
              aria-label="Call Now"
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              📞 Call Us Now
            </motion.a>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Get in Touch</h2>
              <p className="text-gray-700 mb-4">
                Our support team is available 24/7 to help with your shifting needs.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>📍 Tadepalligudem 534101, West Godavari, Andhra Pradesh, India</li>
                <li>📞 +91 9666465890</li>
                <li>✉️ simhalion899@gmail.com</li>
              </ul>
              <a
                href="tel:+919666465890"
                className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition"
                aria-label="Call Now"
              >
                📞 Call Us Now
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Send a Message</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  aria-label="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  aria-label="Your Email"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  aria-label="Your Message"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                  aria-label="Send Message"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Call Button */}
      <a
        href="tel:+919666465890"
        className="fixed bottom-24 right-5 bg-blue-900 text-white p-4 rounded-full shadow-xl 
                   hover:bg-blue-800 transition-all duration-300 z-50 flex items-center justify-center 
                   animate-[pulse_2s_infinite] hover:scale-110"
        aria-label="Call Now"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.48 2.53.74 3.88.74a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.25 2.67.74 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
        </motion.svg>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919666465880"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-xl 
                   hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center 
                   animate-[bounce_2s_infinite] hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          animate={{ rotate: [0, -15, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 .01 5.37.01 12c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.61A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.19-3.48-8.52zM12 22.02c-1.95 0-3.86-.52-5.53-1.52l-.4-.24-3.68.96.98-3.58-.26-.37A9.9 9.9 0 012.02 12C2.02 6.49 6.49 2.02 12 2.02S21.98 6.49 21.98 12 17.51 22.02 12 22.02zm5.32-7.46c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.6-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.53-.88-2.1-.23-.55-.46-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.17 3.02c.15.19 2 3.06 4.84 4.29.68.29 1.21.46 1.62.59.68.21 1.3.18 1.79.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.06-.13-.26-.21-.55-.36z" />
        </motion.svg>
      </a>
    </div>
  );
}
