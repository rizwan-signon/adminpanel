import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
        <h1 className="text-3xl text-center font-bold text-white mb-6">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center space-y-4"
        >
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Email"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Password"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Confirm Password"
            required
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-indigo-500 outline-none"
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
