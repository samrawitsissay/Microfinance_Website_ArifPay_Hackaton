import React, { useEffect, useState } from "react";
import api from "../api/api"; // Your axios instance
import { FaClock, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";

export default function MyLoans() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const res = await api.get("/loans/my-loans/");
        setLoans(res.data);
      } catch (err) {
        console.error("❌ Error fetching loans:", err);
        setError("Failed to load loans.");
      } finally {
        setLoading(false);
      }
    };
    fetchLoans();
  }, []);

  const handlePayment = async (loanId, currentTotal, monthly) => {
    try {
      const newTotal = parseFloat(currentTotal) + parseFloat(monthly);

      await api.patch(`/loans/update-loan/${loanId}/`, {
        total_paid: newTotal,
        stage: newTotal >= loans.find(l => l.id === loanId).loan_amount ? "completed" : "active",
      });

      alert("✅ Payment recorded successfully!");
      setLoans(loans.map(l => (l.id === loanId ? { ...l, total_paid: newTotal } : l)));
    } catch (err) {
      console.error("❌ Payment error:", err);
      alert("Payment failed!");
    }
  };

  if (loading) return <p className="text-gray-600">Loading your loans...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (loans.length === 0) return <p>No loans found.</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-green-700">My Loans</h2>

      <div className="space-y-6">
        {loans.map((loan) => {
          const progress = (loan.total_paid / loan.loan_amount) * 100;
          const remaining = loan.loan_amount - loan.total_paid;

          return (
            <div
              key={loan.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {loan.purpose_of_loan || "Loan Application"}
              </h3>
              <p className="text-gray-700 mb-1">Loan Amount: {loan.loan_amount} ETB</p>
              <p className="text-gray-700 mb-1">Stage: <span className="font-semibold">{loan.stage}</span></p>
              <p className="text-gray-700 mb-1">Monthly Payment: {loan.monthly_payment} ETB</p>
              <p className="text-gray-700 mb-2">Total Paid: {loan.total_paid} ETB</p>
              <p className="text-gray-700 mb-2">Remaining Balance: {remaining} ETB</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 my-3">
                <div
                  className={`h-3 rounded-full ${
                    progress === 100 ? "bg-green-600" : "bg-yellow-500"
                  }`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Reminder */}
              {loan.stage === "active" && (
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <FaClock className="text-yellow-500 mr-2" />
                  Next payment due on:{" "}
                  <span className="ml-1 font-semibold">
                    {loan.due_date || "Not Set"}
                  </span>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center space-x-3 mt-4">
                {loan.stage === "pending" && (
                  <button
                    onClick={() => alert("Your application is under review.")}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                  >
                    Pending Approval
                  </button>
                )}

                {loan.stage === "first_screening" && (
                  <button
                    onClick={() => alert("Please fill the screening form.")}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Fill Screening Form
                  </button>
                )}

                {loan.stage === "active" && (
                  <button
                    onClick={() =>
                      handlePayment(loan.id, loan.total_paid, loan.monthly_payment)
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <FaMoneyBillWave /> Pay Monthly
                  </button>
                )}

                {loan.stage === "completed" && (
                  <div className="flex items-center text-green-700 font-semibold">
                    <FaCheckCircle className="mr-2" /> Loan Fully Repaid
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
