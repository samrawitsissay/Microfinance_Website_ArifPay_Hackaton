import React, { useState } from "react";
import Navbar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

const loans = [
  { id: 1, name: "Small Business Loan", amount: 10000, status: "Pending" },
  { id: 2, name: "Education Loan", amount: 5000, status: "Approved" },
];

export default function UserLoans() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // In a real system, you’d get this from the logged-in user session
  const user = {
    email: "user@example.com",
    phone: "0912345678",
  };

  const handleRepay = async (loan) => {
    try {
      setErr("");
      setLoading(true);

      const items = [
        {
          name: loan.name,
          quantity: 1,
          price: loan.amount,
          description: `Repayment for ${loan.name}`,
        },
      ];

      const body = {
        phone: user.phone,
        email: user.email,
        nonce: crypto.randomUUID(),
        items,
        lang: "en",
      };

      const res = await fetch("http://localhost:3000/api/payments/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || `Checkout failed (${res.status})`);
      }

      const data = await res.json();
      const paymentUrl = data?.checkoutUrl;
      const sessionId = data?.sessionId;

      if (!paymentUrl) {
        console.error("Unexpected backend response:", data);
        throw new Error("Missing paymentUrl from backend.");
      }

      console.log("ArifPay session:", sessionId || "(unknown)");
      window.location.href = paymentUrl; // Redirect to ArifPay
    } catch (e) {
      setErr(e.message || "Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar userType="user" />
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Loans</h1>

        {err && (
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded mb-4">
            {err}
          </div>
        )}
        {loading && (
          <div className="text-center text-gray-600 mb-4">
            Processing payment...
          </div>
        )}

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
