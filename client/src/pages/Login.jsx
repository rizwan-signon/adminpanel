import React from "react";

const Login = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div class="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
        <h1 class="text-3xl font-bold text-white mb-6">Create Account</h1>

        <form class=" flex flex-col justify-center space-y-4">
          <input type="text" class="input" placeholder="Full Name" />
          <input type="email" class="input" placeholder="Email" />
          <input type="password" class="input" placeholder="Password" />
          <input type="password" class="input" placeholder="Confirm Password" />
          <input type="text" class="input" placeholder="Phone number" />

          <button class="btn-primary w-full">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
