import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// ✅ City-specific data
const cityData = {
  hyderabad: {
    title: "Packers and Movers in Hyderabad",
    description: "Safe, reliable, and affordable relocation services in Hyderabad. Household shifting, office relocation, and vehicle transport made easy.",
    image: "https://source.unsplash.com/1200x630/?hyderabad,city",
  },
  vijayawada: {
    title: "Packers and Movers in Vijayawada",
    description: "Trusted Packers and Movers in Vijayawada for homes, offices, and vehicles. Stress-free relocation guaranteed.",
    image: "https://source.unsplash.com/1200x630/?vijayawada,city",
  },
  visakhapatnam: {
    title: "Packers and Movers in Visakhapatnam",
    description: "Top-notch relocation services in Visakhapatnam. Household, office, and vehicle shifting with care and efficiency.",
    image: "https://source.unsplash.com/1200x630/?visakhapatnam,city",
  },
  rajahmundry: {
    title: "Packers and Movers in Rajahmundry",
    description: "Next Go Shift Packers and Movers in Rajahmundry - Safe, affordable, and reliable relocation services including household shifting, office relocation, and vehicle transport.",
    image: "https://source.unsplash.com/1200x630/?rajahmundry,bridge",
  },
};

// ✅ Services
const services = [
  { name: "Household Shifting", emoji: "🏠" },
  { name: "Office Relocation", emoji: "🏢" },
  { name: "Vehicle Transportation", emoji: "🚗" },
  { name: "Packing & Unpacking", emoji: "📦" },
  { name: "Loading & Unloading", emoji: "⚙️" },
  { name: "Warehousing", emoji: "🏬" },
];

// ✅ Why choose us
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

  // ✅ Capitalize multi-word city names
  const cityName = city
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const cityInfo = cityData[city.toLowerCase()] || {
    title: `${cityName} Packers and Movers`,
    description: `Reliable Packers and Movers in ${cityName}. Contact us for safe and affordable relocation.`,
    image: "https://source.unsplash.com/1200x630/?city,relocation",
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

  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Helmet>
        <title>{`${cityInfo.title} | Next Go Shift`}</title>
        <meta name="description" content={cityInfo.description} />
        <meta name="keywords" content={cityKeywords} />
        <meta property="og:title" content={cityInfo.title} />
        <meta property="og:description" content={cityInfo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={cityInfo.image} />
      </Helmet>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{cityInfo.title}</h1>
          <p className="text-lg max-w-3xl mx-auto">{cityInfo.description}</p>
        </section>

        {/* Services Section */}
        <section className="bg-white py-16 px-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Our Services in {cityName}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
                <div className="text-4xl mb-3">{service.emoji}</div>
                <h3 className="text-xl font-semibold text-blue-800">{service.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-10">Why Choose Us</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-orange-500 text-left">
                <h3 className="text-purple-800 font-semibold">{index + 1}. {reason}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-500 text-white py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to book a move in {cityName}?
          </h2>
          <a href="tel:+918790140046" className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            📞 Call Us Now
          </a>
        </section>
      </main>
    </div>
  );
};

export default CityPage;
