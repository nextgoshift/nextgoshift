import React, { useEffect } from "react"; // ✅ import useEffect
import { Link, useLocation } from "react-router-dom"; // ✅ import useLocation
import { Helmet } from "react-helmet-async";

// Local city images
import HyderabadImg from "../assets/Hyderabad.jpeg";
import VijayawadaImg from "../assets/Vijayawada.jpeg";
import VisakhapatnamImg from "../assets/Visakhapatnam.jpeg";
import RajahmundryImg from "../assets/Rajahmundry.jpeg";
import EluruImg from "../assets/Eluru.jpeg";
import TadepalligudemImg from "../assets/Tadepalligudem.jpeg";
import TanukuImg from "../assets/Tanuku.jpeg";
import BhimavaramImg from "../assets/Bhimavaram.jpeg";
import PalakolluImg from "../assets/Palakollu.jpeg";
import NarsapuramImg from "../assets/Narsapuram.jpeg";
import JangareddygudemImg from "../assets/Jangareddygudem.jpeg";
import AmalapuramImg from "../assets/Amalapuram.jpeg";
import KakinadaImg from "../assets/Kakinada.jpeg";
import TuniImg from "../assets/Tuni.jpeg";  
import AnnavaramImg from "../assets/Annavaram.jpeg";
import PithapuramImg from "../assets/Pithapuram.jpeg";


// Full list of locations
const locations = [
  { name: "Hyderabad", image: HyderabadImg },
  { name: "Vijayawada", image: VijayawadaImg },
  { name: "Visakhapatnam", image: VisakhapatnamImg },
  { name: "Rajahmundry", image: RajahmundryImg },
  { name: "Eluru", image: EluruImg },
  { name: "Tadepalligudem", image: TadepalligudemImg },
  { name: "Tanuku", image: TanukuImg},
  { name: "Bhimavaram", image: BhimavaramImg },
  { name: "Palakollu", image: PalakolluImg },
  { name: "Narsapuram", image: NarsapuramImg },
  { name: "Jangareddygudem", image: JangareddygudemImg },
  { name: "Amalapuram", image: AmalapuramImg },
  { name: "Kakinada", image: KakinadaImg },
  { name: "Tuni", image: TuniImg },
  { name: "Annavaram", image: AnnavaramImg },
  { name: "Pithapuram", image: PithapuramImg },
  
];

// Generate SEO keywords
const generateCityKeywords = (cityName) => [
  `Packers and movers in ${cityName}`,
  `Home shifting services ${cityName}`,
  `Office relocation ${cityName}`,
  `Vehicle transport ${cityName}`,
  `Local shifting services ${cityName}`,
  `Best movers in ${cityName}`,
  `Affordable packers ${cityName}`
].join(", ");

const allCityKeywords = locations.map(loc => generateCityKeywords(loc.name)).join(", ");

export default function LocationsPage() {
  

  return (
    <div className="font-sans flex flex-col min-h-screen bg-gray-50">
      <Helmet>
        <title>Our Locations | Next Go Shift Packers and Movers</title>
        <meta
          name="description"
          content="We provide professional packers and movers services across major cities in Andhra Pradesh & Telangana. Find a location near you and book your move today."
        />
        <meta name="keywords" content={allCityKeywords} />
      </Helmet>

      <main className="flex-grow">
       

        {/* Locations Grid */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc, index) => (
              <Link
                key={index}
                to={`/locations/${loc.name.toLowerCase()}`}
                className="block"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
                  <img
                    src={loc.image}
                    alt={`${loc.name} city view`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-purple-800">{loc.name}</h3>
                    <p className="text-gray-600 mt-2">
                      Professional shifting services available in {loc.name}.
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        
      </main>
    </div>
  );
}
