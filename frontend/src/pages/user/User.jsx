import React from "react";
import NavBar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

const userLoans = [
  { id: 1, name: "Small Business Loan", amount: 10000, repaid: 4000, status: "Ongoing" },
  { id: 2, name: "Education Loan", amount: 5000, repaid: 5000, status: "Paid" },
];

const savingsGroups = [
  { id: 1, name: "Community Group A", contribution: 5000, nextPayout: "2025-10-10" },
  { id: 2, name: "Community Group B", contribution: 3000, nextPayout: "2025-11-01" },
];

export default function User() {
  const handleRepay = (loan) => {
    alert(`Redirecting to ArifPay for loan: ${loan.name}`);
  };

  const handleContribute = (group) => {
    alert(`Redirecting to ArifPay for savings group: ${group.name}`);
  };

  return (
    <>
      <NavBar userType="user" />
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

        {/* Loans Overview */}
        <h2 className="text-2xl font-bold mb-4">My Loans</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {userLoans.map((loan) => {
            const progress = (loan.repaid / loan.amount) * 100;
            return (
              <Card key={loan.id}>
                <h3 className="font-bold text-lg mb-2">{loan.name}</h3>
                <p>Amount: {loan.amount} ETB</p>
                <p>Status: {loan.status}</p>
                <div className="bg-gray-200 h-4 rounded mt-2">
                  <div
                    className="bg-green-600 h-4 rounded"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                {loan.status === "Ongoing" && (
                  <Button onClick={() => handleRepay(loan)} className="mt-4">
                    Repay Now
                  </Button>
                )}
              </Card>
            );
          })}
        </div>

        {/* Savings Groups Overview */}
        <h2 className="text-2xl font-bold mb-4">My Savings Groups</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {savingsGroups.map((group) => (
            <Card key={group.id}>
              <h3 className="font-bold text-lg mb-2">{group.name}</h3>
              <p>Contribution: {group.contribution} ETB</p>
              <p>Next Payout: {group.nextPayout}</p>
              <Button onClick={() => handleContribute(group)} className="mt-4">
                Contribute
              </Button>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
