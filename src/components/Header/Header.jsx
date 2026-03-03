import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Sync user from localStorage on mount
  useEffect(() => {
    const updateUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    };

    updateUser(); // initial load

    window.addEventListener("authChange", updateUser);

    return () => {
      window.removeEventListener("authChange", updateUser);
    };
  }, []);

  const isLoggedIn = !!user;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.dispatchEvent(new Event("authChange"));

    navigate("/login", { replace: true });
  };

  const navLinkClass = ({ isActive }) =>
    `block py-2 px-3 transition duration-200 ${
      isActive
        ? "text-orange-700 underline font-semibold"
        : "text-gray-700 hover:text-orange-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-screen-xl px-4 py-3 mx-auto lg:px-6">
        {/* TOP BAR */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" className="h-10" alt="Logo" />
          </Link>

          {/* Hi User */}
            {isLoggedIn && (
              <span className="text-sm font-semibold text-gray-800">
                Hi,&nbsp;
                <span className="font-bold text-orange-600">{user?.name}</span>
              </span>
            )}

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-8 lg:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            {isLoggedIn && (
              <>
                <NavLink to="/interview-prep" className={navLinkClass}>
                  Subjects
                </NavLink>
                <NavLink to="/practice" className={navLinkClass}>
                  Practice (DSA)
                </NavLink>
              </>
            )}

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/contactUs" className={navLinkClass}>
              Contact
            </NavLink>

            

            {/* Login / Logout */}
            {!isLoggedIn ? (
              <NavLink to="/login" className={navLinkClass}>
                Login
              </NavLink>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 font-semibold text-red-600 transition duration-200 rounded-md hover:bg-red-50"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="font-semibold text-gray-700 lg:hidden"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="p-6 mt-4 space-y-4 bg-white border shadow-lg lg:hidden rounded-xl">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>

            {isLoggedIn && (
              <>
                <NavLink
                  to="/interview-prep"
                  className={navLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Subjects
                </NavLink>
                <NavLink
                  to="/practice"
                  className={navLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Practice (DSA)
                </NavLink>
              </>
            )}

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contactUs"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>

            {!isLoggedIn ? (
              <NavLink
                to="/login"
                className={navLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="px-4 py-2 font-semibold text-red-600 transition duration-200 rounded-md hover:bg-red-50"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
