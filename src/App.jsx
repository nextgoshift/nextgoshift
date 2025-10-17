// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Pages
import HomePage from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";


// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>

      

      {/* Persistent Header */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
      
      </Routes>

      {/* Persistent Footer */}
      <Footer />
    </Router>
  );
}

export default App;
