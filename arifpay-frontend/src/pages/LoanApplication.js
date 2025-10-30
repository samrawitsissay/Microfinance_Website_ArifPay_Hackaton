import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "../styles/loan.css";

const initialForm = {
  title: "",
  first_name: "",
  father_name: "",
  grandfather_name: "",
  dob: "",
  gender: "",
  marital_status: "",
  mobile1: "",
  mobile2: "",
  kebele_id: "",
  email: "",
  region: "",
  sub_city: "",
  woreda: "",
  zone: "",
  specific_location: "",
  nisir_branch: "",
  purpose_of_loan: "",
  legal_status: "",
  business_sector: "",
  business_detail: "",
  business_license_date: "",
  loan_type: "",
  loan_amount: "",
  id_proof: null,
  salary_slip: null,
  bank_statement: null,
  collateral_doc: null,
  consent: false,
};

export default function LoanApplication() {
  const [form, setForm] = useState(initialForm);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === "file") setForm({ ...form, [name]: files[0] });
    else if (type === "checkbox") setForm({ ...form, [name]: checked });
    else setForm({ ...form, [name]: value });
  };

  // Submit loan application
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      if (v !== null && v !== "") data.append(k, v);
    });

    try {
      const res = await api.post("loans/apply/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMsg("✅ Application submitted successfully!");
      setForm(initialForm);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      console.error("❌ Loan Application Error:", err.response || err);
      setMsg("❌ Failed: " + JSON.stringify(err.response?.data || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loan-page">
      <div className="loan-card">
        <h2>🏦 Loan Application Form</h2>
        {msg && <div className="message">{msg}</div>}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* --- Personal Info --- */}
          <h3>👤 Personal Information</h3>
          <div className="form-grid">
            <input name="title" placeholder="Title" onChange={handleChange} required />
            <input name="first_name" placeholder="First Name" onChange={handleChange} required />
            <input name="father_name" placeholder="Father's Name" onChange={handleChange} required />
            <input name="grandfather_name" placeholder="Grandfather's Name" onChange={handleChange} />
            <input name="dob" type="date" onChange={handleChange} required />
            <input name="gender" placeholder="Gender" onChange={handleChange} />
            <input name="marital_status" placeholder="Marital Status" onChange={handleChange} />
          </div>

          {/* --- Contact Info --- */}
          <h3>📞 Contact Details</h3>
          <div className="form-grid">
            <input name="mobile1" placeholder="Mobile 1" onChange={handleChange} required />
            <input name="mobile2" placeholder="Mobile 2" onChange={handleChange} />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
            <input name="kebele_id" placeholder="Kebele ID" onChange={handleChange} required />
          </div>

          {/* --- Address --- */}
          <h3>🏠 Address</h3>
          <div className="form-grid">
            <input name="region" placeholder="Region" onChange={handleChange} />
            <input name="sub_city" placeholder="Sub City" onChange={handleChange} />
            <input name="woreda" placeholder="Woreda" onChange={handleChange} />
            <input name="zone" placeholder="Zone" onChange={handleChange} />
            <input name="specific_location" placeholder="Specific Location" onChange={handleChange} required />
            <input name="nisir_branch" placeholder="Nisir Branch" onChange={handleChange} />
          </div>

          {/* --- Business Info --- */}
          <h3>💼 Business Information</h3>
          <div className="form-grid">
            <input name="purpose_of_loan" placeholder="Purpose of Loan" onChange={handleChange} required />
            <input name="legal_status" placeholder="Legal Status" onChange={handleChange} />
            <input name="business_sector" placeholder="Business Sector" onChange={handleChange} required />
            <input name="business_detail" placeholder="Business Detail" onChange={handleChange} />
            <input name="business_license_date" type="date" onChange={handleChange} />
          </div>

          {/* --- Loan Details --- */}
          <h3>💰 Loan Details</h3>
          <div className="form-grid">
            <input name="loan_type" placeholder="Loan Type" onChange={handleChange} />
            <input name="loan_amount" type="number" placeholder="Loan Amount" onChange={handleChange} required />
          </div>

          {/* --- File Uploads --- */}
          <h3>📎 Required Documents</h3>
          <div className="upload-section">
            <label>ID Proof <input type="file" name="id_proof" onChange={handleChange} required /></label>
            <label>Salary Slip <input type="file" name="salary_slip" onChange={handleChange} required /></label>
            <label>Bank Statement <input type="file" name="bank_statement" onChange={handleChange} required /></label>
            <label>Collateral Doc <input type="file" name="collateral_doc" onChange={handleChange} /></label>
          </div>

          {/* --- Consent --- */}
          <label className="consent">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              required
            /> I certify that all information is correct and I consent to the loan application terms.
          </label>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
