import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../redux/shopSlice"; // Adjust path to your shopSlice
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { backendUrl, token } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data) => {
    setIsSubmitting(true);

    try {
      if (state === "Sign Up") {
        await axios.post(`${backendUrl}/api/user/register`, {
          name: data.name,
          email: data.email,
          password: data.password,
        });
        toast.success("Registration successful please log in.");
        setState("Login"); // Switch to Login state
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, {
          email: data.email,
          password: data.password,
        });
        const { token } = response.data;
        dispatch(setToken(token));
        localStorage.setItem("token", token); // Persist token
        toast.success("Login successful!");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(`Error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg border border-gray-100"
      >
        <div className="mb-6 flex items-center justify-center gap-3">
          <h1 className="text-3xl font-serif text-gray-900">{state}</h1>
          <hr className="h-[2px] w-10 bg-gray-800" />
        </div>

        {state === "Sign Up" && (
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all"
              placeholder="Enter your name"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all"
            placeholder="Enter your email"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all"
            placeholder="Enter your password"
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-6 flex justify-between text-sm text-gray-600">
          {state === "Login" && (
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
            onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}
            className="ml-auto hover:text-gray-800 transition-colors"
            aria-label={`Switch to ${state === "Login" ? "Sign Up" : "Login"}`}
          >
            {state === "Login" ? "Create Account" : "Login Here"}
          </button>
        </div>

        <button
          type="submit"
          className={`w-full rounded-md py-3 text-white font-medium transition-all flex items-center justify-center ${
            isSubmitting
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-900"
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
          ) : state === "Login" ? (
            "Login"
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
