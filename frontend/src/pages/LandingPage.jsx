import React, { useRef } from "react";
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

export default function LandingPage() {
  const supportRef = useRef(null);

  const scrollToSupport = () => {
    supportRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: <HandCoins className="w-10 h-10 text-white" />,
      title: "Access to Small Loans",
      description:
        "Microfinance provides small, affordable loans to individuals who lack access to traditional banking, helping them start or grow businesses.",
    },
    {
      icon: <CalendarCheck2 className="w-10 h-10 text-white" />,
      title: "Flexible Repayment Terms",
      description:
        "Manageable repayment schedules tailored to the borrower’s income make it easier to repay and maintain financial stability.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-white" />,
      title: "Training and Support",
      description:
        "We offer financial literacy training, business advice, and skill development to improve money management and entrepreneurial success.",
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Community Focus",
      description:
        "Our programs foster local economic growth through a community-centric approach and mutual support networks.",
    },
  ];

  const benefits = [
    {
      icon: <Award className="w-10 h-10 text-white" />,
      title: "25 Years of Experience",
      description:
        "Decades of experience helping individuals and small businesses achieve financial independence.",
    },
    {
      icon: <Globe className="w-10 h-10 text-white" />,
      title: "Global Solutions",
      description:
        "Our reach extends to communities worldwide, creating global financial inclusion opportunities.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      title: "Individual Approach",
      description:
        "Each borrower receives tailored support, ensuring flexible and sustainable growth paths.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-white" />,
      title: "Exclusive Partnerships",
      description:
        "We collaborate with local and international partners to expand access and opportunities.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Navbar scrollToSupport={scrollToSupport} />

      {/* HERO SECTION */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-700 to-green-500 text-white px-6 text-center"
      >
        <h1 className="text-5xl font-extrabold mb-4">
          Empowering Communities Through Microfinance
        </h1>
        <p className="text-lg max-w-2xl">
          We provide small loans, financial training, and continuous support to
          help individuals and small businesses thrive.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("services")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 bg-white text-green-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 cursor-pointer"
        >
          Get Started
        </button>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-gray-50 px-6">
        <div className="text-center mb-12">
          <h4 className="text-green-600 font-semibold uppercase">Our Services</h4>
          <h2 className="text-3xl font-bold mt-2">
            Helping You Build a Better Financial Future
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex items-start gap-6"
            >
              <div className="bg-green-600 p-4 rounded-full">{service.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section id="why" className="py-20 bg-white px-6">
        <div className="text-center mb-12">
          <h4 className="text-green-600 font-semibold uppercase">Why Choose Us</h4>
          <h2 className="text-3xl font-bold mt-2">
            Trusted Partner for Financial Growth
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex items-start gap-6"
            >
              <div className="bg-green-600 p-4 rounded-full">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section
        ref={supportRef}
        className="flex flex-col md:flex-row justify-between items-center px-10 py-20 bg-green-50"
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://i.pinimg.com/736x/bc/48/b4/bc48b424f3c32c6086413530693e1e6c.jpg"
            alt="Support agent"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="md:w-1/2 md:pl-12">
          <p className="text-green-700 font-semibold mb-2">Support</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Request a Free Call Back
          </h2>
          <p className="text-gray-600 mb-6">
            Would you like to speak to one of our financial advisors? Submit your
            details and we’ll get in touch shortly.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600">
              <option>Financial Consulting</option>
              <option>Loan Assistance</option>
              <option>Investment Guidance</option>
            </select>
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-700 text-white text-center py-6 mt-10">
        <p>© 2025 GreenFinance. All rights reserved.</p>
      </footer>
    </div>
  );
}
