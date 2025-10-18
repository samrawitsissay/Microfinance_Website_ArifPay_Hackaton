import React from "react";
import Footer from "../../components/common/Footer";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

export default function Notifications() {
  const navigate = useNavigate();

  const notifications = [
    { id: 1, message: "Your loan repayment of 1,000 ETB is due tomorrow", type: "loan", date: "2025-10-18", actions: ["Pay Now"] },
    { id: 2, message: "You joined Community Savings Group A", type: "savings", date: "2025-10-15", actions: [] },
    { id: 3, message: "Your new loan application has been approved", type: "loan", date: "2025-10-12", actions: ["View Details"] },
    { id: 4, message: "Your savings contribution of 500 ETB has been received", type: "savings", date: "2025-10-10", actions: [] },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">All Notifications</h1>
          <Button onClick={() => navigate("/user")}>Back to Dashboard</Button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          {notifications.map((n) => (
            <div key={n.id} className="flex justify-between items-center border-b last:border-none py-3">
              <div className="flex items-start space-x-4">
                {/* Icon based on type */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  n.type === "loan" ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-600"
                } font-bold`}>
                  {n.type === "loan" ? "L" : "S"}
                </div>

                <div>
                  <p className="text-gray-700">{n.message}</p>
                  <p className="text-gray-400 text-sm">{n.date}</p>
                </div>
              </div>

              {/* Actions */}
              {n.actions.length > 0 && (
                <div className="flex space-x-2">
                  {n.actions.map((action, idx) => (
                    <Button
                      key={idx}
                      className="bg-green-600 text-white px-3 py-1 text-sm rounded hover:bg-green-700"
                      onClick={() => alert(`${action} clicked for notification ${n.id}`)}
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Load more button */}
          <div className="text-center mt-4">
            <Button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
              onClick={() => alert("Load more notifications")}
            >
              Load more
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
