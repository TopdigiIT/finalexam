import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyerDashboard = () => {
  const [user, setUser] = useState({ name: "John Doe", email: "buyer@example.com" });
  const [cart, setCart] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("buyerInfo")) || user;
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [
      { id: 1, name: "Laptop", price: 1000, quantity: 1 },
      { id: 2, name: "Smartphone", price: 500, quantity: 2 },
    ];
    const storedPurchases = JSON.parse(localStorage.getItem("purchaseHistory")) || [
      { id: 1, item: "Smartwatch", price: 200, date: "2025-02-01" },
      { id: 2, item: "Headphones", price: 150, date: "2025-01-20" },
    ];

    setUser(storedUser);
    setCart(storedCart);
    setPurchaseHistory(storedPurchases);
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Buyer Dashboard</h1>
      
      {/* User Info */}
      <div className="bg-white text-gray-800 shadow-md p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3 text-blue-600">User Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Login Status:</strong> ✅ Logged In</p>
      </div>

      {/* Cart Information */}
      <div className="bg-white text-gray-800 shadow-md p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3 text-green-600">Cart Items</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-2 border-b pb-2">
                <span className="text-red-500">{item.name}</span> - 
                <span className="text-blue-500"> ${item.price} </span> x {item.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No items in cart.</p>
        )}
      </div>

      {/* Purchase History */}
      <div className="bg-white text-gray-800 shadow-md p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3 text-yellow-600">Purchase History</h2>
        {purchaseHistory.length > 0 ? (
          <ul>
            {purchaseHistory.map((purchase) => (
              <li key={purchase.id} className="mb-2 border-b pb-2">
                <span className="text-purple-600">{purchase.item}</span> - 
                <span className="text-green-500"> ${purchase.price} </span> 
                (Purchased on {purchase.date})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No past purchases.</p>
        )}
      </div>

      {/* Book Now Button */}
      <div className="text-center mt-6">
        <button 
          onClick={() => navigate("/store")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all">
          📅 Book Now
        </button>
      </div>
    </div>
  );
};

export default BuyerDashboard;
