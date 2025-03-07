import React, { useState } from "react";
import axios from "axios";

const Login = ({ setToken }) => { // Renamed prop to setToken for clarity
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/v3/user/login", {
        email: email,
        password: password,
      });

      if (response.data) {
        const newToken = response.data.token;
        setToken(newToken); // Update token in App state
        sessionStorage.setItem("token", newToken); // Store in sessionStorage
        console.log("Login Successful!", response.data);
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="bg-red-500 text-white p-4 rounded-t-lg flex justify-center items-center">
          <h2 className="text-xl font-bold">Pokédex</h2>
        </div>

        {/* Login Form */}
        <div className="bg-white shadow-lg rounded-b-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
            Login to Pokédex
          </h2>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition duration-200"
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </form>

          {/* Loading Spinner */}
          {loading && (
            <div className="flex justify-center mt-4">
              <div className="w-6 h-6 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
            </div>
          )}

          {/* Footer */}
          <p className="text-gray-600 text-xs text-center mt-4">
            PLEASE ENTER YOUR EMAIL AND PASSWORD TO LOGIN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;