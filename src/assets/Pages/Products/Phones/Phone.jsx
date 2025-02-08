import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sample product data
const products = [
  {
    id: 1,
    name: 'iPhone15',
    image: "phone15.jpg",
    location: 'New York, NY',
    resalePrice: 600,
    originalPrice: 999,
    yearsOfUse: 1,
    timePosted: '2 hours ago',
    sellerName: 'John Doe',
    isVerified: true,
  },
  {
    id: 2,
    name: 'iPhone14',
    image: "phone14.jpg",
    location: 'Los Angeles, CA',
    resalePrice: 500,
    originalPrice: 799,
    yearsOfUse: 1,
    timePosted: '1 day ago',
    sellerName: 'Jane Smith',
    isVerified: false,
  },
  {
    id: 3,
    name: 'iPhone13',
    image: "phone13.webp",
    location: 'Chicago, IL',
    resalePrice: 900,
    originalPrice: 1499,
    yearsOfUse: 2,
    timePosted: '3 days ago',
    sellerName: 'Mike Johnson',
    isVerified: true,
  },
];

export default function Phone() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-gray-100 py-8">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Available Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            {/* Product Image with Fallback */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg mb-4"
              onError={(e) => (e.target.src = "/images/default.jpg")}
            />

            {/* Product Info */}
            <h3 className="text-xl font-semibold text-black">{product.name}</h3>
            <p className="text-gray-700">📍 {product.location}</p>

            {/* Pricing Info */}
            <div className="mt-2 text-gray-900">
              <p className="text-lg font-bold">💰 Resale Price: ${product.resalePrice}</p>
              <p className="text-sm text-gray-500 line-through">Original Price: ${product.originalPrice}</p>
              <p className="text-sm text-gray-700">⌛ Years of Use: {product.yearsOfUse} year(s)</p>
              <p className="text-sm text-gray-700">📅 Posted: {product.timePosted}</p>
            </div>

            {/* Seller Info */}
            <div className="flex items-center mt-4">
              <span className="text-sm font-semibold text-gray-900">👤 {product.sellerName}</span>
              {product.isVerified && <span className="ml-2 text-blue-500">✅ Verified</span>}
            </div>

            {/* Book Now Button */}
            <div className="mt-4">
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                onClick={() => navigate('/login')}
              >
                📞 Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
