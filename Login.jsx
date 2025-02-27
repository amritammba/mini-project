import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add authentication logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full p-4 border-b flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-xl font-semibold text-blue-600">Prescripto</h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">HOME</a>
          <a href="#" className="text-gray-600 hover:text-black border-b-2 border-black">ALL DOCTORS</a>
          <a href="#" className="text-gray-600 hover:text-black">ABOUT</a>
          <a href="#" className="text-gray-600 hover:text-black">CONTACT</a>
        </nav>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full">Create account</button>
      </header>

      {/* Login Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 mt-10">
        <h2 className="text-xl font-semibold mb-2">Login</h2>
        <p className="text-gray-600 mb-4">Please login to book an appointment</p>

        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />

          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />

          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            Login
          </button>
        </form>

        <p className="mt-4 text-gray-600 text-center">
          Don't have an account? <a href="#" className="text-blue-600">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
