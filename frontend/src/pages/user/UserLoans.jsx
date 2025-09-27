import React from "react";
import Navbar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

const loans = [
  { id: 1, name: "Small Business Loan", amount: 10000, status: "Pending" },
  { id: 2, name: "Education Loan", amount: 5000, status: "Approved" },
];

export default function UserLoans() {
  const handleRepay = (loan) => {
    alert(`Redirecting to ArifPay for loan ${loan.name}`);
  };

  return (
    <>
      <Navbar userType="user" />
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Loans</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {loans.map((loan) => (
            <Card key={loan.id}>
              <h2 className="font-bold text-xl mb-2">{loan.name}</h2>
              <p>Amount: {loan.amount} ETB</p>
              <p>Status: {loan.status}</p>
              {loan.status === "Pending" && (
                <Button onClick={() => handleRepay(loan)}>Repay Now</Button>
              )}
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
