import React, { useState } from "react";
import { validateUser } from "../utils/validateuser";

const Register = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateUser(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const userPayload = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
    };

    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userPayload),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Network error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
        <h1 className="text-3xl text-center font-bold text-white mb-6">
          Create Account
        </h1>
        <div>
          {Object.keys(errors).length > 0 && (
            <div className="mb-2 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
              <ul className="list-disc list-inside">
                {Object.entries(errors).map(([field, errorMsg]) => (
                  <li key={field}>{errorMsg}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center space-y-4"
        >
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="input"
            placeholder="Full Name"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            placeholder="Password"
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input"
            placeholder="Confirm Password"
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
            placeholder="Phone number"
          />

          <button
            type="submit"
            className="w-full mt-4 px-4 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 font-semibold text-white hover:scale-[1.02] transition-transform"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
