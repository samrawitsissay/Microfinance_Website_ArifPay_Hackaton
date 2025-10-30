import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Menu, X, LogOut } from "lucide-react";
import api from "../api/api";
import Footer from "../components/common/Footer";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import TopBar from "../components/common/TopBar";
import MyLoans from "../components/MyLoans";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const navigate = useNavigate();

  // ---------------------- FETCH USER ----------------------
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/users/me/");
        setUser(res.data);
      } catch (err) {
        console.error("❌ Fetch error:", err.response || err);
        setError("Failed to load data. Please login.");
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  if (error) return <p className="text-red-500 p-6">{error}</p>;
  if (!user) return <p className="p-6">Loading user data...</p>;

  // ---------------------- DUMMY DATA ----------------------
  const savingsGroups = [
    { id: 1, name: "Community Group A", contribution: 5000, nextPayout: "2025-10-10" },
  ];

  const cashflowData = [
    { month: "Jan", disbursed: 5000, repaid: 2000 },
    { month: "Feb", disbursed: 7000, repaid: 3500 },
    { month: "Mar", disbursed: 6000, repaid: 4500 },
  ];

  const transactions = [
    { name: "Loan Repayment - Business", date: "2025-10-10", amount: "1,000 ETB", status: "Completed" },
    { name: "Savings Contribution - Group A", date: "2025-10-12", amount: "500 ETB", status: "Pending" },
  ];

  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "loans", label: "My Loans" },
    { id: "apply", label: "Apply for Loan" },
    { id: "savings", label: "Savings" },
    { id: "faqs", label: "FAQs" },
  ];

  // ---------------------- UI START ----------------------
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside
          className={`fixed md:static z-50 bg-white shadow-md w-64 p-6 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-green-700">Welcome, {user.username}</h2>
            <button className="text-gray-700 md:hidden" onClick={() => setMenuOpen(false)}>
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

          <button
            onClick={handleLogout}
            className="mt-8 flex items-center gap-2 text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg w-full"
          >
            <LogOut size={18} /> Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 transition-all duration-300">
          <button className="md:hidden mb-6 text-gray-700" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>

          <TopBar userName={user.username} notifications={2} />

          {/* Dashboard Section */}
          {selectedSection === "dashboard" && (
            <section className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <h3 className="text-lg font-semibold">User Info</h3>
                  <p className="text-gray-600 mt-2">{user.email}</p>
                </Card>
                <Card>
                  <h3 className="text-lg font-semibold">Active Loans</h3>
                  <p className="text-2xl font-bold mt-2">
                    {/* You can replace with API fetched count */}
                    2
                  </p>
                </Card>
                <Card>
                  <h3 className="text-lg font-semibold">Savings Groups</h3>
                  <p className="text-2xl font-bold mt-2">{savingsGroups.length}</p>
                </Card>
              </div>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">
                    Cashflow Overview
                  </h3>
                  <div style={{ width: "100%", height: 300 }}>
                    {/* Fixed height for Recharts */}
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
                  <h3 className="text-xl font-semibold mb-4 text-green-700">
                    Recent Transactions
                  </h3>
                  <div className="space-y-3">
                    {transactions.map((t, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b pb-3">
                        <div>
                          <p className="font-semibold">{t.name}</p>
                          <p className="text-sm text-gray-500">
                            {t.date} · {t.amount}
                          </p>
                        </div>
                        <div>
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              t.status === "Completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
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
          {selectedSection === "loans" && <MyLoans />}

          {/* Apply Section */}
          {selectedSection === "apply" && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                Apply for a New Loan
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Age 18–60</li>
                <li>No outstanding loan obligations</li>
                <li>Good credit history</li>
              </ul>
              <Button onClick={() => navigate("/loan-application")}>Apply Now</Button>
            </section>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
