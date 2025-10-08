import React from "react";
import {
  HandCoins,
  CalendarCheck2,
  BookOpen,
  Users,
  Globe,
  Handshake,
  Lightbulb,
  Headphones,
  Award,
} from "lucide-react";

export default function Services() {
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
        "Decades of experience helping individuals and small businesses achieve financial independence through microfinance.",
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
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Business Opportunities",
      description:
        "Supporting micro-entrepreneurs and start-ups through targeted microfinance programs.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-white" />,
      title: "24/7 Online Support",
      description:
        "Our team is always available to assist with loan applications, repayments, and inquiries.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      {/* ======= SERVICES SECTION ======= */}
      <section className="text-center mb-20">
        <h4 className="text-green-600 font-semibold uppercase tracking-wide">
          Our Services
        </h4>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
          Empowering Communities Through Microfinance
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex items-start gap-6"
            >
              <div className="bg-green-600 p-4 rounded-full shadow-md">
                {service.icon}
              </div>
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

      {/* ======= BENEFITS SECTION ======= */}
      <section className="text-center">
        <h4 className="text-green-600 font-semibold uppercase tracking-wide">
          Why Work With Us
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Our Commitment to Financial Empowerment
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex items-start gap-6"
            >
              <div className="bg-green-600 p-4 rounded-full shadow-md">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
