import React from 'react';

export default function AboutUs() {
  return (
    <section className="about-us-section py-20 bg-gradient-to-b from-purple-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-6 drop-shadow-lg">
            About Us
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are passionate about offering high-quality, pre-loved products for the modern shopper.
            Our platform allows you to shop sustainably while finding top-tier items at unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="about-card bg-white shadow-2xl rounded-2xl p-10 border-l-4 border-purple-500 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">
              Our mission is simple: to create a sustainable shopping experience where pre-loved items find a new life.
              We believe in reducing waste while offering quality products that make a difference.
            </p>
          </div>

          <div className="about-card bg-white shadow-2xl rounded-2xl p-10 border-l-4 border-blue-500 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600">
              We aim to be the go-to marketplace for affordable and sustainable shopping.
              Our vision is to make the world a better place by promoting a circular economy with each purchase.
            </p>
          </div>

          <div className="about-card bg-white shadow-2xl rounded-2xl p-10 border-l-4 border-green-500 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Why Choose Us?</h3>
            <p className="text-lg text-gray-600">
              We handpick each product with care, ensuring the best quality and value.
              Our user-friendly platform and customer-first approach make shopping seamless and enjoyable.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contactus"
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 text-white text-lg py-4 px-8 rounded-full shadow-lg hover:opacity-90 transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
