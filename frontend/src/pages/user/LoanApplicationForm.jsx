import React from "react";
import Button from "../../components/common/Button";



export default function LoanApplicationForm() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-[#1b1b3a] mb-8">
        Loan Application Form ( ብድር መጠየቂያ ቅፅ )
      </h1>

      {/* Personal Information */}
      <section className="max-w-5xl mx-auto border rounded-2xl p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Personal Information
        </h2>

        {/* Title & Names */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            >
              <option>Mr (አቶ)</option>
              <option>Mrs (ወ/ሮ)</option>
              <option>Ms (ወ/ሪት)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name (ስም) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Father Name (አባት ስም) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Father Name"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Grandfather Name (የአያት ስም)
            </label>
            <input
              type="text"
              placeholder="Grandfather Name"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth (የትውልድ ቀን)
          </label>
          <input
            type="date"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Gender */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender (ፆታ) <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" defaultChecked />
              <span>Male (ወንድ)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" />
              <span>Female (ሴት)</span>
            </label>
          </div>
        </div>

        {/* Marital Status */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Marital Status (የጋብቻ ሁኔታ) <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="maritalStatus" defaultChecked />
              <span>Single (ነጠላ)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="maritalStatus" />
              <span>Married (ያገባ)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="maritalStatus" />
              <span>Divorced (ፍቺ)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="maritalStatus" />
              <span>Widowed (መበለት)</span>
            </label>
          </div>
        </div>

        {/* Mobile Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile 1 (ስልክ ቁጥር 1) <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="09..."
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile 2 (አማራጭ ስልክ ቁጥር)
            </label>
            <input
              type="tel"
              placeholder="09..."
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Kebele ID */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Kebele ID (የቀበሌ መታወቂያ ቁጥር) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Kebele ID"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Email Address */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address (ኢሜል አድራሻ)
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Next Button */}
        <div className="text-right">
          <Button className="bg-[#1b1b3a] hover:bg-[#2a2a4f] text-white px-6 py-2 rounded-md">
            Next
          </Button>
        </div>
      </section>
    </div>
  );
}
