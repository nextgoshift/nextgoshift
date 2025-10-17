// src/pages/About.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import founderImage from "../assets/founder.jpg";

const benefits = [
  { icon: "⏳", title: "10+ Years Experience", desc: "Over a decade of expertise in packers and movers services across India." },
  { icon: "📦", title: "Safe & Secure Packing", desc: "High-quality packing materials ensure complete safety of your goods during relocation." },
  { icon: "👷‍♂️", title: "Professional Team", desc: "Trained staff provides a smooth, stress-free moving experience anywhere in India." },
  { icon: "💰", title: "Affordable Pricing", desc: "Transparent, budget-friendly services with no hidden charges." },
  { icon: "⏰", title: "On-Time Delivery", desc: "Goods delivered safely and on schedule, every time." },
  { icon: "⭐", title: "Customer Satisfaction", desc: "24/7 support to address all your shifting and relocation concerns." },
];

const About = () => {
  return (
    <div className="font-sans flex flex-col min-h-screen bg-gray-50">
      {/* SEO */}
      <Helmet>
        <title>About Us | NextGoShift Packers & Movers India</title>
        <meta
          name="description"
          content="Discover the story of NextGoShift, India’s trusted packers and movers. Founded by Narasimha Gunje, our mission is to provide safe, reliable, and stress-free relocation across India."
        />
        <meta
          name="keywords"
          content="packers and movers India, home shifting, office relocation, vehicle transport, NextGoShift"
        />
      </Helmet>

      {/* Founder Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={founderImage}
              alt="Founder Narasimha Gunje NextGoShift"
              className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-2xl shadow-xl border-4 border-white"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Meet Our Founder</h1>
            <h2 className="text-2xl font-semibold text-orange-500 mb-6">Narasimha Gunje</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Every great company starts with a story — and for <strong>NextGoShift</strong>,
              it began with a young man who saw how stressful moving could be for families,
              and dreamed of changing that forever.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              <strong>Narasimha Gunje</strong> founded NextGoShift with a simple belief:
              moving homes should feel exciting, not exhausting. Witnessing countless
              people struggle with unreliable packers and unexpected costs, he envisioned
              a brand built on transparency, care, and technology — where every move is effortless and every customer valued.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Today, Narasimha continues to lead with passion, ensuring every relocation is about
              <em> trust, comfort, and new beginnings.</em> NextGoShift now serves clients all over India as a trusted packers and movers company.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Mission & Values</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Every move is more than just transport — it’s a story of trust.  
            We strive to make every relocation stress-free, secure, and memorable across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-2xl font-semibold text-orange-500 mb-3">🚚 Mission</h3>
            <p className="text-gray-600">To provide seamless, safe, and affordable relocation experiences powered by technology and empathy.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-2xl font-semibold text-orange-500 mb-3">🌍 Vision</h3>
            <p className="text-gray-600">To be India’s most trusted moving brand that connects homes, businesses, and dreams with effortless precision.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-2xl font-semibold text-orange-500 mb-3">🤝 Values</h3>
            <p className="text-gray-600">Honesty, safety, professionalism, and total customer satisfaction in every step of your journey.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for a stress-free move across India?</h2>
        <a
          href="/contact"
          className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          aria-label="Get Free Quote"
        >
          Get Free Quote
        </a>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose NextGoShift Packers & Movers?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of families and businesses for safe, reliable, and affordable relocations all over India.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 text-center"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-xl font-semibold text-orange-500">{b.title}</h3>
              <p className="text-gray-600 mt-2">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
