// src/pages/WhyChooseUs.jsx
import React from "react";
import { ShieldCheck, TrendingUp, Users, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    title: "Trust & Transparency",
    desc: "We maintain open communication and fairness in all our financial dealings.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-white" />,
    title: "Empowering Growth",
    desc: "We help individuals and businesses grow sustainably through micro-loans and guidance.",
  },
  {
    icon: <Users className="w-10 h-10 text-white" />,
    title: "Community Development",
    desc: "Our approach focuses on building strong, self-sufficient communities.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-white" />,
    title: "Long-Term Support",
    desc: "We stand by our clients with continuous advice and mentorship.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="text-center mb-12">
        <h4 className="text-green-600 font-semibold uppercase tracking-wide">
          Why Choose Us
        </h4>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
          Building Financial Confidence Together
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition flex items-start gap-6"
          >
            <div className="bg-green-600 p-4 rounded-full">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
