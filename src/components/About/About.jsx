import React from "react";

export default function About() {
  return (
    <div className="flex items-center min-h-screen px-6 py-20 bg-gradient-to-br from-orange-50 to-white">
      
      <div className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2">
        
        {/* Image Section */}
        <div className="relative group">
          <img
            src="/aboutImage.png"
            alt="About Us"
            className="w-full transition duration-500 shadow-2xl rounded-3xl group-hover:scale-105"
          />
          <div className="absolute w-32 h-32 bg-orange-200 rounded-full opacity-50 -bottom-6 -right-6 blur-3xl"></div>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-4xl font-extrabold leading-tight text-gray-900">
            Be a Champion of <span className="text-orange-600">Yourself</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Interview Prep is your ultimate platform to prepare for technical,
            behavioral, and managerial interviews across various industries.
            Our mission is to help job seekers and professionals enhance their
            interview skills and land their dream jobs.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            We provide an extensive collection of interview questions across
            multiple domains, including software engineering, data science,
            web development, and system design. Each question includes expert
            explanations to help you truly understand the concepts.
          </p>

          {/* Highlight Points */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xl text-orange-500">✔</span>
              <p className="font-medium text-gray-700">
                Curated Interview Questions
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl text-orange-500">✔</span>
              <p className="font-medium text-gray-700">
                Expert Explanations & Solutions
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl text-orange-500">✔</span>
              <p className="font-medium text-gray-700">
                Multiple Domains Covered
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}