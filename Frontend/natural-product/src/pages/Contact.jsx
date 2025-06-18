import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      <div className="text-center mb-16">
        <Title text1={'CONTACT'} text2={'US'} />
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-light">
          We're here to assist you. Reach out with any questions or feedback.
        </p>
      </div>

      {isSubmitted && (
        <div className="mb-8 p-4 bg-emerald-100 text-emerald-800 rounded-lg text-center max-w-3xl mx-auto">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        <div className="lg:w-1/2">
          <img
            className="w-full rounded-xl shadow-lg object-cover h-[450px] transform hover:scale-[1.02] transition-transform duration-300"
            src={assets.contact_img}
            alt="Customer support"
          />
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Get in Touch</h2>
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white shadow-sm`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white shadow-sm`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white shadow-sm`}
                placeholder="How can we assist you?"
              />
              {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white shadow-sm resize-none`}
                placeholder="Your message..."
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
          <div className="flex justify-center text-emerald-600 text-3xl mb-4">
            <FaMapMarkerAlt className="w-12 h-12 p-2 bg-emerald-50 rounded-full" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Location</h3>
          <address className="text-gray-600 not-italic text-sm">
            123 Organic Way<br />
            Green Valley, CA 90210<br />
            United States
          </address>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
          <div className="flex justify-center text-emerald-600 text-3xl mb-4">
            <FaPhone className="w-12 h-12 p-2 bg-emerald-50 rounded-full" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
          <p className="text-gray-600 text-sm">
            +1 (800) 123-4567<br />
            Mon-Fri: 9am-5pm PST
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
          <div className="flex justify-center text-emerald-600 text-3xl mb-4">
            <FaEnvelope className="w-12 h-12 p-2 bg-emerald-50 rounded-full" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
          <p className="text-gray-600 text-sm">
            <a href="mailto:hello@organicshopper.com" className="hover:text-emerald-600 transition-colors">
              hello@organicshopper.com
            </a><br />
            <a href="mailto:support@organicshopper.com" className="hover:text-emerald-600 transition-colors">
              support@organicshopper.com
            </a>
          </p>
        </div>
      </div>

      <div className="bg-emerald-50 rounded-xl p-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Stay Connected</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-sm">
          Follow us for updates, tips, and exclusive offers.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-gray-100 hover:bg-emerald-600 hover:text-white p-3 rounded-full transition-colors duration-300 shadow-sm"
          >
            <FaFacebookF className="w-5 h-5" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="#"
            className="bg-gray-100 hover:bg-emerald-600 hover:text-white p-3 rounded-full transition-colors duration-300 shadow-sm"
          >
            <FaInstagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="#"
            className="bg-gray-100 hover:bg-emerald-600 hover:text-white p-3 rounded-full transition-colors duration-300 shadow-sm"
          >
            <FaTwitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;