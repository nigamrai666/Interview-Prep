import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  // 🔹 Common NavLink style (ACTIVE PAGE CSS)
  const navLinkClass = ({ isActive }) =>
    `block py-2 px-3 transition duration-200
     ${
       isActive
         ? "text-orange-700 underline font-semibold"
         : "text-gray-700 hover:text-orange-700"
     }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          {/* 🔹 LEFT: Logo + Hi User */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" className="h-12 mr-2" alt="Logo" />
            </Link>

            {/* ✅ Hi User AFTER LOGO */}
            {isLoggedIn && (
              <span className="block text-sm font-semibold text-gray-800 sm:text-base">
                Hi,&nbsp;
                <span className="block text-base font-bold text-gray-900 sm:inline sm:text-lg">
                  {user?.firstName}
                </span>
              </span>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          {/* 🔹 NAV LINKS */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
          >
            <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8">
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>

              {/* Protected links */}
              {isLoggedIn && (
                <>
                  <li>
                    <NavLink to="/interview-prep" className={navLinkClass}>
                      Subjects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/practice" className={navLinkClass}>
                      Practice (DSA)
                    </NavLink>
                  </li>
                </>
              )}

              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/contactUs" className={navLinkClass}>
                  Contact Us
                </NavLink>
              </li>

              {/* Login / Logout */}
              {!isLoggedIn ? (
                <li>
                  <NavLink to="/login" className={navLinkClass}>
                    Login
                  </NavLink>
                </li>
              ) : (
                <li>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 text-gray-700 hover:text-orange-700"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
