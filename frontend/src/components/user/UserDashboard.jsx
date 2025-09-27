import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../components/Footer";

const UserPage = () => {
  const [loan, setLoan] = useState({ amount: "", date: "", status: "pending", repaid: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedLoans = JSON.parse(localStorage.getItem("loans")) || [];
    const newLoan = { ...loan, id: storedLoans.length + 1 };
    storedLoans.push(newLoan);
    localStorage.setItem("loans", JSON.stringify(storedLoans));
    alert("✅ Loan application submitted!");
    setLoan({ amount: "", date: "", status: "pending", repaid: false });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main style={{ flex: 1, padding: "20px" }}>
        <h2>User Loan Application</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            maxWidth: "400px",
            marginTop: "20px",
          }}
        >
          <input
            type="number"
            placeholder="Loan Amount"
            value={loan.amount}
            onChange={(e) => setLoan({ ...loan, amount: e.target.value })}
            required
            style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
          <input
            type="date"
            value={loan.date}
            onChange={(e) => setLoan({ ...loan, date: e.target.value })}
            required
            style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              background: "#4e73df",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Submit Loan Application
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default UserPage;
