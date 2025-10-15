import React, { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { Wallet, Users, PiggyBank } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Wallet className="text-green-600 w-10 h-10" />,
      number: 535.2,
      suffix: "M",
      label: "Outstanding Loan (Birr)",
    },
    {
      icon: <Users className="text-green-600 w-10 h-10" />,
      number: 143,
      suffix: "K",
      label: "Active Borrowers",
    },
    {
      icon: <PiggyBank className="text-green-600 w-10 h-10" />,
      number: 177.9,
      suffix: "M",
      label: "Savings (Birr)",
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={ref}
      className="bg-gray-50 py-16"
      aria-label="Microfinance statistics"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Green accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-green-700 to-green-500 rounded-sm mb-10" />

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition flex flex-col items-center justify-center"
            >
              <div className="mb-4">{stat.icon}</div>

              <div className="text-4xl font-extrabold text-black flex items-baseline">
                {inView ? (
                  <CountUp
                    end={stat.number}
                    decimals={stat.number % 1 !== 0 ? 1 : 0}
                    duration={2.5}
                  />
                ) : (
                  0
                )}
                <span className="text-2xl font-bold ml-1 text-green-600">
                  {stat.suffix}
                </span>
              </div>

              <p className="text-gray-600 text-base mt-3 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
