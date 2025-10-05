// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero1.jpeg";


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
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-label="Hero Section"
        >
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
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Get Free Quote
            </motion.a>
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
              href="tel:+918790140046"
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
                <li>📞 +91 8790140046</li>
                <li>✉️ simhalion899@gmail.com</li>
              </ul>
              <a
                href="tel:+918790140046"
                className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition"
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
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

    
    </div>
  );
}
