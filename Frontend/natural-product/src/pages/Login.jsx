import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

const Login = () => {
  const [state, setState] = useState('Login');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen items-center justify-center bg-gray-50"
    >
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg border border-gray-100"
      >
        <div className="mb-6 flex items-center justify-center gap-3">
          <h1 className="text-3xl font-serif text-gray-900">{state}</h1>
          <hr className="h-[2px] w-10 bg-gray-800" />
        </div>

        <AnimatePresence>
          {state === 'Sign Up' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all"
                placeholder="Enter your name"
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all"
            placeholder="Enter your email"
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all"
            placeholder="Enter your password"
            aria-invalid={errors.password ? 'true' : 'false'}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-6 flex justify-between text-sm text-gray-600">
          {state === 'Login' && (
            <a
              href="#"
              className="hover:text-gray-800 transition-colors"
              aria-label="Forgot your password"
            >
              Forgot your password?
            </a>
          )}
          <button
            type="button"
            onClick={() => setState(state === 'Login' ? 'Sign Up' : 'Login')}
            className="ml-auto hover:text-gray-800 transition-colors"
            aria-label={`Switch to ${state === 'Login' ? 'Sign Up' : 'Login'}`}
          >
            {state === 'Login' ? 'Create Account' : 'Login Here'}
          </button>
        </div>

        <button
          type="submit"
          className={`w-full rounded-md py-3 text-white font-medium transition-all flex items-center justify-center ${
            isSubmitting
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gray-900 hover:bg-gray-800'
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg
                className="mr-2 h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                />
              </svg>
              Processing...
            </>
          ) : state === 'Login' ? (
            'Login'
          ) : (
            'Sign Up'
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default Login;