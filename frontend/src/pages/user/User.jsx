import React, { useState } from "react";
import Footer from "../../components/common/Footer";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { Menu, X } from "lucide-react";
import TopBar from "../../components/common/TopBar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom"; 
const userLoans = [
  { id: 1, name: "Small Business Loan", amount: 10000, repaid: 4000, status: "Ongoing" },
  { id: 2, name: "Education Loan", amount: 5000, repaid: 5000, status: "Paid" },
];

const savingsGroups = [
  { id: 1, name: "Community Group A", contribution: 5000, nextPayout: "2025-10-10" },
  { id: 2, name: "Community Group B", contribution: 3000, nextPayout: "2025-11-01" },
];

const cashflowData = [
  { month: "Jan", disbursed: 5000, repaid: 2000 },
  { month: "Feb", disbursed: 7000, repaid: 3500 },
  { month: "Mar", disbursed: 6000, repaid: 4500 },
  { month: "Apr", disbursed: 8000, repaid: 7000 },
  { month: "May", disbursed: 9000, repaid: 8500 },
];

const transactions = [
  { name: "Loan Repayment - Business", date: "2025-10-10", amount: "1,000 ETB", status: "Completed" },
  { name: "Savings Contribution - Group A", date: "2025-10-12", amount: "500 ETB", status: "Pending" },
  { name: "Loan Application Submitted", date: "2025-10-15", amount: "-", status: "In Review" },
];

export default function User() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const userName = "Abebe Alemu";
  const navigate = useNavigate(); 

  const notifications = [
    { id: 1, message: "Your loan repayment is due tomorrow", date: "2025-10-18" },
    { id: 2, message: "You joined a new savings group", date: "2025-10-15" },
  ];

  const handleRepay = (loan) => alert(`Redirecting to ArifPay for loan: ${loan.name}`);
  const handleContribute = (group) => alert(`Redirecting to ArifPay for savings group: ${group.name}`);

  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "loans", label: "My Loans" },
    { id: "apply", label: "Apply for Loan" },
    { id: "savings", label: "Savings" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside
          className={`fixed md:static z-50 bg-white shadow-md w-64 p-6 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="flex justify-end mb-8 md:hidden">
            <TopBar userName={userName} notifications={3} />
            <button className="text-gray-700" onClick={() => setMenuOpen(false)}>
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
          <button className="md:hidden mb-6 text-gray-700" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>

          <TopBar userName={userName} notifications={notifications.length} />

          {/* Dashboard Section */}
          {selectedSection === "dashboard" && (
            <section className="mt-8">
             

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <h3 className="text-lg font-semibold">Active Loans</h3>
                  <p className="text-2xl font-bold mt-2">{userLoans.length}</p>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold">Savings Groups</h3>
                  <p className="text-2xl font-bold mt-2">{savingsGroups.length}</p>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold">Recent Transactions</h3>
                  <p className="text-2xl font-bold mt-2">{transactions.length}</p>
                </Card>
              </div>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Cashflow (disbursed vs repaid)</h3>
                  <div style={{ width: '100%', height: 260 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={cashflowData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="disbursed" fill="#16a34a" />
                        <Bar dataKey="repaid" fill="#059669" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Recent Transactions</h3>
                  <div className="space-y-3">
                    {transactions.map((t, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b pb-3">
                        <div>
                          <p className="font-semibold">{t.name}</p>
                          <p className="text-sm text-gray-500">{t.date} · {t.amount}</p>
                        </div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-sm ${t.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {t.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* My Loans Section */}
          {selectedSection === "loans" && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-green-700">My Loans</h2>

              <div className="space-y-4">
                {userLoans.map((loan) => (
                  <Card key={loan.id}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">{loan.name}</h3>
                        <p className="text-gray-600">Amount: {loan.amount} ETB</p>
                        <p className="text-gray-600">Status: {loan.status}</p>
                      </div>
                      <div className="space-x-2">
                        <Button onClick={() => handleRepay(loan)}>Repay</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Savings Section */}
          {selectedSection === "savings" && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Savings Groups</h2>
              <div className="space-y-4">
                {savingsGroups.map((g) => (
                  <Card key={g.id}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold">{g.name}</h3>
                        <p className="text-gray-600">Contribution: {g.contribution} ETB</p>
                        <p className="text-gray-600">Next payout: {g.nextPayout}</p>
                      </div>
                      <div>
                        <Button onClick={() => handleContribute(g)}>Contribute</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* FAQs Section */}
          {selectedSection === "faqs" && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-green-700">FAQs</h2>
              <div className="space-y-4">
                <Card>
                  <h3 className="font-semibold">How do I apply for a loan?</h3>
                  <p className="text-gray-600">Use the "Apply for Loan" section to start a new application or click "Apply Now" to go to the form.</p>
                </Card>
                <Card>
                  <h3 className="font-semibold">How do I repay my loan?</h3>
                  <p className="text-gray-600">Click the "Repay" button on a loan to start repayment through ArifPay.</p>
                </Card>
                <Card>
                  <h3 className="font-semibold">Who can join a savings group?</h3>
                  <p className="text-gray-600">Community members who meet the group's rules can join. Contact support for more details.</p>
                </Card>
              </div>
            </section>
          )}

          {/* Apply Section */}
          {selectedSection === "apply" && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Apply for a New Loan</h2>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-3 text-green-700">
                  Eligibility Criteria
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Age 18–60 and not legally incapable due to non-age reason</li>
                  <li>No outstanding loan from any lending institute, and free from Government financial obligations</li>
                  <li>Good credit history acceptable by the society and able to properly manage his/her family</li>
                  <li>Physically fit to undertake the intended business</li>
                  <li>Viable and socially acceptable business plan that can ensure repayment</li>
                  <li>Permanent resident documents</li>
                  <li>Institutions with legal personality</li>
                  <li>Willing to accept MMFI’s credit and saving policies</li>
                  <li>Business License</li>
                  <li>
                    Good credit history confirmed by employer (at least 6 months service for both borrower and guarantor)
                  </li>
                  <li>
                    Guarantor(s) should have ≥5 years to retirement or present a government employee or use own/third-party house as collateral
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Button onClick={() => navigate("/loan-form")}>
                  Apply Now
                </Button>
              </div>
            </section>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
