import React, { useState } from 'react';

const NewsLetterBox = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
    setEmail(''); // Clear input after submission
  };

  return (
    <div className="my-12 bg-gradient-to-r from-indigo-50 to-blue-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Subscribe Now & Get 20% Off
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Join our community and stay updated with the latest trends, exclusive offers, and more. Your first purchase comes with a 20% discount!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-80 px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400"
          />
          <button
            onClick={handleSubmit}
            className=" cursor-pointer w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterBox;