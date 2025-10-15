import React, { useState } from "react";
import Footer from "../../components/common/Footer";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { Menu, X } from "lucide-react";
import TopBar from "../../components/common/TopBar"; 

const userLoans = [
  { id: 1, name: "Small Business Loan", amount: 10000, repaid: 4000, status: "Ongoing" },
  { id: 2, name: "Education Loan", amount: 5000, repaid: 5000, status: "Paid" },
];

const savingsGroups = [
  { id: 1, name: "Community Group A", contribution: 5000, nextPayout: "2025-10-10" },
  { id: 2, name: "Community Group B", contribution: 3000, nextPayout: "2025-11-01" },
];

export default function User() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("dashboard");

  const handleRepay = (loan) => {
    alert(`Redirecting to ArifPay for loan: ${loan.name}`);
  };

  const handleContribute = (group) => {
    alert(`Redirecting to ArifPay for savings group: ${group.name}`);
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "loans", label: "My Loans" },
    { id: "apply", label: "Apply for Loan" },
    { id: "savings", label: "Savings" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <>
      {/* Removed NavBar */}
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside
          className={`fixed md:static z-50 bg-white shadow-md w-64 p-6 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="flex justify-end mb-8 md:hidden">
             <TopBar userName="John Doe" notifications={3} />
            <button
              className="text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              <X size={24} />
            </button>
            
          </div>

          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedSection === item.id
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-green-100"
                  }`}
                  onClick={() => {
                    setSelectedSection(item.id);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 transition-all duration-300">
          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden mb-6 text-gray-700"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
 <TopBar userName="John Doe" notifications={3} />
          {selectedSection === "dashboard" && (
            <div>
              
              <h1 className="text-3xl font-bold mb-6 text-green-700">
                Welcome Back!
              </h1>
              <p className="text-gray-600">
                Here’s an overview of your loans and savings.
              </p>
            </div>
          )}

          {selectedSection === "loans" && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                My Loans
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {userLoans.map((loan) => {
                  const progress = (loan.repaid / loan.amount) * 100;
                  return (
                    <Card key={loan.id}>
                      <h3 className="font-bold text-lg mb-2 text-gray-800">
                        {loan.name}
                      </h3>
                      <p>Amount: {loan.amount} ETB</p>
                      <p>Status: {loan.status}</p>
                      <div className="bg-gray-200 h-3 rounded mt-2">
                        <div
                          className="bg-green-600 h-3 rounded transition-all duration-500"
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
            </section>
          )}

          {selectedSection === "apply" && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                Apply for a New Loan
              </h2>
              <p className="text-gray-600 mb-4">
                You can apply for a business, education, or emergency loan.
              </p>
              <Button>Apply Now</Button>
            </section>
          )}

          {selectedSection === "savings" && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                My Savings Groups
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {savingsGroups.map((group) => (
                  <Card key={group.id}>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">
                      {group.name}
                    </h3>
                    <p>Contribution: {group.contribution} ETB</p>
                    <p>Next Payout: {group.nextPayout}</p>
                    <Button
                      onClick={() => handleContribute(group)}
                      className="mt-4"
                    >
                      Contribute
                    </Button>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {selectedSection === "faqs" && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-green-700">FAQs</h2>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>How do I repay my loan?</strong>  
                  You can repay through ArifPay from your loan dashboard.
                </li>
                <li>
                  <strong>Can I join multiple savings groups?</strong>  
                  Yes, you can join and contribute to multiple groups.
                </li>
              </ul>
            </section>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
