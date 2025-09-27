import React, { useState, useEffect } from "react";

const LoanList = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const storedLoans = JSON.parse(localStorage.getItem("loans")) || [];
    setLoans(storedLoans);
  }, []);

  const updateStatus = (id, status) => {
    const updatedLoans = loans.map((loan) =>
      loan.id === id ? { ...loan, status } : loan
    );
    setLoans(updatedLoans);
    localStorage.setItem("loans", JSON.stringify(updatedLoans));
  };

  return (
    <div>
      <h2>Loan Applications</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Repaid</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>${loan.amount}</td>
              <td>{loan.date}</td>
              <td>{loan.status}</td>
              <td>{loan.repaid ? "✅" : "❌"}</td>
              <td>
                {loan.status === "pending" && (
                  <>
                    <button onClick={() => updateStatus(loan.id, "approved")}>Approve</button>
                    <button onClick={() => updateStatus(loan.id, "rejected")}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanList;
