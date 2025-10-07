// src/pages/locations/CityPage.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heroImage from "../../assets/hero1.webp"; // Consider WebP/AVIF for faster loading

// City-specific data
const cityData = {
  hyderabad: {
    title: "Packers and Movers in Hyderabad",
    description:
      "NextGoShift offers reliable and affordable packers and movers services in Hyderabad. Our expert team ensures safe packing, loading, and delivery for household, office, and vehicle relocation across the city and beyond.",
    image: heroImage,
  },
  // ... other cities
};

// Services list
const services = [
  { name: "Household Shifting", emoji: "🏠" },
  { name: "Office Relocation", emoji: "🏢" },
  { name: "Vehicle Transportation", emoji: "🚗" },
  { name: "Packing & Unpacking", emoji: "📦" },
  { name: "Loading & Unloading", emoji: "⚙️" },
  { name: "Warehousing", emoji: "🏬" },
];

// Why choose us
const reasons = [
  "10+ years of experience in Packers & Movers",
  "Best packing materials for complete safety",
  "Trained & dedicated team for smooth shifting",
  "On-time home-to-home delivery without stress",
  "Affordable & transparent pricing",
  "100% customer satisfaction guaranteed",
];

const CityPage = () => {
  const { city } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [city]);

  const cityName = city
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const cityInfo = cityData[city.toLowerCase()] || {
    title: `${cityName} Packers and Movers`,
    description: `Reliable Packers and Movers in ${cityName}. Contact us for safe and affordable relocation.`,
    image: heroImage,
  };

  const cityKeywords = [
    `Packers and movers in ${cityName}`,
    `Home shifting services ${cityName}`,
    `Office relocation ${cityName}`,
    `Vehicle transport ${cityName}`,
    `Local shifting services ${cityName}`,
    `Best movers in ${cityName}`,
    `Affordable packers ${cityName}`,
  ].join(", ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      alert("✅ Message sent successfully!");
      e.target.reset();
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="font-sans flex flex-col min-h-screen bg-gray-50">
      <Helmet>
        <title>{`${cityInfo.title} | Next Go Shift`}</title>
        <meta name="description" content={cityInfo.description} />
        <meta name="keywords" content={cityKeywords} />
        <meta property="og:title" content={cityInfo.title} />
        <meta property="og:description" content={cityInfo.description} />
        <meta property="og:image" content={cityInfo.image} />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href={`https://nextgoshift.in/packers-and-movers/${city}`}
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,40,0.7), rgba(10,10,40,0.7)), url(${cityInfo.image})`,
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{cityInfo.title}</h1>
        <p className="text-lg max-w-3xl mx-auto">{cityInfo.description}</p>
      </section>

      {/* Services */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Our Services in {cityName}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg hover:-translate-y-1 transition transform text-center"
            >
              <div className="text-4xl mb-3">{service.emoji}</div>
              <h3 className="text-xl font-semibold text-blue-800">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-10">
          Why Choose Us
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-orange-500 text-left"
            >
              <h3 className="text-purple-800 font-semibold">
                {idx + 1}. {reason}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Want to book a move in {cityName}?
        </h2>
        <a
          href="tel:+919666465890"
          className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          📞 Call Us Now
        </a>
      </section>

      {/* Contact */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
          {/* Info */}
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
            >
              📞 Call Us Now
            </a>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Send a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
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

      {/* Floating Call */}
      <a
        href="tel:+919666465890"
        className="fixed bottom-20 right-5 bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 z-50 flex items-center justify-center animate-bounce"
        aria-label="Call Now"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.48 2.53.74 3.88.74a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.25 2.67.74 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
        </svg>
      </a>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919666465880"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 .01 5.37.01 12c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.61A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.19-3.48-8.52zM12 22.02c-1.95 0-3.86-.52-5.53-1.52l-.4-.24-3.68.96.98-3.58-.26-.37A9.9 9.9 0 012.02 12C2.02 6.49 6.49 2.02 12 2.02S21.98 6.49 21.98 12 17.51 22.02 12 22.02zm5.32-7.46c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.6-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.53-.88-2.1-.23-.55-.46-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.17 3.02c.15.19 2 3.06 4.84 4.29.68.29 1.21.46 1.62.59.68.21 1.3.18 1.79.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.06-.13-.26-.21-.55-.36z"/>
        </svg>
      </a>
    </div>
  );
};

export default CityPage;
