import React from "react";
import { Link } from "react-router-dom";
import { FaBox, FaShoppingCart, FaClipboardList, FaUser, FaPlus } from "react-icons/fa";

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Seller Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/seller/products" className="bg-blue-500 text-white p-6 rounded-lg flex flex-col items-center hover:bg-blue-600 transition">
            <FaBox className="text-4xl mb-2" />
            <span className="text-lg font-semibold">Uploaded Products</span>
          </Link>

          <Link to="/seller/orders" className="bg-green-500 text-white p-6 rounded-lg flex flex-col items-center hover:bg-green-600 transition">
            <FaShoppingCart className="text-4xl mb-2" />
            <span className="text-lg font-semibold">Orders</span>
          </Link>

          <Link to="/seller/sold-items" className="bg-orange-500 text-white p-6 rounded-lg flex flex-col items-center hover:bg-orange-600 transition">
            <FaClipboardList className="text-4xl mb-2" />
            <span className="text-lg font-semibold">Sold Items</span>
          </Link>

          <Link to="/seller/account" className="bg-purple-500 text-white p-6 rounded-lg flex flex-col items-center hover:bg-purple-600 transition">
            <FaUser className="text-4xl mb-2" />
            <span className="text-lg font-semibold">Account</span>
          </Link>
        </div>

        <div className="mt-6 flex justify-center">
          <Link to="/seller/product-upload" className="bg-red-500 text-white px-6 py-3 rounded-lg flex items-center hover:bg-red-600 transition">
            <FaPlus className="text-2xl mr-2" />
            <span className="text-lg font-semibold">Add New Product</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
