import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Robotix", path: "/robotix" },
        { name: "Math & ELA", path: "/math-and-ela" },
    ];

    return (
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
            <div className="flex items-center justify-between">
                {/* Logo / Brand */}
                <h1 className="text-xl font-bold">Robotix Institute</h1>

                {/* Links */}
                <div className="flex space-x-6">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;

                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`transition duration-200 ${isActive
                                    ? "text-blue-400 font-semibold"
                                    : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;