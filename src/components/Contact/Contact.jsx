import React from "react";

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 bg-gradient-to-br from-orange-50 to-orange-100">
      
      <div className="w-full max-w-xl p-12 bg-white shadow-2xl rounded-3xl">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Get in Touch
        </h1>

        <p className="mt-3 text-lg text-center text-gray-500">
          We'd love to hear from you. Reach us through the details below.
        </p>

        {/* Contact Details */}
        <div className="max-w-md mx-auto mt-12 space-y-8 text-left">

          {/* Address */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 text-xl bg-orange-100 rounded-full">
              📍
            </div>
            <p className="font-medium text-gray-700">
              Samneghat, Lanka, Uttar Pradesh, 221005
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 text-xl bg-orange-100 rounded-full">
              📞
            </div>
            <p className="font-medium text-gray-700">
              +91 9876543210
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 text-xl bg-orange-100 rounded-full">
              ✉️
            </div>
            <p className="font-medium text-gray-700">
              interview@prep.org
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}