import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const storedLoans = JSON.parse(localStorage.getItem("loans")) || [];
    setLoans(storedLoans);
  }, []);

  const approved = loans.filter((l) => l.status === "approved").length;
  const pending = loans.filter((l) => l.status === "pending").length;
  const rejected = loans.filter((l) => l.status === "rejected").length;

  return (
    <div>
      <h2>Loan Statistics</h2>
      <ul>
        <li>Approved: {approved}</li>
        <li>Pending: {pending}</li>
        <li>Rejected: {rejected}</li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
