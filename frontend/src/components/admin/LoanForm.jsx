import React, { useState } from "react";

const LoanForm = () => {
  const [loan, setLoan] = useState({ amount: "", date: "", status: "pending", repaid: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedLoans = JSON.parse(localStorage.getItem("loans")) || [];
    const newLoan = { ...loan, id: storedLoans.length + 1 };
    storedLoans.push(newLoan);
    localStorage.setItem("loans", JSON.stringify(storedLoans));
    alert("✅ Loan submitted successfully!");
    setLoan({ amount: "", date: "", status: "pending", repaid: false });
  };

  return (
    <form onSubmit={handleSubmit} className="loan-form">
      <input
        type="number"
        placeholder="Loan Amount"
        value={loan.amount}
        onChange={(e) => setLoan({ ...loan, amount: e.target.value })}
        required
      />
      <input
        type="date"
        value={loan.date}
        onChange={(e) => setLoan({ ...loan, date: e.target.value })}
        required
      />
      <button type="submit">Apply Loan</button>
    </form>
  );
};

export default LoanForm;
