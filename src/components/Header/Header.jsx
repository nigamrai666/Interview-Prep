import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 shadow">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                    <Link to="/" className="flex items-center">
                        <img
                           src="/logo.png"
                            className="h-12 mr-3"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex lg:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>
                    <div 
                        className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`} 
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to={'/'}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b hover:underline
                                        ${isActive ? "text-orange-700 underline" : "text-gray-700"}                                       
                                        border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/interview-prep'}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b hover:underline
                                        ${isActive ? "text-orange-700 underline" : "text-gray-700"}                                       
                                        border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Prep
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/about'}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b hover:underline
                                        ${isActive ? "text-orange-700 underline" : "text-gray-700"}                                       
                                        border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/contactUs'}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b hover:underline
                                        ${isActive ? "text-orange-700 underline" : "text-gray-700"}                                       
                                        border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
