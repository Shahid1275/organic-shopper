import React, { useState } from 'react';

const NewsLetterBox = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      setError('Please fill out this field');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }
    setError('');
    console.log('Subscribing with email:', email);
    setEmail(''); // Clear input on successful validation
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
            onChange={(e) => {
              setEmail(e.target.value);
              setError(''); // Clear error on input change
            }}
            className={`w-full sm:w-80 px-4 py-3 rounded-lg border ${
              error ? 'border-red-500' : 'border-gray-300'
            }  placeholder-gray-400 transition-all duration-300`}
            required
            aria-invalid={error ? 'true' : 'false'}
          />
          <button
            onClick={handleSubscribe}
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 cursor-pointer"
          >
            Subscribe Now
          </button>
        </div>
        {error && (
          <p
            className="mt-3 text-sm text-red-500"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsLetterBox;