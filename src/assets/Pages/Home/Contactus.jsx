import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-us-container border-b-1 py-12 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Contact Us</h2>
        <p className="text-lg text-gray-200 mt-4">
          We would love to hear from you. Whether you have a question or feedback, we're here to help!
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <div className="info-card bg-white p-6 rounded-xl shadow-xl text-center transform hover:scale-105 transition duration-300">
          <FaPhone className="text-4xl text-indigo-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Phone</h3>
          <p className="text-gray-600 mt-2">+8801 713 713 620</p>
        </div>
        <div className="info-card bg-white p-6 rounded-xl shadow-xl text-center transform hover:scale-105 transition duration-300">
          <FaEnvelope className="text-4xl text-purple-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Email</h3>
          <p className="text-gray-600 mt-2">miltonmind1@gmail.com</p>
        </div>
        <div className="info-card bg-white p-6 rounded-xl shadow-xl text-center transform hover:scale-105 transition duration-300">
          <FaMapMarkerAlt className="text-4xl text-pink-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Location</h3>
          <p className="text-gray-600 mt-2">Dhaka-1349, Bangladesh</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="form-container bg-white p-10 rounded-xl shadow-xl w-full max-w-2xl">
        {isSubmitted ? (
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-green-600">
              Thank you for reaching out!
            </h3>
            <p className="mt-4 text-lg text-gray-600">We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="name" className="block text-gray-800 font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block text-gray-800 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
            <div className="form-group mt-6">
              <label htmlFor="message" className="block text-gray-800 font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                rows="5"
                required
              />
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;