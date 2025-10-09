import React from "react";

const Contact = () => {
  return (
    <div className=" bg-gray-50 flex flex-col items-center py-12 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-gray-600 max-w-lg text-center mb-10">
        Have a question or feedback
      </p>

      {/* Contact Form */}
      <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">
            Message
          </label>
          <textarea
            placeholder="Type your message here..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-12 text-center text-gray-700">
        <p>📍 New Delhi, India</p>
        <p>📞 +91 97180 86186</p>
        <p>📧 support@chowmate.com</p>
      </div>
    </div>
  );
};

export default Contact;
