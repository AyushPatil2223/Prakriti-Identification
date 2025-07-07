import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import GeneratePage from "./pages/GeneratePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TwoStepVerificationPage from "./pages/2StepVerificationPage";
import Publicchat from "./pages/Publicchat";
import Questions from "./pages/Questions";
import Thoughts from "./pages/Thoughts";
import Yoga from "./pages/Yoga";
import Chatbot from "./pages/Chatbot";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Ensure this file exists

function Layout() {
  const location = useLocation(); // Get current path

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/2-step-verification" element={<TwoStepVerificationPage />} />
          <Route path="/generate" element={<GeneratePage />} />
          <Route path="/public_chat" element={<Publicchat />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </main>

      {/* Hide Footer on Thoughts & Chatbot pages */}
      {!["/thoughts", "/chatbot"].includes(location.pathname) && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
