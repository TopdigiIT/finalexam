import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Phone', image: "./phone.jpg", link: '/store:phone' },
  { name: 'Watch', image: "./watch.jpg", link: '/store:watch' },
  { name: 'Laptop', image: "./laptop.webp", link: '/store:laptop' },
];

export default function CategoryPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.name} className="category-card border rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105">
            <div className="flex justify-center items-center p-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-4/5 h-64 object-cover border border-gray-300 rounded-lg"
                onError={(e) => (e.target.src = '/images/default.jpg')} // Fallback image if image is not found
              />
            </div>
            <div className="text-center font-semibold text-lg text-gray-700 py-4">
              {category.name}
            </div>
            <div className="flex justify-center pb-4">
              <button
                className="bg-orange-600 text-white px-5 py-2 rounded-lg text-lg font-medium transition hover:bg-orange-700 transform hover:scale-110"
                onClick={() => navigate(category.link, { replace: true })}
              >
                Go to {category.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
