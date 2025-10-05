// src/pages/ContactPage.jsx
import React, { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "968f7684-0c60-4cbf-919d-ebc56630401a",
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          subject: "New Contact Form Submission",
          redirect: "", // optional: redirect after submission
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("❌ An error occurred. Please try again.");
    }
  };

  return (
    <div className="font-sans flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-white opacity-10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full"></div>

              <h2 className="text-3xl font-bold mb-6">Reach Out</h2>
              <p className="mb-6 text-purple-100">
                We’re always here to answer your queries and help you plan your move smoothly.
              </p>
              <ul className="space-y-4 text-purple-100">
                <li className="flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  Tadepalligudem 534101, West Godavari, Andhra Pradesh, India
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  +91 8790140046
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">✉️</span>
                  simhalion899@gmail.com
                </li>
              </ul>
              <a
                href="tel:+918790140046"
                className="inline-block mt-8 bg-white text-purple-700 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-purple-50 transition"
              >
                📞 Call Now
              </a>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500 peer"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500 peer"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Your Email
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500 peer"
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Your Message
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Send Message
                </button>
                {status && <p className="mt-4 text-center text-purple-700">{status}</p>}
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
