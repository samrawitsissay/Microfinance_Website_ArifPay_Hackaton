import React, { useState } from "react";
import Footer from "../../components/common/Footer";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import TopBar from "../../components/common/TopBar";
import { Menu, X } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useNavigate } from "react-router-dom";

const loanRequests = [
  { id: 1, borrower: "Abebe Alemu", type: "Business Loan", amount: "10,000 ETB", status: "Pending" },
  { id: 2, borrower: "Marta Bekele", type: "Education Loan", amount: "7,500 ETB", status: "Pending" },
  { id: 3, borrower: "Kebede Teshome", type: "Startup Loan", amount: "15,000 ETB", status: "Pending" },
];

const loanStats = [
  { name: "Active Loans", value: 45 },
  { name: "Paid Loans", value: 70 },
  { name: "Pending Applications", value: 15 },
];
const COLORS = ["#16a34a", "#86efac", "#bbf7d0"];

const reportData = [
  { month: "Jan", revenue: 12000, expenses: 8000 },
  { month: "Feb", revenue: 15000, expenses: 9500 },
  { month: "Mar", revenue: 14000, expenses: 8700 },
  { month: "Apr", revenue: 18000, expenses: 12000 },
  { month: "May", revenue: 20000, expenses: 13500 },
];

const transactions = [
  { id: 1, type: "Loan Disbursement", date: "2025-10-25", amount: "8,000 ETB", status: "Completed" },
  { id: 2, type: "Loan Repayment", date: "2025-10-27", amount: "1,500 ETB", status: "Completed" },
  { id: 3, type: "Service Fee", date: "2025-10-29", amount: "300 ETB", status: "Pending" },
];

export default function AdminDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("loans");
  const [requests, setRequests] = useState(loanRequests);
  const adminName = "Admin";
  const navigate = useNavigate();

  const handleAccept = (id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "Accepted" } : req
      )
    );
    alert("✅ Loan request has been accepted successfully!");
  };

  const handleReject = (id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "Rejected" } : req
      )
    );
    alert("❌ Loan request has been rejected.");
  };

  const handlePayment = (borrower, amount) => {
    alert(`Redirecting to ArifPay for disbursing ${amount} to ${borrower}`);
  };

  const handleLogout = () => {
    navigate("/"); // redirect to landing page
  };

  const menuItems = [
    { id: "loans", label: "Loans" },
    { id: "transactions", label: "Transactions" },
    { id: "reports", label: "Reports" },
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
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-green-700">Admin Panel</h2>
            <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(false)}>
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
            <li>
              <button
                className="w-full text-left px-3 py-2 rounded-lg font-medium text-red-600 hover:bg-red-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 transition-all duration-300">
          <button className="md:hidden mb-6 text-gray-700" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>

          <TopBar userName={adminName} notifications={5} />

          {/* Conditional Back Button */}
          {selectedSection !== "loans" && (
            <div className="mb-6">
              <Button onClick={() => setSelectedSection("loans")}>
                Back to Dashboard
              </Button>
            </div>
          )}

          {/* Loans Page */}
          {selectedSection === "loans" && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold text-green-700 mb-6">Loan Requests</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Pie chart */}
                <div className="bg-white rounded-2xl shadow p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Loan Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={loanStats}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {loanStats.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Loan Requests */}
                <div className="bg-white rounded-2xl shadow p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Pending Loan Requests</h3>
                  <div className="space-y-4">
                    {requests.map((req) => (
                      <Card key={req.id}>
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-bold text-lg">{req.borrower}</h3>
                            <p className="text-gray-600">{req.type}</p>
                            <p className="text-gray-600">{req.amount}</p>
                            <p
                              className={`text-sm font-medium mt-1 ${
                                req.status === "Accepted"
                                  ? "text-green-700"
                                  : req.status === "Rejected"
                                  ? "text-red-600"
                                  : "text-yellow-700"
                              }`}
                            >
                              Status: {req.status}
                            </p>
                          </div>
                          {req.status === "Pending" && (
                            <div className="space-x-2">
                              <Button
                                className="bg-green-600 hover:bg-green-700"
                                onClick={() => handleAccept(req.id)}
                              >
                                Accept
                              </Button>
                              <Button
                                className="bg-red-600 hover:bg-red-700"
                                onClick={() => handleReject(req.id)}
                              >
                                Reject
                              </Button>
                            </div>
                          )}
                          {req.status === "Accepted" && (
                            <Button
                              className="bg-blue-600 hover:bg-blue-700"
                              onClick={() => handlePayment(req.borrower, req.amount)}
                            >
                              Disburse via ArifPay
                            </Button>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Transactions Page */}
          {selectedSection === "transactions" && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-6 text-green-700">Recent Transactions</h2>
              <div className="bg-white rounded-2xl shadow p-6">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-green-50 text-green-700">
                      <th className="p-3">Type</th>
                      <th className="p-3">Date</th>
                      <th className="p-3">Amount</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((t) => (
                      <tr key={t.id} className="border-b hover:bg-green-50 transition">
                        <td className="p-3">{t.type}</td>
                        <td className="p-3">{t.date}</td>
                        <td className="p-3">{t.amount}</td>
                        <td className="p-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              t.status === "Completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {t.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Reports Page */}
          {selectedSection === "reports" && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-6 text-green-700">Financial Reports</h2>

              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-700">Revenue vs Expenses</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={reportData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#16a34a" />
                    <Bar dataKey="expenses" fill="#86efac" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
