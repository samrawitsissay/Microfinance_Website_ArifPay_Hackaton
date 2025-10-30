import React, { useRef } from "react";
import StatsSection from "../components/StatsSection";
import Navbar from "../components/Navbar";
import {
  HandCoins,
  CalendarCheck2,
  BookOpen,
  Users,
  Globe,
  Handshake,
  Lightbulb,
  Award,
} from "lucide-react";
import "../styles/LandingPage.css"; // make sure this file exists

export default function LandingPage() {
  const supportRef = useRef(null);

  const scrollToSupport = () => {
    supportRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: <HandCoins className="icon-svg" />,
      title: "Access to Small Loans",
      description:
        "Microfinance provides small, affordable loans to individuals who lack access to traditional banking, helping them start or grow businesses.",
    },
    {
      icon: <CalendarCheck2 className="icon-svg" />,
      title: "Flexible Repayment Terms",
      description:
        "Manageable repayment schedules tailored to the borrower’s income make it easier to repay and maintain financial stability.",
    },
    {
      icon: <BookOpen className="icon-svg" />,
      title: "Training and Support",
      description:
        "We offer financial literacy training, business advice, and skill development to improve money management and entrepreneurial success.",
    },
    {
      icon: <Users className="icon-svg" />,
      title: "Community Focus",
      description:
        "Our programs foster local economic growth through a community-centric approach and mutual support networks.",
    },
  ];

  const benefits = [
    {
      icon: <Award className="icon-svg" />,
      title: "25 Years of Experience",
      description:
        "Decades of experience helping individuals and small businesses achieve financial independence.",
    },
    {
      icon: <Globe className="icon-svg" />,
      title: "Global Solutions",
      description:
        "Our reach extends to communities worldwide, creating global financial inclusion opportunities.",
    },
    {
      icon: <Lightbulb className="icon-svg" />,
      title: "Individual Approach",
      description:
        "Each borrower receives tailored support, ensuring flexible and sustainable growth paths.",
    },
    {
      icon: <Handshake className="icon-svg" />,
      title: "Exclusive Partnerships",
      description:
        "We collaborate with local and international partners to expand access and opportunities.",
    },
  ];

  return (
    <div className="landing-page">
      <Navbar scrollToSupport={scrollToSupport} />

      {/* HERO */}
      <section
        id="home"
        className="hero-section"
        style={{
          backgroundImage: `url("/src/assets/images/microfinance.jpg")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Empowering Communities Through Microfinance</h1>
          <p className="hero-subtitle">
            We provide small loans, financial training, and continuous support to help individuals and small businesses thrive.
          </p>
          <button className="hero-btn" onClick={() => document.getElementById("services")?.scrollIntoView({behavior: "smooth"})}>
            Get Started
          </button>
        </div>
      </section>

      <StatsSection />

      {/* SERVICES */}
      <section id="services" className="services-section">
        <div className="section-header">
          <h4>Our Services</h4>
          <h2>Helping You Build a Better Financial Future</h2>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="card fade-in">
              <div className="icon">{service.icon}</div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section id="why" className="why-section">
        <div className="section-header">
          <h4>Why Choose Us</h4>
          <h2>Trusted Partner for Financial Growth</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map((item, i) => (
            <div key={i} className="card fade-in">
              <div className="icon">{item.icon}</div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT */}
      <section id="support" ref={supportRef} className="support-section">
        <div className="support-img">
          <img
            src="https://i.pinimg.com/736x/bc/48/b4/bc48b424f3c32c6086413530693e1e6c.jpg"
            alt="Support agent"
          />
        </div>
        <div className="support-form">
          <p>Support</p>
          <h2>Request a Free Call Back</h2>
          <p>
            Would you like to speak to one of our financial advisors? Submit your details and we’ll get in touch shortly.
          </p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Phone Number" />
            <select>
              <option>Financial Consulting</option>
              <option>Loan Assistance</option>
              <option>Investment Guidance</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Mic.Fin. All rights reserved.</p>
      </footer>
    </div>
  );
}
