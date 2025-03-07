import { useState, useEffect } from "react";
import Login from "./Login";
import Home from "./Home.jsx";

export default function App() {
  const [token, setToken] = useState(""); // Initial state is empty string

  // Run only once on mount to check for an existing token
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token") || "";
    setToken(storedToken);
  }, []); // Empty dependency array: runs only on mount

  return (
    <div>
      {token === "" ? <Login setToken={setToken} /> : <Home setToken={setToken} />}
    </div>
  );
}