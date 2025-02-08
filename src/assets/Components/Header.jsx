import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleRedirect = () => {
    if (userRole === "buyer") {
      navigate("/buyer-dashboard");
    } else if (userRole === "seller") {
      navigate("/seller-dashboard");
    }
  };

  const handleLogout = () => {
    // Remove userRole from localStorage and update the state
    localStorage.removeItem("userRole");
    setUserRole(null);
    // Optionally, redirect to home or login page after logout
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md w-full sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-2">
        <div className="flex items-center space-x-2">
          <img
            src="../../../public/original-logo.png"
            alt="Logo"
            className="w-40 h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
          
        </div>
        <nav
          className={`w-full md:w-auto flex flex-wrap justify-center md:justify-center space-x-6 mt-4 md:mt-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <a href=".#home" className="hover:text-gray-300 transition font-bold">
            Home
          </a>
          <a href="store" className="hover:text-gray-300 transition font-bold">
            Store
          </a>
          <a href="aboutus" className="hover:text-gray-300 transition font-bold">
            About Us
          </a>
          <a href="contactus" className="hover:text-gray-300 transition font-bold">
            Contact Us
          </a>
          <a href="blogs" className="hover:text-gray-300 transition font-bold">
            Blogs
          </a>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <div className="w-full md:w-auto flex flex-wrap justify-end md:justify-end space-x-6 mt-4 md:mt-0">
          <button
            onClick={() => navigate("/cart")}
            className="hover:text-gray-300 transition flex items-center"
          >
            <ShoppingCart className="w-8 h-8" />
          </button>

          {userRole ? (
            <>
              <button
                onClick={handleRedirect}
                className="hover:text-gray-300 transition font-bold"
              >
                {userRole === "buyer" ? "Buyer Dashboard" : "Seller Dashboard"}
              </button>
              <button
                onClick={handleLogout}
                className="hover:text-gray-300 transition font-bold"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hover:text-gray-300 transition font-bold"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
