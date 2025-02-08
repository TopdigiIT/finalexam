import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-1.5 dark:border-neutral-500 lg:justify-between text-amber-300">
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex justify-center space-x-4">
            {/* Facebook Icon */}
            <a href="https://www.facebook.com" target="_blank" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-600 transition duration-300">
              <img src="facebook.png" alt="Facebook" className="h-6 w-6" />
            </a>
            {/* Twitter Icon */}
            <a href="https://www.twitter.com" target="_blank" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-400 transition duration-300">
              <img src="twitter.png" alt="Twitter" className="h-6 w-6" />
            </a>
            {/* Instagram Icon */}
            <a href="https://www.instagram.com" target="_blank" className="text-neutral-600 dark:text-neutral-200 hover:text-pink-500 transition duration-300">
              <img src="instagram.png" alt="Instagram" className="h-6 w-6" />
            </a>
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com" target="_blank" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-700 transition duration-300">
              <img src="linkedin.png" alt="LinkedIn" className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2">
                <img src="../../../public/original-logo.png" alt="Logo" className="w-60 h-14"/>
              </div>
              <p>🔥 Resale and Earn what you want 🚀 </p>
            </div>
            <div className="hidden lg:block">
              <h6 className="mb-1 flex justify-center font-semibold uppercase md:justify-start">⤴ Products</h6>
              <p className="mb-1">
                <a href="#" className="text-neutral-0 dark:text-neutral-200">🔥 Best Offers</a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-neutral-0 dark:text-neutral-200">🔥 Trending Items</a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-neutral-0 dark:text-neutral-200">🔥 Free Shipping</a>
              </p>
              <p>
                <a href="#" className="text-neutral-0 dark:text-neutral-200">🔥 Buy One Get One</a>
              </p>
            </div>
            <div className="hidden lg:block">
              <h6 className="mb-1 flex justify-center font-semibold uppercase md:justify-start">Useful Links</h6>
              <p className="mb-1">
                <a href="#" className="text-neutral-0 dark:text-neutral-200">🚀 Home</a>
              </p>
              <p className="mb-1">
                <a href="/aboutus" className="text-neutral-0 dark:text-neutral-200">🚀 About Us</a>
              </p>
              <p className="mb-1">
                <a href="store" className="text-neutral-0 dark:text-neutral-200">🚀 Store</a>
              </p>
              <p>
                <a href="#" className="text-neutral-0 dark:text-neutral-200">🏥 Help</a>
              </p>
            </div>
            <div className="hidden lg:block">
              <h6 className="mb-1 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
              <p className="mb-1 flex items-center justify-center md:justify-start">
                🏠 Unique, Baipail, Ashulia, Savar, Dhaka-1349
              </p>
              <p className="mb-1 flex items-center justify-center md:justify-start">
                📧 miltonmind1@gmail.com
              </p>
              <p className="mb-1 flex items-center justify-center md:justify-start">
                📞 +880 1713 713 620
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-2 bg-neutral-500 dark:bg-neutral-500 text-white">
        © 2025 Resale online | salesinbd.com
      </div>
    </footer>
  );
}
