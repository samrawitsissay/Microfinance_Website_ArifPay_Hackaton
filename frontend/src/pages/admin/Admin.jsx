import React from "react";
import Navbar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import Card from "../../components/common/Card";
import LoanChart from "../../components/admin/LoanChart";
import Button from "../../components/common/Button";

const loanStats = [
  { title: "Total Loans", count: 120 },
  { title: "Pending", count: 30 },
  { title: "Approved", count: 80 },
  { title: "Paid", count: 10 },
];

const monthlyLoans = [
  { month: "Jan", loans: 5 },
  { month: "Feb", loans: 10 },
  { month: "Mar", loans: 8 },
  { month: "Apr", loans: 12 },
  { month: "May", loans: 15 },
  { month: "Jun", loans: 20 },
];

const loans = [
  { id: 1, name: "Small Business Loan", amount: 10000, status: "Pending" },
  { id: 2, name: "Education Loan", amount: 5000, status: "Approved" },
  { id: 3, name: "Medical Loan", amount: 7000, status: "Pending" },
];

export default function Admin() {
  const handleApprove = (loan) => alert(`Approved loan: ${loan.name}`);
  const handleReject = (loan) => alert(`Rejected loan: ${loan.name}`);

  return (
    <>
      <Navbar userType="admin" />
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* Loan Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {loanStats.map((stat) => (
            <Card key={stat.title}>
              <h2 className="text-xl font-bold">{stat.count}</h2>
              <p>{stat.title}</p>
            </Card>
          ))}
        </div>

        {/* Loan Chart */}
        <div className="mb-10">
          <LoanChart data={monthlyLoans} />
        </div>

        {/* Loan List */}
        <h2 className="text-2xl font-bold mb-4">Pending Loans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {loans.map((loan) => (
            <Card key={loan.id}>
              <h3 className="font-bold text-lg mb-2">{loan.name}</h3>
              <p>Amount: {loan.amount} ETB</p>
              <p>Status: {loan.status}</p>
              <div className="mt-4 flex space-x-2">
                <Button onClick={() => handleApprove(loan)}>Approve</Button>
                <Button onClick={() => handleReject(loan)}>Reject</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
