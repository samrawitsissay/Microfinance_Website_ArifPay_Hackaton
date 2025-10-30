import React, { useEffect, useState } from "react";
import "../styles/StatsSection.css";

export default function StatsSection() {
  const stats = [
    { label: "Clients Served", value: 1200 },
    { label: "Loans Approved", value: 850 },
    { label: "Active Users", value: 430 },
    { label: "Years of Service", value: 25 },
  ];

  const [visible, setVisible] = useState(false);

  // Trigger fade-in animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".stats-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`stats-section ${visible ? "fade-in" : ""}`}>
      <div className="stats-container">
        <h2>Our Achievements</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
