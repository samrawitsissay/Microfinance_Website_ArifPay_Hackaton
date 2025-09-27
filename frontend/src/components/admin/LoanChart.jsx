import React from "react";

export default function LoanChart({ data }) {
  // data: [{ month: 'Jan', loans: 5 }, ...]
  const maxLoans = Math.max(...data.map((d) => d.loans));

  return (
    <div className="bg-white border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Monthly Loans</h2>
      <div className="flex items-end space-x-2 h-48">
        {data.map((d) => (
          <div key={d.month} className="flex flex-col items-center">
            <div
              className="bg-blue-600 w-6 rounded-t"
              style={{ height: `${(d.loans / maxLoans) * 100}%` }}
            ></div>
            <span className="text-sm mt-1">{d.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
