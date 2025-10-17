import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import founderImage from "../assets/founder.jpg";

const benefits = [
  { icon: "⏳", title: "10+ Years Experience", desc: "Over a decade of expertise in relocation services across India." },
  { icon: "📦", title: "Safe & Secure Packing", desc: "High-quality packing materials to ensure complete safety of your goods." },
  { icon: "👷‍♂️", title: "Professional Team", desc: "Trained staff ensures a smooth, stress-free moving experience." },
  { icon: "💰", title: "Affordable Pricing", desc: "Transparent, budget-friendly services with no hidden charges." },
  { icon: "⏰", title: "On-Time Delivery", desc: "Your goods are delivered safely and on schedule, every time." },
  { icon: "⭐", title: "Customer Satisfaction", desc: "24/7 support to address all your shifting concerns." },
];

const About = () => {
  return (
    <div className="font-sans flex flex-col min-h-screen bg-gray-50">
      {/* SEO */}
      <Helmet>
        <title>About Us | Next Go Shift Packers & Movers</title>
        <meta
          name="description"
          content="Learn about the story of Next Go Shift Packers & Movers, founded by Narasimha Gunje — a vision built on trust, innovation, and a mission to simplify relocation across India."
        />
      </Helmet>

     

      {/* Founder Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={founderImage}
              alt="Founder Narasimha Gunje"
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
              moving homes should feel exciting, not exhausting. After witnessing countless
              people struggle with unreliable packers and unexpected costs, he envisioned
              a brand built on transparency, care, and technology — where every move feels
              effortless and every customer feels valued.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              His leadership turned that dream into reality. What started as a local service
              quickly grew into one of India’s most trusted relocation brands, recognized for
              its honesty, precision, and people-first approach. Today, Narasimha continues
              to lead with passion — ensuring every move is not just about boxes, but about
              <em> trust, comfort, and new beginnings.</em>
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
            We strive to make every relocation stress-free, secure, and memorable.
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for a stress-free move?</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose NextGoShift?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Trusted by thousands of families and businesses for safe, reliable, and affordable relocations.</p>
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
